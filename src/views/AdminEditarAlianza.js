import React, {useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/base.css'
import '../styles/AdminLayout.css'
import ilustracionAgregarAlianza from '../assets/ilustracion_agregar_alianza.svg'
import ModalAdminExito from '../components/ModalAdminExito';
import ModalAdminConfirmar from '../components/ModalAdminConfirmar';
import { useParams } from 'react-router-dom';

// Firebase Imports
import {db, storage} from '../firebaseConfig'
import {collection,getDoc, doc, updateDoc} from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";


function AdminEditarAlianza() {
    const [modalExitoVisibility, setModalExitoVisibility] = useState(false)
    const [modalConfVisibility, setModalConfVisibility] = useState(false)
    const [alianza, setAlianza] = useState({})
    const [newAlianza, setNewAlianza] = useState({})
    const [imgURL, setImgURL] = useState('')
    const params = useParams();
   
    const alianzaRef = doc(db, "alianzas", params.id)

    useEffect (()=>{
        const getAlianza = async () => {
          const alianzaDoc = await getDoc(alianzaRef);
          setAlianza(alianzaDoc.data())
          setImgURL(alianzaDoc.data().imgURL)
        }
    
        getAlianza();
      }, []);

    function showModalConfirmar(){
        setModalConfVisibility(true);
    }

    function handleInputChange(e){
        let nuevoAlianza = {
            ...newAlianza,
            [e.target.name]: e.target.value,
        };

        setNewAlianza(nuevoAlianza);
    }

    const handleImgChange = async (e) =>{
        
        const file = e.target.files[0]
        const bucketPath =`images/alianzas/${alianza.nombre}_imgBenef`
        
        const storageRef = ref(storage, bucketPath);
        
        await uploadBytes(storageRef, file)
        .then((snapshot) => {
            console.log('Imagen subida!');
        })
        .catch((error)=>{
            console.log(error)
        });

        setImgURL(await getDownloadURL(storageRef))
    }


    const updateAlianza = async() => {
        const alianzaFB ={
            ...newAlianza, 
            imgURL: imgURL
        }
        console.log(alianzaFB)
        try{
            await updateDoc(alianzaRef, alianzaFB);
        }
        catch(error){
            console.log(error)
        }
        setModalConfVisibility(false)
        setModalExitoVisibility(true)
        
    }


    return (
        <div className="body-admin">
            {modalExitoVisibility ? <ModalAdminExito setModalVisibility={setModalExitoVisibility} rutaContinuar='/admin_alianzas' accion='editada' recurso= 'Alianza' nombreRecurso={alianza.nombre}></ModalAdminExito> : null }
            {modalConfVisibility ? <ModalAdminConfirmar setModalVisibility={setModalConfVisibility} runFunction={updateAlianza} accion='editar' recurso= 'la Alianza' nombreRecurso={alianza.nombre}></ModalAdminConfirmar> : null }
            
            <AdminNavbar activeTab='alianzas'></AdminNavbar>
            <main className='main-admin'>
                <section className="admin-form-content">
                    <div className="header-form">
                        <img src={ilustracionAgregarAlianza} alt="" className="ilustracion-form" />
                        <h2 className="titulo-admin-form negro">Editar alianza colaborativa</h2>
                    </div>
                    <div className="cont-formulario-agregar">
                        <form action="" className="formulario-registro">
                            <label htmlFor="nombre" className='input-label'>Nombre de la alianza</label>
                            <input type="text"  placeholder="Nombre completo" name="nombre" id="" className="input-gral" required onChange={handleInputChange} defaultValue={alianza.nombre}/>
                            
                            <label htmlFor="imgURL" className="input-label">Imagen/Logotipo</label>
                            <div className="file-preview">
                                <input type="file" name="imgURL" id="" className="input-archivo" onChange={handleImgChange}/>
                                <img src={imgURL} alt=""  className="preview-img" />
                               
                            </div>
                            <div className="warning-img">
                                <i class="fa-solid fa-circle-exclamation"></i>
                                <p className="txt-warning">Recuerda comprimir el tamaño de la imagen <a href="https://compressor.io/" target="_blank">aquí</a></p>
                            </div>
                            
                            <button className="btn-enviar"  type="button" onClick={showModalConfirmar}>
                                <p>Editar alianza</p>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AdminEditarAlianza;
