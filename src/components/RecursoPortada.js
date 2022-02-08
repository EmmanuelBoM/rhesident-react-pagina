import React, {useState, useEffect} from "react";
import '../styles/AdminLayout.css'

// Firebase Imports
import {db, storage} from '../firebaseConfig'
import {doc, updateDoc} from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";

function RecursoPortada(props) {
    const [imgURL, setImgURL] = useState();
    const [btnDisabled, setBtnDisabled] = useState(true);

    useEffect(()=>{
        setImgURL(props.recurso.url)
    }, [])

    const recursoRef = doc(db, "recursosGenerales", props.recurso.id)

    const handleImgChange = async (e) =>{
        
        const file = e.target.files[0]
        const bucketPath =`images/recursos/${props.recurso.nombre}`
        
        const storageRef = ref(storage, bucketPath);
        
        await uploadBytes(storageRef, file)
        .then((snapshot) => {
            console.log('Imagen subida!');
        })
        .catch((error)=>{
            console.log(error)
        });

        setImgURL(await getDownloadURL(storageRef))
        setBtnDisabled(false)
    }


    const updateRecurso = async() => {
        const recursoFB ={
            url: imgURL
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
        <div className="file-preview">
            <input type="file" name="" id="" className="input-archivo" onChange={handleImgChange}/>
            <img src={imgURL} alt="" className="preview-img" />
        </div>
        <button className={btnDisabled ? "btn-disabled" : "btn-enviar" }onClick={updateRecurso}  disabled={btnDisabled} >Actualizar</button>
        </div>
    );
}

export default RecursoPortada;
