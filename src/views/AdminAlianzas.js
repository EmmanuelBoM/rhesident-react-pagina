import React,{useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import iconoAgregarAlianza from '../assets/icono_agregarAlianza.svg'
import ModalAdminEliminar from '../components/ModalAdminEliminar';

//Estilos
import '../styles/base.css'
import '../styles/AdminLayout.css'

import {Link} from 'react-router-dom'

//Firebase Imports
import {db} from '../firebaseConfig'
import {query, collection, getDocs,orderBy,  deleteDoc, doc} from "@firebase/firestore";
import ItemPanel from '../components/ItemPanel';

function AdminAlianzas() {
    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalInfo, setModalInfo] = useState('')
    const [idAlianza, setIdAlianza] = useState('')
    
    //Firestore GET Query
    const [alianzas, setAlianzas] = useState([])
    const alianzasCollectionRef = collection(db, "alianzas")
  
    const q = query(alianzasCollectionRef, orderBy("nombre"))

    useEffect (()=>{
      const getAlianzas = async () => {
        const data = await getDocs(q);
        setAlianzas(data.docs.map(((doc)=>({...doc.data(), id:doc.id}))))
      }
  
      getAlianzas();
    }, [])

   
    const deleteAlianza = async() => {
        try{
            await deleteDoc(doc(db, "alianzas", idAlianza));
        }
        catch(error){
            console.log(error)
        }
        setModalVisibility(false);
        window.location.reload();
    }

    


  return (
    <div className="body-admin">
    <AdminNavbar activeTab='alianzas'></AdminNavbar>
    {modalVisibility ? <ModalAdminEliminar setModalVisibility={setModalVisibility} recurso='el alianza' nombreRecurso={modalInfo} runFunction={deleteAlianza}></ModalAdminEliminar> : null}
    <main className='main-admin'>
            <header className="header-panel">
                <div className="cont-bienvenida">
                    <i class= 'fa-solid fa-handshake-angle icono-tab icono-pagina'></i>
                    <div className="texto-bienvenida">
                        <p className="verde">Bienvenido Administrador</p>
                        <h3 className="negro">Alianzas</h3>
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
                    <h4 className="verde">Todas las alianzas</h4>
                </div>
                <div className="cont-items-panel">
                    {alianzas.map((alianza, i)=>{
                        return(
                            <ItemPanel doc={alianza} collection='alianzas' objetivo='alianza' setModalInfo={setModalInfo} setId={setIdAlianza} setModalVisibility={setModalVisibility}></ItemPanel>
                        )
                    })}
                    
                </div>
            </div>
            <Link  to='/agregar-alianza' className="btn-agregar-panel">
                <div className="header-card-contenido">
                    <div className="vertical-indicator-light"></div>
                    <h4 className="blanco">Agregar un alianza</h4>
                </div>
                <img src={iconoAgregarAlianza} alt="" className='icono-agregar'/>
            </Link>
                            
            </section>
    </main>
    </div>
  );
}

export default AdminAlianzas;
