import React,{useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import iconoAgregarMiembro from '../assets/icono_agregarMiembro.svg'
import ModalAdminEliminar from '../components/ModalAdminEliminar';

//Estilos
import '../styles/base.css'
import '../styles/AdminLayout.css'

import {Link, useNavigate} from 'react-router-dom'

//Firebase Imports
import {db} from '../firebaseConfig'
import {query, collection, getDocs,orderBy,  deleteDoc, doc} from "@firebase/firestore";
import ItemPanel from '../components/ItemPanel';

function AdminEquipo() {
    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalInfo, setModalInfo] = useState('')
    const [idMiembro, setIdMiembro] = useState('')
    
    //Firestore GET Query
    const [equipo, setEquipo] = useState([])
    const equipoCollectionRef = collection(db, "equipo")
  
    const q = query(equipoCollectionRef, orderBy("nombre"))
    let navigate = useNavigate();

    useEffect (()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/admin_proyectos')
        }

        if (!authToken) {
            navigate('/login')
        }

        const getEquipo = async () => {
            const data = await getDocs(q);
            setEquipo(data.docs.map(((doc)=>({...doc.data(), id:doc.id}))))
        }
  
        getEquipo();
    }, [])

   
    const deleteMiembro = async() => {
        try{
            await deleteDoc(doc(db, "equipo", idMiembro));
        }
        catch(error){
            console.log(error)
        }
        setModalVisibility(false);
        window.location.reload();
    }

    


  return (
    <div className="body-admin">
    <AdminNavbar activeTab='equipo'></AdminNavbar>
    {modalVisibility ? <ModalAdminEliminar setModalVisibility={setModalVisibility} recurso='el miembro' nombreRecurso={modalInfo} runFunction={deleteMiembro}></ModalAdminEliminar> : null}
    <main className='main-admin'>
            <header className="header-panel">
                <div className="cont-bienvenida">
                    <i class= 'fa-solid fa-handshake-angle icono-tab icono-pagina'></i>
                    <div className="texto-bienvenida">
                        <p className="verde">Bienvenido Administrador</p>
                        <h3 className="negro">Equipo</h3>
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
                    <h4 className="verde">Todos los miembros</h4>
                </div>
                <div className="cont-items-panel">
                    {equipo.map((miembro, i)=>{
                        return(
                            <ItemPanel doc={miembro} collection='equipo' objetivo='miembro' setModalInfo={setModalInfo} setId={setIdMiembro} setModalVisibility={setModalVisibility}></ItemPanel>
                        )
                    })}
                    
                </div>
            </div>
            <Link  to='/agregar-miembro' className="btn-agregar-panel">
                <div className="header-card-contenido">
                    <div className="vertical-indicator-light"></div>
                    <h4 className="blanco">Agregar un miembro</h4>
                </div>
                <img src={iconoAgregarMiembro} alt="" className='icono-agregar'/>
            </Link>
                            
            </section>
    </main>
    </div>
  );
}

export default AdminEquipo;
