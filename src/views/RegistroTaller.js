import React,{useRef, useState, useEffect} from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import '../styles/base.css'
import '../styles/Formularios.css'
import imgRegistroVoluntario from '../assets/ilustracion_agregar_taller.svg'
import NavMovil from '../components/NavMovil';

import emailjs from '@emailjs/browser';
import ModalAdminExito from '../components/ModalAdminExito';
import ModalAdminConfirmar from '../components/ModalAdminConfirmar';
import { useParams } from 'react-router-dom';

// Firebase Imports
import {db} from '../firebaseConfig'
import {doc, getDoc} from "@firebase/firestore";


function RegistroTaller() {
    const [taller, setTaller] = useState({})
    const [modalExitoVisibility, setModalExitoVisibility] = useState(false)
    const [modalConfVisibility, setModalConfVisibility] = useState(false)
    const form = useRef();
    const [contenidoValues, setContenidoValues] = useState({})
    const [contenido, setContenido] = useState('')
    const [asunto, setAsunto] = useState('')
    const [encabezado, setEncabezado] = useState('')
    const [formulario, setFormulario] = useState('')
    const [formul, setFormul] = useState()
    const [navMovilVisibility, setNavMovilVisibility] = useState(false)

    const params = useParams();

    const tallerRef = doc(db, "talleres", params.id)
    useEffect (()=>{
        const getTaller = async () => {
            const tallerDoc = await getDoc(tallerRef);
            setTaller(tallerDoc.data())
        }
    
        getTaller();
      }, []);


    function handleInputChange(e){
        let newContenido = {
            ...contenidoValues,
            [e.target.name]: e.target.value,
        };

        setContenidoValues(newContenido);
        console.log(contenidoValues)
    }

    const submitRegistro = (e) => {
        e.preventDefault();

        setModalConfVisibility(true);
        
        setContenido(`
        <strong>Taller:</strong> ${taller.nombre}<br/>
        <strong>Nombre Completo:</strong> ${contenidoValues.nombre}<br/>
        <strong>Correo Electr??nico:</strong> ${contenidoValues.correo}<br/>
        <strong>N??mero de tel??fono:</strong> ${contenidoValues.numTelefono}<br/>
        <strong>Lugar de Residencia:</strong> ${contenidoValues.lugarResidencia}<br/>
        <strong>??Por qu?? te interesar??a cursar este taller?</strong><br/>${contenidoValues.mensaje}
        `)

        setAsunto("[Taller] Nuevo Registro")
        setEncabezado("Nuevo registro de taller")
        setFormulario("Reg??strate al taller")
        setFormul(form.current)
        console.log(contenido)
        
    };

    const sendEmail = ()=>{
        emailjs.sendForm('service_ptr57gn', 'template_uewpabn', formul, 'user_6Z59AsBJ728YVhNVXCx7x')
        .then((result) => {
            setModalConfVisibility(false)
            setModalExitoVisibility(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <main>
            {modalExitoVisibility ? <ModalAdminExito setModalVisibility={setModalExitoVisibility} rutaContinuar='/talleres' accion='completado. Pronto nos pondremos en contacto' recurso= 'Registro' subt=" " nombreRecurso=" "></ModalAdminExito> : null }
            {modalConfVisibility ? <ModalAdminConfirmar setModalVisibility={setModalConfVisibility} runFunction={sendEmail} accion='enviar' recurso= 'tu registro' nombreRecurso=" "></ModalAdminConfirmar> : null }
            {navMovilVisibility ? (
                <NavMovil setNavMovilVisibility={setNavMovilVisibility}></NavMovil>
            ) : null}
            <NavHeader setNavMovilVisibility={setNavMovilVisibility}></NavHeader>
            <div className="titulo-header">
                <h1 className="verde">Reg??strate al taller</h1>
                <h3 className="negro">{taller.nombre}</h3>
            </div>
           
            <section className="registro-contenido">
                <img src={imgRegistroVoluntario} alt="" className="img-registro" />
                <div className="cont-formulario-registro">
                    <form action="" ref={form} onSubmit={submitRegistro} className="formulario-registro">
                        <label htmlFor="nombre" className='input-label'>Nombre Completo*</label>
                        <input type="text"  placeholder="Nombre completo" name="nombre" id="" className="input-gral" required onChange={handleInputChange} autoComplete="name"/>
                        <label htmlFor="correo" className='input-label'>Correo electr??nico*</label>
                        <input type="email"  placeholder="Correo electr??nico" name="correo" id="" className="input-gral" required onChange={handleInputChange}  autoComplete="email"/>
                        <label htmlFor="numTelefono" className='input-label'>N??mero de tel??fono*</label>
                        <input type="tel"  placeholder="10 d??gitos" name="numTelefono" id="" className="input-gral" maxLength={10} required onChange={handleInputChange}  autoComplete="tel"/>
                        <label htmlFor="lugarResidencia" className='input-label'>Lugar de residencia*</label>
                        <input type="text"  placeholder="Ciudad o comunidad" name="lugarResidencia" id="" className="input-gral" required onChange={handleInputChange}/>
                        <label htmlFor="mensaje" className="input-label">??Por qu?? te interesar??a cursar este taller?*</label>
                        <textarea name="mensaje" id=""  cols="30" rows="10" className="input-gral" placeholder='Cu??ntanos' onChange={handleInputChange} required></textarea>
                        
                        <input type="text" name="asunto" id="" value={asunto} className="input-gral dnone"/>
                        <input type="text" name="formulario" id="" value={formulario} className="input-gral dnone"/>
                        <input type="text" name="encabezado" id="" value={encabezado} className="input-gral dnone"/>
                        <input type="text" name="contenido" id="" value={contenido} className="input-gral dnone"/>
                        
                        <button className="btn-enviar" type="submit">
                            <p>Enviar</p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </form>
                </div>
            </section>
            <Footer></Footer>
        </main>
  );
}

export default RegistroTaller;
