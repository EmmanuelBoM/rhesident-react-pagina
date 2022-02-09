import React, {useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/base.css'
import '../styles/AdminLayout.css'
import ilustracionAgregarDescarga from '../assets/ilustracion_agregar_descarga.svg'
import ModalAdminExito from '../components/ModalAdminExito';
import ModalAdminConfirmar from '../components/ModalAdminConfirmar';


// Firebase Imports
import {db, storage} from '../firebaseConfig'
import {collection,addDoc} from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { useNavigate } from 'react-router-dom';


function AdminAgregarDescarga() {
    const [modalExitoVisibility, setModalExitoVisibility] = useState(false)
    const [modalConfVisibility, setModalConfVisibility] = useState(false)
    const [descarga, setDescarga] = useState({})
    const [archivoURL, setArchivoURL] = useState('')

    let navigate = useNavigate();
    useEffect(()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/agregar-descarga')
        }

        if (!authToken) {
            navigate('/login')
        }
    },[])
    
    function showModalConfirmar(){
        setModalConfVisibility(true);
    }

    function handleInputChange(e){
        let newDescarga = {
            ...descarga,
            [e.target.name]: e.target.value,
        };

        setDescarga(newDescarga);
    }

    const handleArchivoChange = async (e) =>{
        
        const file = e.target.files[0]
        const bucketPath =`files/descargas/${descarga.nombre}`
        
        const storageRef = ref(storage, bucketPath);
        
        await uploadBytes(storageRef, file)
        .then((snapshot) => {
            console.log('Archivo subido!');
        })
        .catch((error)=>{
            console.log(error)
        });

        setArchivoURL(await getDownloadURL(storageRef))
    }



    const descargasCollectionRef = collection(db, "descargas")

    const submitDescarga = async (e) => {
        e.preventDefault();

        try{
            await addDoc(descargasCollectionRef,
                {
                    nombre: descarga.nombre,
                    descripcion: descarga.descripcion,
                    archivoURL: archivoURL,
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
            {modalExitoVisibility ? <ModalAdminExito setModalVisibility={setModalExitoVisibility} rutaContinuar='/admin_descargas' accion='agregada' recurso= 'Descarga' nombreRecurso={descarga.nombre}></ModalAdminExito> : null }
            {modalConfVisibility ? <ModalAdminConfirmar setModalVisibility={setModalConfVisibility} runFunction={submitDescarga} accion='agregar' recurso= 'la descarga' nombreRecurso={descarga.nombre}></ModalAdminConfirmar> : null }
            
            <AdminNavbar activeTab='descargas'></AdminNavbar>
            <main className='main-admin'>
                <section className="admin-form-content">
                    <div className="header-form">
                        <img src={ilustracionAgregarDescarga} alt="" className="ilustracion-form" />
                        <h2 className="titulo-admin-form negro">Agrega una<br/> descarga nueva</h2>
                    </div>
                    <div className="cont-formulario-agregar">
                        <form action="" className="formulario-registro">
                            <label htmlFor="nombre" className='input-label'>Nombre*</label>
                            <input type="text"  placeholder="Nombre del archivo" name="nombre"  className="input-gral" required onChange={handleInputChange}/>

                            <label htmlFor="descripcion" className='input-label'>Descripción</label>
                            <textarea name="descripcion" placeholder="Descripción del archivo"  cols="30" rows="6" className="input-gral"  onChange={handleInputChange}></textarea>
                            
                            <label htmlFor="imgURL" className="input-label">Archivo*</label>
                            <input type="file" name="imgURL"  className="input-archivo" required onChange={handleArchivoChange}/>
                                
                            
                            <button className="btn-enviar"  type="button" onClick={showModalConfirmar}>
                                <p>Agregar descarga</p>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AdminAgregarDescarga;
