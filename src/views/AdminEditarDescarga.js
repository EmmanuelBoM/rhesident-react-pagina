import React, {useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/base.css'
import '../styles/AdminLayout.css'
import ilustracionAgregarDescarga from '../assets/ilustracion_agregar_descarga.svg'
import ModalAdminExito from '../components/ModalAdminExito';
import ModalAdminConfirmar from '../components/ModalAdminConfirmar';
import { useNavigate, useParams } from 'react-router-dom';

// Firebase Imports
import {db, storage} from '../firebaseConfig'
import {collection,getDoc, doc, updateDoc} from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";


function AdminEditarDescarga() {
    const [modalExitoVisibility, setModalExitoVisibility] = useState(false)
    const [modalConfVisibility, setModalConfVisibility] = useState(false)
    const [descarga, setDescarga] = useState({})
    const [newDescarga, setNewDescarga] = useState({})
    const [archivoURL, setArchivoURL] = useState('')
    const params = useParams();
   
    const descargaRef = doc(db, "descargas", params.id)

    let navigate = useNavigate();
    useEffect (()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate(`/editar-descarga/${params.id}`)
        }

        if (!authToken) {
            navigate('/login')
        }
        const getDescarga = async () => {
          const descargaDoc = await getDoc(descargaRef);
          setDescarga(descargaDoc.data())
          setArchivoURL(descargaDoc.data().archivoURL)
        }
    
        getDescarga();
      }, []);

    function showModalConfirmar(){
        setModalConfVisibility(true);
    }

    function handleInputChange(e){
        let nuevaDescarga = {
            ...newDescarga,
            [e.target.name]: e.target.value,
        };

        setNewDescarga(nuevaDescarga);
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


    const updateDescarga = async() => {
        const descargaFB ={
            ...newDescarga, 
            archivoURL: archivoURL
        }
        console.log(descargaFB)
        try{
            await updateDoc(descargaRef, descargaFB);
        }
        catch(error){
            console.log(error)
        }
        setModalConfVisibility(false)
        setModalExitoVisibility(true)
        
    }


    return (
        <div className="body-admin">
            {modalExitoVisibility ? <ModalAdminExito setModalVisibility={setModalExitoVisibility} rutaContinuar='/admin_descargas' accion='editada' recurso= 'Descarga' nombreRecurso={descarga.nombre}></ModalAdminExito> : null }
            {modalConfVisibility ? <ModalAdminConfirmar setModalVisibility={setModalConfVisibility} runFunction={updateDescarga} accion='editar' recurso= 'la descarga ' nombreRecurso={descarga.nombre}></ModalAdminConfirmar> : null }
            
            <AdminNavbar activeTab='descargas'></AdminNavbar>
            <main className='main-admin'>
                <section className="admin-form-content">
                <div className="header-form">
                        <img src={ilustracionAgregarDescarga} alt="" className="ilustracion-form" />
                        <h2 className="titulo-admin-form negro">Editar descarga</h2>
                    </div>
                    <div className="cont-formulario-agregar">
                        <form action="" className="formulario-registro">
                            <label htmlFor="nombre" className='input-label'>Nombre</label>
                            <input type="text"  placeholder="Nombre del archivo" name="nombre"  className="input-gral" defaultValue={descarga.nombre} onChange={handleInputChange}/>

                            <label htmlFor="descripcion" className='input-label'>Descripción</label>
                            <textarea name="descripcion" placeholder="Descripción del archivo"  cols="30" rows="6" className="input-gral" defaultValue={descarga.descripcion} onChange={handleInputChange}></textarea>
                            
                            <label htmlFor="imgURL" className="input-label">Archivo</label>
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

export default AdminEditarDescarga;
