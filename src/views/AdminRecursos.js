import React, {useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/AdminLayout.css'
import RecursoPortada from '../components/RecursoPortada';
import RecursoVideo from '../components/RecursoVideo';
import { useNavigate } from 'react-router-dom';

//Firebase Imports
import {db, storage} from '../firebaseConfig'
import {query, collection, getDocs,orderBy, doc, updateDoc,  where, getDoc} from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";




function AdminRecursos() {
    const [popupImg, setPopupImg] = useState('')
    const [popup, setPopup] = useState({})
    const [popupVisibility, setPopupVisibility] = useState()
    const [btnPopupDisabled, setbtnPopupDisabled] = useState(true)

    const [recursosPortada, setRecursosPortada] = useState([])
    const [videos, setVideos] = useState([])

    //Firestore GET Query
    
    const recursosCollectionRef = collection(db, "recursosGenerales")

    const q_portadas = query(recursosCollectionRef, where("tipo","==", "portada"))
    const q_videos = query(recursosCollectionRef, where("tipo","==", "video"))
    const popupRef = doc(db, "recursosGenerales", "enDqmvvOeWGgzB88rDrB")

    let navigate = useNavigate();
    useEffect (()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/admin_proyectos')
        }

        if (!authToken) {
            navigate('/login')
        }
        
        const getRecursos = async () => {
            const data = await getDocs(q_portadas);
            setRecursosPortada(data.docs.map(((doc)=>({...doc.data(), id:doc.id}))))
        }

        const getVideos = async () => {
            const data = await getDocs(q_videos);
            setVideos(data.docs.map(((doc)=>({...doc.data(), id:doc.id}))))
        }

        const getPopup = async () => {
            const popupDoc = await getDoc(popupRef);
            setPopup(popupDoc.data())
            setPopupImg(popupDoc.data().url)
            setPopupVisibility(popupDoc.data().visible)
        }

        getRecursos();
        getVideos();
        getPopup();
    }, [])

    const togglePopUpVisibility = async()=>{
        let visibility;
        if(popupVisibility) { visibility = { visible: false } }
        else{ visibility = { visible: true } }
    
        await updateDoc(popupRef, visibility);
        window.location.reload();
    }

    const handlePopUpChange = async (e) =>{
        
        const file = e.target.files[0]
        const bucketPath =`images/recursos/${popup.nombre}`
        
        const storageRef = ref(storage, bucketPath);
        
        await uploadBytes(storageRef, file)
        .then((snapshot) => {
            console.log('Imagen subida!');
        })
        .catch((error)=>{
            console.log(error)
        });

        setPopupImg(await getDownloadURL(storageRef))
        setbtnPopupDisabled(false)
    }


    const updatePopUp = async() => {
        const recursoFB ={
            url: popupImg
        }
        try{
            await updateDoc(popupRef, recursoFB);
        }
        catch(error){
            console.log(error)
        }
        alert('Recurso actualizado correctamente')
        setbtnPopupDisabled(true)
        
    }

    return (
        <body className='body-admin'>
            <AdminNavbar activeTab='recursos'></AdminNavbar>
            <main className='main-admin'>
                <section className="panel-content">
                    <header className="header-panel">
                        <div className="cont-bienvenida">
                            <i class="fa-solid fa-photo-film icono-pagina"></i>
                            <div className="texto-bienvenida">
                                <p className="verde">Bienvenido Administrador</p>
                                <h3 className="negro">Recursos generales</h3>
                            </div>
                        </div>
                        <div className="cont-accesos-directos">
                            <div className="acceso-directo">
                                <i class="fa-solid fa-house negro"></i>
                                <p className="nombre-acceso-directo negro">Página principal</p>
                            </div>
                        </div>
                    </header>

                    <section className="panel-bottom">
                        <div className="cont-recurso">
                            <h3 className="verde titulo-recurso">Pop Up</h3>
                            <div className="card-contenido-panel card-recurso">
                                <div className="header-card-contenido mb4">
                                    <div className="vertical-indicator"></div>
                                    <h4 className="verde">{popup.nombre}</h4>
                                </div>
                                <div className="file-preview">
                                    <input type="file" name="" id="" className="input-archivo" onChange={handlePopUpChange} />
                                    <img src={popupImg} alt="" className="preview-img" />
                                </div>
                                <button className={btnPopupDisabled ? "btn-disabled" : "btn-enviar" } onClick={updatePopUp}  disabled={btnPopupDisabled} >Actualizar</button>
                                <div className="disable-popup" onClick={togglePopUpVisibility}>
                                    <i class={popup.visible ? 'fa-solid fa-eye icono-accion-tabla icono-tabla-habilitar' : 'fa-solid fa-eye-slash icono-accion-tabla icono-tabla-deshabilitar'}></i>
                                    {popup.visible ?  <p className="negro">Desactivar Pop Up</p> :  <p className="negro">Activar Pop Up</p>}
                                </div>
                            </div>
                        </div>

                        <div className="cont-recurso">
                            <h3 className="verde titulo-recurso">Portadas</h3>
                            {
                                recursosPortada.map((recurso)=>{
                                    return(
                                        <RecursoPortada recurso={recurso}></RecursoPortada>
                                    )
                                    
                                })
                            }
                        </div>

                        <div className="cont-recurso">
                            <h3 className="verde titulo-recurso">Videos</h3>
                            {
                                videos.map((video)=>{
                                    return(
                                        <RecursoVideo recurso={video}></RecursoVideo>
                                    )
                                    
                                })
                            }
                        </div>
                        
                    </section>
                </section>
            </main>
            
            
        </body>
    );
}

export default AdminRecursos;
