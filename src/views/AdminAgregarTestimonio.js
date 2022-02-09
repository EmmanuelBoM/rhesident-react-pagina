import React, {useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/base.css'
import '../styles/AdminLayout.css'
import ilustracionAgregarTestimonio from '../assets/ilustracion_agregar_testimonio.svg'
import ModalAdminExito from '../components/ModalAdminExito';
import ModalAdminConfirmar from '../components/ModalAdminConfirmar';


// Firebase Imports
import {db, storage} from '../firebaseConfig'
import {collection,addDoc} from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { useNavigate } from 'react-router-dom';


function AdminAgregarTestimonio() {
    const [modalExitoVisibility, setModalExitoVisibility] = useState(false)
    const [modalConfVisibility, setModalConfVisibility] = useState(false)
    const [testimonio, setTestimonio] = useState({})
    const [imgURL, setImgURL] = useState('')
    const [imgCompletaURL, setImgCompletaURL] = useState('')

    let navigate = useNavigate();
    useEffect(()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/agregar-taller')
        }

        if (!authToken) {
            navigate('/login')
        }
    },[])

    function showModalConfirmar(){
        setModalConfVisibility(true);
    }

    function handleInputChange(e){
        let newTestimonio = {
            ...testimonio,
            [e.target.name]: e.target.value,
        };

        setTestimonio(newTestimonio);
        console.log(testimonio)
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



    const testimoniosCollectionRef = collection(db, "testimonios")

    const submitTestimonio = async (e) => {
        e.preventDefault();
        console.log(testimonio);

        try{
            await addDoc(testimoniosCollectionRef,
                {
                    nombre: testimonio.nombre,
                    relacion: testimonio.relacion,
                    testimonio: testimonio.testimonio,
                    imgURL: imgURL,
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
            {modalExitoVisibility ? <ModalAdminExito setModalVisibility={setModalExitoVisibility} rutaContinuar='/admin_testimonios' accion='agregado' recurso= 'Testimonio' nombreRecurso={testimonio.nombre}></ModalAdminExito> : null }
            {modalConfVisibility ? <ModalAdminConfirmar setModalVisibility={setModalConfVisibility} runFunction={submitTestimonio} accion='agregar' recurso= 'el testimonio' nombreRecurso={testimonio.nombre}></ModalAdminConfirmar> : null }
            
            <AdminNavbar activeTab='testimonios'></AdminNavbar>
            <main className='main-admin'>
                <section className="admin-form-content">
                    <div className="header-form">
                        <img src={ilustracionAgregarTestimonio} alt="" className="ilustracion-form" />
                        <h2 className="titulo-admin-form negro">Agrega un<br/> testimonio nuevo</h2>
                    </div>
                    <div className="cont-formulario-agregar">
                        <form action="" className="formulario-registro">
                            <label htmlFor="nombre" className='input-label'>Nombre</label>
                            <input type="text"  placeholder="Persona/Organización que da el tesimonioo" name="nombre" id="" className="input-gral" required onChange={handleInputChange}/>

                            <label htmlFor="relacion" className='input-label'>Relación con Rhesident Org.</label>
                            <input type="text"  placeholder="Ej.: Voluntario, Colaborador, etc." name="relacion" id="" className="input-gral" required onChange={handleInputChange}/>

                            <label htmlFor="testimonio" className='input-label'>Testimonio</label>
                            <textarea name="testimonio" id="" cols="30" rows="10" className="input-gral"  onChange={handleInputChange}></textarea>
                            
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
                                <p>Agregar testimonio</p>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AdminAgregarTestimonio;
