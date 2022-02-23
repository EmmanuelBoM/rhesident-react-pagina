import React,{useRef, useState} from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import NavMovil from '../components/NavMovil';

import '../styles/base.css'
import '../styles/Formularios.css'
import '../styles/FormularioIdea.css'

import emailjs from '@emailjs/browser';
import ModalAdminExito from '../components/ModalAdminExito';
import ModalAdminConfirmar from '../components/ModalAdminConfirmar';


function FormularioIdea() {

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

    function handleInputChange(e){
        let newContenido = {
            ...contenidoValues,
            [e.target.name]: e.target.value,
        };

        setContenidoValues(newContenido);
        console.log(contenidoValues)
    }

    const submitRegistro = (e) => {
        setModalConfVisibility(true);
        e.preventDefault();
        setContenido(`
        <strong>Nombre Completo:</strong> ${contenidoValues.nombre}<br/>
        <strong>¿Perteneces a algún colectivo? ¿Cuál?</strong> ${contenidoValues.colectivo ? contenidoValues.colectivo : "Ninguno"}<br/>
        <strong>Correo Electrónico:</strong> ${contenidoValues.correo}<br/>
        <strong>Número de teléfono:</strong> ${contenidoValues.numTelefono}<br/>
        <strong>Lugar de Residencia:</strong> ${contenidoValues.lugarResidencia}<br/>
        <strong> Cuéntanos cómo podríamos colaborar</strong><br/>${contenidoValues.mensaje}
        `)

        setAsunto("[Idea] Nueva respuesta")
        setEncabezado("Nueva propuesta de colaboración")
        setFormulario("Cuéntanos tu idea")
        setFormul(form.current)
        
    };

    const sendEmail = ()=>{
        emailjs.sendForm('service_u991eko', 'template_bcuckis', formul, 'user_wh73PvSsOalaHXaqSy8Bk')
        .then((result) => {
            setModalConfVisibility(false)
            setModalExitoVisibility(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <main>
            {modalExitoVisibility ? <ModalAdminExito setModalVisibility={setModalExitoVisibility} rutaContinuar='/como-apoyar' accion='enviada. Pronto nos pondremos en contacto contigo' recurso= 'Respuesta' subt=" " nombreRecurso=" "></ModalAdminExito> : null }
            {modalConfVisibility ? <ModalAdminConfirmar setModalVisibility={setModalConfVisibility} runFunction={sendEmail} accion='enviar' recurso= 'tu respuesta' nombreRecurso=" "></ModalAdminConfirmar> : null }
            {navMovilVisibility ? (
                <NavMovil setNavMovilVisibility={setNavMovilVisibility}></NavMovil>
            ) : null}
            <NavHeader setNavMovilVisibility={setNavMovilVisibility}></NavHeader>
            <div className="titulo-header">
                <h1 className="verde">Cuéntanos tu idea</h1>
            </div>
           
            <section className="registro-contenido cont-idea">
               
                <div className="cont-formulario-registro">
                    <form action="" ref={form} onSubmit={submitRegistro} className="formulario-registro">
                        <label htmlFor="nombre" className='input-label'>Nombre Completo*</label>
                        <input type="text"  placeholder="Nombre completo" name="nombre" id="" className="input-gral" required onChange={handleInputChange} autoComplete="name"/>
                        
                        <label htmlFor="colectivo" className='input-label'>¿Perteneces a algún colectivo? ¿Cuál?</label>
                        <input type="text"  placeholder="Nombre del colectivo, organización, etc." name="colectivo" id="" className="input-gral" onChange={handleInputChange}/>
                        
                        <label htmlFor="correo" className='input-label'>Correo electrónico*</label>
                        <input type="email"  placeholder="Correo electrónico" name="correo" id="" className="input-gral" required onChange={handleInputChange}  autoComplete="email"/>
                        
                        <label htmlFor="numTelefono" className='input-label'>Número de teléfono*</label>
                        <input type="tel"  placeholder="10 dígitos" name="numTelefono" id="" className="input-gral" maxLength={10} required onChange={handleInputChange}  autoComplete="tel"/>
                        <label htmlFor="lugarResidencia" className='input-label'>Lugar de residencia*</label>
                        <input type="text"  placeholder="Ciudad o comunidad" name="lugarResidencia" id="" className="input-gral" required onChange={handleInputChange}/>
                        
                        <label htmlFor="mensaje" className="input-label">Cuéntanos cómo podríamos colaborar*</label>
                        <textarea name="mensaje" id=""  cols="30" rows="10" className="input-gral" placeholder='Escribe tu idea aquí' onChange={handleInputChange} required></textarea>
                        
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
                <div className="cont-info-idea">
                    <div className="info-idea">
                        <h3 className="verde">Síguenos en</h3>
                        <div className="redes-idea">
                            <a href="https://www.facebook.com/rhesident.org">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/rhesident_org/">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/rhesident_org">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/rhesident-org/">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCTzEC-SbnoKXEtavo0MW6dQ">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                        <h3 className="verde">Contacto</h3>
                        <div className="text-idea">
                            <p className="verde bold">Correo Electrónico</p>
                            <p className="verde ">info@rhesident.org</p>
                        </div>
                    </div>
                    <img src='' alt="" className="img-registro" />
                </div>
            </section>
            <Footer></Footer>
        </main>
  );
}

export default FormularioIdea;
