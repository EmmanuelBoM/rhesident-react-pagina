import React, {useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/base.css'
import '../styles/AdminLayout.css'
import ilustracionAgregarTestimonio from '../assets/ilustracion_agregar_testimonio.svg'
import ModalAdminExito from '../components/ModalAdminExito';
import ModalAdminConfirmar from '../components/ModalAdminConfirmar';
import { useParams } from 'react-router-dom';

// Firebase Imports
import {db, storage} from '../firebaseConfig'
import {collection,getDoc, doc, updateDoc} from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";


function AdminEditarTestimonio() {
    const [modalExitoVisibility, setModalExitoVisibility] = useState(false)
    const [modalConfVisibility, setModalConfVisibility] = useState(false)
    const [testimonio, setTestimonio] = useState({})
    const [newTestimonio, setNewTestimonio] = useState({})
    const [imgURL, setImgURL] = useState('')
    const params = useParams();
   
    const testimonioRef = doc(db, "testimonios", params.id)

    useEffect (()=>{
        const getTestimonio = async () => {
          const testimonioDoc = await getDoc(testimonioRef);
          setTestimonio(testimonioDoc.data())
          setImgURL(testimonioDoc.data().imgURL)
        }
    
        getTestimonio();
      }, []);

    function showModalConfirmar(){
        setModalConfVisibility(true);
    }

    function handleInputChange(e){
        let nuevoTestimonio = {
            ...newTestimonio,
            [e.target.name]: e.target.value,
        };

        setNewTestimonio(nuevoTestimonio);
    }

    const handleImgChange = async (e) =>{
        
        const file = e.target.files[0]
        const bucketPath =`images/testimonios/${testimonio.nombre}_img`
        
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


    const updateTestimonio = async() => {
        const testimonioFB ={
            ...newTestimonio, 
            imgURL: imgURL
        }
        console.log(testimonioFB)
        try{
            await updateDoc(testimonioRef, testimonioFB);
        }
        catch(error){
            console.log(error)
        }
        setModalConfVisibility(false)
        setModalExitoVisibility(true)
        
    }


    return (
        <div className="body-admin">
            {modalExitoVisibility ? <ModalAdminExito setModalVisibility={setModalExitoVisibility} rutaContinuar='/admin_testimonios' accion='editado' recurso= 'Testimonio de' nombreRecurso={newTestimonio.nombre}></ModalAdminExito> : null }
            {modalConfVisibility ? <ModalAdminConfirmar setModalVisibility={setModalConfVisibility} runFunction={updateTestimonio} accion='editar' recurso= 'el Testimonio de' nombreRecurso={testimonio.nombre}></ModalAdminConfirmar> : null }
            
            <AdminNavbar activeTab='testimonios'></AdminNavbar>
            <main className='main-admin'>
                <section className="admin-form-content">
                    <div className="header-form">
                        <img src={ilustracionAgregarTestimonio} alt="" className="ilustracion-form" />
                        <h2 className="titulo-admin-form negro">Editar testimonio</h2>
                    </div>
                    <div className="cont-formulario-agregar">
                        <form action="" className="formulario-registro">
                            <label htmlFor="nombre" className='input-label'>Nombre</label>
                            <input type="text"  placeholder="Persona/Organización que da el tesimonioo" name="nombre" id="" className="input-gral" required onChange={handleInputChange} defaultValue={testimonio.nombre}/>

                            <label htmlFor="relacion" className='input-label'>Relación con Rhesident Org.</label>
                            <input type="text"  placeholder="Ej.: Voluntario, Colaborador, etc." name="relacion" id="" className="input-gral" required onChange={handleInputChange} defaultValue={testimonio.relacion}/>

                            <label htmlFor="testimonio" className='input-label'>Testimonio</label>
                            <textarea name="testimonio" id="" cols="30" rows="10" className="input-gral"  onChange={handleInputChange} defaultValue={testimonio.testimonio}></textarea>
                            
                            <label htmlFor="imgURL" className="input-label">Imagen / Logotipo</label>
                            <div className="file-preview">
                                <input type="file" name="imgURL" id="" className="input-archivo" onChange={handleImgChange}/>
                                <img src={imgURL} alt=""  className="preview-img" />
                            </div>

                            <div className="warning-img">
                                <i class="fa-solid fa-circle-exclamation"></i>
                                <p className="txt-warning">Recuerda comprimir el tamaño de la imagen <a href="https://compressor.io/">aquí</a></p>
                            </div>
                            
                            <button className="btn-enviar"  type="button" onClick={showModalConfirmar}>
                                <p>Editar testimonio</p>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AdminEditarTestimonio;
