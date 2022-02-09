import React, {useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/base.css'
import '../styles/AdminLayout.css'
import ilustracionAgregarBeneficiario from '../assets/ilustracion_agregar_beneficiario.svg'
import ModalAdminExito from '../components/ModalAdminExito';
import ModalAdminConfirmar from '../components/ModalAdminConfirmar';
import { useNavigate, useParams } from 'react-router-dom';

// Firebase Imports
import {db, storage} from '../firebaseConfig'
import {collection,getDoc, doc, updateDoc} from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";


function AdminEditarBeneficiario() {
    const [modalExitoVisibility, setModalExitoVisibility] = useState(false)
    const [modalConfVisibility, setModalConfVisibility] = useState(false)
    const [beneficiario, setBeneficiario] = useState({})
    const [newBeneficiario, setNewBeneficiario] = useState({})
    const [imgURL, setImgURL] = useState('')
    const params = useParams();

    const beneficiarioRef = doc(db, "beneficiarios", params.id)
    
    let navigate = useNavigate();
    useEffect (()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/admin_proyectos')
        }

        if (!authToken) {
            navigate('/login')
        }
        const getBeneficiario = async () => {
          const beneficiarioDoc = await getDoc(beneficiarioRef);
          setBeneficiario(beneficiarioDoc.data())
          setImgURL(beneficiarioDoc.data().imgURL)
        }
    
        getBeneficiario();
      }, []);

    function showModalConfirmar(){
        setModalConfVisibility(true);
    }

    function handleInputChange(e){
        let nuevoBeneficiario = {
            ...newBeneficiario,
            [e.target.name]: e.target.value,
        };

        setNewBeneficiario(nuevoBeneficiario);
    }

    const handleImgChange = async (e) =>{
        
        const file = e.target.files[0]
        const bucketPath =`images/beneficiarios/${beneficiario.nombre}_imgBenef`
        
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


    const updateBeneficiario = async() => {
        const beneficiarioFB ={
            ...newBeneficiario, 
            imgURL: imgURL
        }
        console.log(beneficiarioFB)
        try{
            await updateDoc(beneficiarioRef, beneficiarioFB);
        }
        catch(error){
            console.log(error)
        }
        setModalConfVisibility(false)
        setModalExitoVisibility(true)
        
    }


    return (
        <div className="body-admin">
            {modalExitoVisibility ? <ModalAdminExito setModalVisibility={setModalExitoVisibility} rutaContinuar='/admin_beneficiarios' accion='editado' recurso= 'Beneficiario' nombreRecurso={beneficiario.nombre}></ModalAdminExito> : null }
            {modalConfVisibility ? <ModalAdminConfirmar setModalVisibility={setModalConfVisibility} runFunction={updateBeneficiario} accion='editar' recurso= 'el Beneficiario' nombreRecurso={beneficiario.nombre}></ModalAdminConfirmar> : null }
            
            <AdminNavbar activeTab='beneficiarios'></AdminNavbar>
            <main className='main-admin'>
                <section className="admin-form-content">
                    <div className="header-form">
                        <img src={ilustracionAgregarBeneficiario} alt="" className="ilustracion-form" />
                        <h2 className="titulo-admin-form negro">Agrega un<br/> beneficiario nuevo</h2>
                    </div>
                    <div className="cont-formulario-agregar">
                        <form action="" className="formulario-registro">
                            <label htmlFor="nombre" className='input-label'>Nombre del beneficiario</label>
                            <input type="text"  placeholder="Nombre completo" name="nombre" id="" className="input-gral" required onChange={handleInputChange} defaultValue={beneficiario.nombre}/>
                            
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
                                <p>Editar beneficiario</p>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AdminEditarBeneficiario;
