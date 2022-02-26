import React, {useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/base.css'
import '../styles/AdminLayout.css'
import ilustracionAgregarNota from '../assets/ilustracion_agregar_nota.svg'
import ModalAdminExito from '../components/ModalAdminExito';
import ModalAdminConfirmar from '../components/ModalAdminConfirmar';


// Firebase Imports
import {db} from '../firebaseConfig'
import {collection,addDoc} from "@firebase/firestore";
import { useNavigate } from 'react-router-dom';

function AdminAgregarNota() {
    const [modalExitoVisibility, setModalExitoVisibility] = useState(false)
    const [modalConfVisibility, setModalConfVisibility] = useState(false)
    const [nota, setNota] = useState({})
    
    let navigate = useNavigate();
    useEffect(()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/agregar-nota')
        }

        if (!authToken) {
            navigate('/login')
        }
    },[])
    
    function showModalConfirmar(){
        setModalConfVisibility(true);
    }

    function handleInputChange(e){
        let newNota = {
            ...nota,
            [e.target.name]: e.target.value,
        };

        setNota(newNota);
        console.log(nota)
    }


    const notasCollectionRef = collection(db, "notasMedio")

    const submitNota = async (e) => {
        e.preventDefault();
        console.log(nota);

        try{
            await addDoc(notasCollectionRef,
                {
                    titulo: nota.titulo,
                    fuente: nota.fuente,
                    fecha: nota.fecha, 
                    notaURL: nota.notaURL,
                    visible: true
                })
        }
        catch(error){
            console.log(error)
        }
        setModalConfVisibility(false)
        setModalExitoVisibility(true)
    }
    

    return (
        <div className="body-admin">
            {modalExitoVisibility ? <ModalAdminExito setModalVisibility={setModalExitoVisibility} rutaContinuar='/admin_notas' accion='agregada' recurso= 'Nota' nombreRecurso={nota.titulo}></ModalAdminExito> : null }
            {modalConfVisibility ? <ModalAdminConfirmar setModalVisibility={setModalConfVisibility} runFunction={submitNota} accion='agregar' recurso= 'Nota' nombreRecurso={nota.titulo}></ModalAdminConfirmar> : null }
            
            <AdminNavbar activeTab='notas'></AdminNavbar>
            <main className='main-admin'>
                <section className="admin-form-content">
                    <div className="header-form">
                        <img src={ilustracionAgregarNota} alt="" className="ilustracion-form" />
                        <h2 className="titulo-admin-form negro">Agrega una <br/> nota nueva</h2>
                    </div>
                    <div className="cont-formulario-agregar">
                        <form action="" className="formulario-registro">
                            <label htmlFor="titulo" className='input-label'>Título de la nota*</label>
                            <input type="text"  placeholder="Título completo" name="titulo" className="input-gral" required onChange={handleInputChange}/>
                            
                            <label htmlFor="fuente" className='input-label'>Fuente*</label>
                            <input type="text"  placeholder="Ej.: Milenio, El Sol de Hidalgo, Blog x" name="fuente" id="" className="input-gral" required onChange={handleInputChange}/>
                            
                            <label htmlFor="fecha" className='input-label'>Fecha de publicación*</label>
                            <input type="date"  name="fecha"  className="input-gral" required onChange={handleInputChange}/>

                            <label htmlFor="notaURL" className='input-label'>URL*</label>
                            <input type="text"  placeholder="Enlace a la nota" name="notaURL" className="input-gral" required onChange={handleInputChange}/>
                            
                            <button className="btn-enviar"  type="button" onClick={showModalConfirmar}>
                                <p>Agregar nota</p>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AdminAgregarNota;
