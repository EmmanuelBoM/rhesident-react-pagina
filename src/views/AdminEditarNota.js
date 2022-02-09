import React, {useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/base.css'
import '../styles/AdminLayout.css'
import ilustracionAgregarNota from '../assets/ilustracion_agregar_nota.svg'
import ModalAdminExito from '../components/ModalAdminExito';
import ModalAdminConfirmar from '../components/ModalAdminConfirmar';
import { useNavigate, useParams } from 'react-router-dom';

// Firebase Imports
import {db} from '../firebaseConfig'
import {collection,updateDoc, getDoc, doc} from "@firebase/firestore";

function AdminEditarNota() {
    const [modalExitoVisibility, setModalExitoVisibility] = useState(false)
    const [modalConfVisibility, setModalConfVisibility] = useState(false)
    const [nota, setNota] = useState({})
    const [newNota, setNewNota] = useState({})
    let params = useParams();

    const notaRef = doc(db, "notasMedio", params.id)
    let navigate = useNavigate();
    useEffect (()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/admin_proyectos')
        }

        if (!authToken) {
            navigate('/login')
        }
        
        const getNota = async () => {
          const notaDoc = await getDoc(notaRef);
          setNota(notaDoc.data())
        }
    
        getNota();
      }, []);

    const customSelectStyles = {
        control: (base, state) => ({
            ...base,
            border: "2px solid #cfcfc9",
            boxShadow: state.isFocused ? null : null,
            padding: "0.3rem 0rem",
            borderRadius: "1rem",
            fontSize: "1.8rem",
            color: "#F7F7F7",
            fontFamily: "Lato",
            textAlign: "start",
            backgroundColor: 'rgba(255, 255, 255, 0)',
            marginBottom: '2rem',
            "&:focus ": {
                outline: "none !important",
                border: "2px solid var(--p-400)"
              },
          }),
        placeholder: base =>({
            ...base,
            color: "#878778"
        }),
        menu: base => ({
            ...base,
            borderRadius: "1rem",
            background: "#FCFCFC",
            color: "#878778",
            fontSize: "1.8rem",
            textAlign: "start",
            fontFamily: "Lato",
            marginTop: '-1.4rem'
        
        }),
        menuList: base => ({
            ...base,
            borderRadius: "1rem",
        }),
        singleValue: base => ({
            ...base,
            color: "#1b1b18",
        }),
        input: base => ({
            ...base,
            color: "#1b1b18",
        }),
        dropdownIndicator: base => ({
            ...base,
            color: "#164453"
        }),
        option: (base,{data, isDisabled, isFocused,isSelected}) => ({
            ...base,
            color: "#1A1A1A",
            backgroundColor: isDisabled ? undefined: isSelected,
            "&:hover ": {
                background: "#164453",
                color:"#f0f0ee"
              },
        }),
        container: base => ({
            ...base,
            "@media only screen and (max-width: 576px)": {
                ...base["@media only screen and (max-width: 576px)"],
                width:"100%",
        },
        })
    }


    function showModalConfirmar(){
        setModalConfVisibility(true);
    }

    function handleInputChange(e){
        let nuevaNota = {
            ...nota,
            [e.target.name]: e.target.value,
        };

        setNewNota(nuevaNota);
        console.log(newNota)
    }

    const updateNota = async() => {
        try{
            await updateDoc(notaRef, newNota);
        }
        catch(error){
            console.log(error)
        }
        setModalConfVisibility(false)
        setModalExitoVisibility(true)
        
    }

    

    return (
        <div className="body-admin">
            {modalExitoVisibility ? <ModalAdminExito setModalVisibility={setModalExitoVisibility} rutaContinuar='/admin_notas' accion='editada' recurso= 'Nota' nombreRecurso={nota.titulo}></ModalAdminExito> : null }
            {modalConfVisibility ? <ModalAdminConfirmar setModalVisibility={setModalConfVisibility} runFunction={updateNota} accion='editar' recurso= 'Nota' nombreRecurso={nota.titulo}></ModalAdminConfirmar> : null }
            
            <AdminNavbar activeTab='notas'></AdminNavbar>
            <main className='main-admin'>
                <section className="admin-form-content">
                    <div className="header-form">
                        <img src={ilustracionAgregarNota} alt="" className="ilustracion-form" />
                        <h2 className="titulo-admin-form negro">Edita la <br/> nota de medios</h2>
                    </div>
                    <div className="cont-formulario-agregar">
                        <form action="" className="formulario-registro">
                            <label htmlFor="titulo" className='input-label'>Título de la nota</label>
                            <input type="text"  placeholder="Título completo" name="titulo" id="" className="input-gral" required onChange={handleInputChange} defaultValue={nota.titulo}/>
                            
                            <label htmlFor="fuente" className='input-label'>Fuente</label>
                            <input type="text"  placeholder="Ej.: Milenio, El Sol de Hidalgo, Blog x" name="fuente" id="" className="input-gral" required onChange={handleInputChange} defaultValue={nota.fuente}/>
                            
                            <label htmlFor="fecha" className='input-label'>Fecha de publicación</label>
                            <input type="date"  name="fecha" id="" className="input-gral" required onChange={handleInputChange} defaultValue={nota.fecha}/>

                            <label htmlFor="notaURL" className='input-label'>URL</label>
                            <input type="text"  placeholder="Enlace a la nota" name="notaURL" id="" className="input-gral" required onChange={handleInputChange} defaultValue={nota.notaURL}/>
                            
                            <button className="btn-enviar"  type="button" onClick={showModalConfirmar}>
                                <p>Editar nota</p>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AdminEditarNota;
