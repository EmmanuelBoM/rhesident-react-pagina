import React, {useState, useEffect} from "react";
import '../styles/AdminLayout.css'

// Firebase Imports
import {db} from '../firebaseConfig'
import {doc, updateDoc} from "@firebase/firestore";

function RecursoVideo(props) {
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [videoURL, setVideoURL] = useState()

    const recursoRef = doc(db, "recursosGenerales", props.recurso.id)

    useEffect(()=>{
        setVideoURL(props.recurso.url)
    }, [])

    function handleInputChange(e){
        setVideoURL(e.target.value)
        setBtnDisabled(false)

    }

    const updateRecurso = async() => {
        const recursoFB ={
            url: videoURL
        }
        try{
            await updateDoc(recursoRef, recursoFB);
        }
        catch(error){
            console.log(error)
        }
        alert('Recurso actualizado correctamente')
        setBtnDisabled(true)
    }
    

    return (
        <div className="card-contenido-panel card-recurso">
        <div className="header-card-contenido mb4">
            <div className="vertical-indicator"></div>
            <h4 className="verde">{props.recurso.nombre}</h4>
        </div>
        <form action="" className="formulario-registro">
            <label htmlFor="videoURL" className='input-label'>URL del video de Youtube</label>
            <input type="text"  placeholder="Enlace al video" name="videoURL" id="" className="input-gral" required onChange={handleInputChange} defaultValue={videoURL}/>
        </form>
        
           
        <button className={btnDisabled ? "btn-disabled" : "btn-enviar" } onClick={updateRecurso}  disabled={btnDisabled} >Actualizar</button>
        </div>
    );
}

export default RecursoVideo;
