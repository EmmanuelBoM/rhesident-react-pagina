import React,{useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import iconoAgregarBeneficiario from '../assets/icono_agregarBeneficiario.svg'
import ModalAdminEliminar from '../components/ModalAdminEliminar';
//Estilos
import '../styles/base.css'
import '../styles/AdminLayout.css'

import {Link, useNavigate} from 'react-router-dom'

//Firebase Imports
import {db} from '../firebaseConfig'
import {query, collection, getDocs,orderBy,  deleteDoc, doc} from "@firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import ItemPanel from '../components/ItemPanel';

function AdminBeneficiarios() {
    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalInfo, setModalInfo] = useState('')
    const [idBeneficiario, setIdBeneficiario] = useState('')
    const storage = getStorage();

    //Firestore GET Query
    const [beneficiarios, setBeneficiarios] = useState([])
    const beneficiariosCollectionRef = collection(db, "beneficiarios")
  
    const q = query(beneficiariosCollectionRef, orderBy("nombre"))
    let navigate = useNavigate();

    useEffect (()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/admin_beneficiarios')
        }

        if (!authToken) {
            navigate('/login')
        }
        const getBeneficiarios = async () => {
            const data = await getDocs(q);
            setBeneficiarios(data.docs.map(((doc)=>({...doc.data(), id:doc.id}))))
        }
    
        getBeneficiarios();
    }, [])

    
    const deleteBeneficiario = async() => {
        const beneficiarioRef = ref(storage, `images/beneficiarios/${modalInfo}_imgBenef`);
        try{
            await deleteDoc(doc(db, "beneficiarios", idBeneficiario));
            
            deleteObject(beneficiarioRef).then(() => {
                console.log("Imagenes eliminadas")
            }).catch((error) => {
                console.log(error)
            });
        }
        catch(error){
            console.log(error)
        }
        setModalVisibility(false);
        window.location.reload();
    }

    


  return (
    <div className="body-admin">
    <AdminNavbar activeTab='beneficiarios'></AdminNavbar>
    {modalVisibility ? <ModalAdminEliminar setModalVisibility={setModalVisibility} recurso='el beneficiario' nombreRecurso={modalInfo} runFunction={deleteBeneficiario}></ModalAdminEliminar> : null}
    <main className='main-admin'>
            <header className="header-panel">
                <div className="cont-bienvenida">
                    <svg className='icono-pagina icono-proyectos'   viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M2.99641 0.789141L2.86446 0.863465C0.257783 2.31614 -0.728625 5.34748 0.569451 7.88716C0.834975 8.40743 1.11062 8.9121 1.38626 9.3692C2.81386 11.732 12.5168 34.8559 17.0822 28.5495C21.6475 22.243 28.7839 10.9438 27.9298 9.36697C27.0758 7.79017 24.7905 4.89967 22.2227 4.89967C21.2148 4.89967 19.7237 5.22336 18.2835 5.61691C15.6691 6.33117 12.8629 5.30549 11.4798 3.14078L11.1985 2.7004C9.51715 0.072649 5.82975 -0.786917 2.99641 0.789141Z"/>
                    </svg>
                    <div className="texto-bienvenida">
                        <p className="verde">Bienvenido Administrador</p>
                        <h3 className="negro">Beneficiarios</h3>
                    </div>
                </div>
                <div className="cont-accesos-directos">
                    <Link to='/' className="acceso-directo">
                        <i class="fa-solid fa-house negro"></i>
                        <p className="nombre-acceso-directo negro">Página principal</p>
                    </Link>
                </div>
            </header>
            
            <section className="panel-bottom-2">
           
            <div className="card-contenido-panel card-cont-items">
                <div className="header-card-contenido">
                    <div className="vertical-indicator"></div>
                    <h4 className="verde">Todos los beneficiarios</h4>
                </div>
                <div className="cont-items-panel">
                    {beneficiarios.map((beneficiario, i)=>{
                        return(
                            <ItemPanel doc={beneficiario} collection='beneficiarios' objetivo='beneficiario' setModalInfo={setModalInfo} setId={setIdBeneficiario} setModalVisibility={setModalVisibility}></ItemPanel>
                        )
                    })}
                    
                </div>
            </div>
            <Link  to='/agregar-beneficiario' className="btn-agregar-panel">
                <div className="header-card-contenido">
                    <div className="vertical-indicator-light"></div>
                    <h4 className="blanco">Agregar un beneficiario</h4>
                </div>
                <img src={iconoAgregarBeneficiario} alt="" className='icono-agregar'/>
            </Link>
                            
            </section>
    </main>
    </div>
  );
}

export default AdminBeneficiarios;
