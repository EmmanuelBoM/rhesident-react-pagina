import React, {useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/base.css'
import '../styles/AdminLayout.css'
import ilustracionAgregarMiembro from '../assets/ilustracion_agregar_miembro.svg'
import ModalAdminExito from '../components/ModalAdminExito';
import ModalAdminConfirmar from '../components/ModalAdminConfirmar';

// Firebase Imports
import {db, storage} from '../firebaseConfig'
import {collection,addDoc} from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { useNavigate } from 'react-router-dom';


function AdminAgregarMiembro() {
    const [modalExitoVisibility, setModalExitoVisibility] = useState(false)
    const [modalConfVisibility, setModalConfVisibility] = useState(false)
    const [miembro, setMiembro] = useState({})
    const [imgPerfilURL, setImgPerfilURL] = useState('')
    const [imgCompletaURL, setImgCompletaURL] = useState('')

    let navigate = useNavigate();
    useEffect(()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/agregar-miembro')
        }

        if (!authToken) {
            navigate('/login')
        }
    },[])
    
    function showModalConfirmar(){
        setModalConfVisibility(true);
    }

    function handleInputChange(e){
        let newMiembro = {
            ...miembro,
            [e.target.name]: e.target.value,
        };

        setMiembro(newMiembro);
        console.log(miembro)
    }

    const handleImgPerfilChange = async (e) =>{
        
        const file = e.target.files[0]
        const bucketPath =`images/equipo/${miembro.nombre}_imgPerfil`
        
        const storageRef = ref(storage, bucketPath);
        
        await uploadBytes(storageRef, file)
        .then((snapshot) => {
            console.log('Imagen subida!');
        })
        .catch((error)=>{
            console.log(error)
        });

        setImgPerfilURL(await getDownloadURL(storageRef))
    }


    const handleImgCompletaChange = async (e) =>{
        
        const file = e.target.files[0]
        const bucketPath =`images/equipo/${miembro.nombre}_imgCompleta`
        
        const storageRef = ref(storage, bucketPath);
        
        await uploadBytes(storageRef, file)
        .then((snapshot) => {
            console.log('Imagen subida!');
        })
        .catch((error)=>{
            console.log(error)
        });

        setImgCompletaURL(await getDownloadURL(storageRef))
    }


    const miembrosCollectionRef = collection(db, "equipo")

    const submitMiembro = async (e) => {
        e.preventDefault();
        console.log(miembro);

        try{
            await addDoc(miembrosCollectionRef,
                {
                    nombre: miembro.nombre,
                    areaEspecializacion: miembro.areaEspecializacion,
                    descripcion: miembro.descripcion,
                    imgPerfilURL: imgPerfilURL,
                    imgCompletaURL: imgCompletaURL,
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
            {modalExitoVisibility ? <ModalAdminExito setModalVisibility={setModalExitoVisibility} rutaContinuar='/admin_equipo' accion='agregado' recurso= 'Miembro' nombreRecurso={miembro.nombre}></ModalAdminExito> : null }
            {modalConfVisibility ? <ModalAdminConfirmar setModalVisibility={setModalConfVisibility} runFunction={submitMiembro} accion='agregar' recurso= 'el miembro' nombreRecurso={miembro.nombre}></ModalAdminConfirmar> : null }
            
            <AdminNavbar activeTab='miembros'></AdminNavbar>
            <main className='main-admin'>
                <section className="admin-form-content">
                    <div className="header-form">
                        <img src={ilustracionAgregarMiembro} alt="" className="ilustracion-form" />
                        <h2 className="titulo-admin-form negro">Agrega un<br/> miembro nuevo</h2>
                    </div>
                    <div className="cont-formulario-agregar">
                        <form action="" className="formulario-registro">
                            <label htmlFor="nombre" className='input-label'>Nombre del miembro</label>
                            <input type="text"  placeholder="Nombre completo" name="nombre" id="" className="input-gral" required onChange={handleInputChange}/>

                            <label htmlFor="areaEspecializacion" className='input-label'>Área de especialización</label>
                            <input type="text"  placeholder="Ej.: Marketing, Diseño, Community Manager, Antropología" name="areaEspecializacion" id="" className="input-gral" required onChange={handleInputChange}/>

                            <label htmlFor="descripcion" className='input-label'>Descripción</label>
                            <textarea name="descripcion" id="" cols="30" rows="10" className="input-gral"  onChange={handleInputChange}></textarea>
                            
                            <label htmlFor="imgPerfilURL" className="input-label">Imagen de perfil</label>
                            <div className="file-preview">
                                <input type="file" name="imgPerfilURL" id="" className="input-archivo" onChange={handleImgPerfilChange}/>
                                <img src={imgPerfilURL} alt=""  className="preview-img" />
                            </div>

                            <div className="warning-img">
                                <i class="fa-solid fa-circle-exclamation"></i>
                                <p className="txt-warning">Recuerda comprimir el tamaño de la imagen <a href="https://compressor.io/" target="_blank">aquí</a></p>
                            </div>

                            <label htmlFor="imgCompletaURL" className="input-label">Imagen Completa</label>
                            <div className="file-preview">
                                <input type="file" name="imgCompletaURL" id="" className="input-archivo" onChange={handleImgCompletaChange}/>
                                <img src={imgCompletaURL} alt=""  className="preview-img" />
                            </div>
                            <div className="warning-img">
                                <i class="fa-solid fa-circle-exclamation"></i>
                                <p className="txt-warning">Recuerda comprimir el tamaño de la imagen <a href="https://compressor.io/" target="_blank">aquí</a></p>
                            </div>
                            
                            <button className="btn-enviar"  type="button" onClick={showModalConfirmar}>
                                <p>Agregar miembro</p>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AdminAgregarMiembro;
