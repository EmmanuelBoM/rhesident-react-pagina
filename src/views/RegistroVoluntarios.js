import React,{useRef, useState} from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import '../styles/base.css'
import '../styles/Formularios.css'
import imgRegistroVoluntario from '../assets/ilustracion_registro_voluntariado.svg'
import Select from 'react-select'
import emailjs from '@emailjs/browser';
import ModalAdminExito from '../components/ModalAdminExito';
import ModalAdminConfirmar from '../components/ModalAdminConfirmar';
import { useParams } from 'react-router-dom';

const options = [
  { value: 'Presencial', label: 'Presencial' },
  { value: 'Híbrido', label: 'Híbrido' },
  { value: 'Remoto', label: 'Remoto' }
]

function RegistroVoluntarios() {

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
            marginTop: '-1.5rem'
        
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
    
    const [modalExitoVisibility, setModalExitoVisibility] = useState(false)
    const [modalConfVisibility, setModalConfVisibility] = useState(false)
    const form = useRef();
    const [contenidoValues, setContenidoValues] = useState({})
    const [modalidadValue, setModalidadValue] = useState('')
    const [contenido, setContenido] = useState('')
    const [asunto, setAsunto] = useState('')
    const [encabezado, setEncabezado] = useState('')
    const [formulario, setFormulario] = useState('')
    const [formul, setFormul] = useState()

    const params = useParams();
    const defaultSelectValue =  { value: params.modalidad, label: params.modalidad }

    const handleModalidadChange = selectedOption =>{
        setModalidadValue(selectedOption.value);
    }

    function handleInputChange(e){
        let newContenido = {
            ...contenidoValues,
            [e.target.name]: e.target.value,
        };

        setContenidoValues(newContenido);
        console.log(contenidoValues)
    }

    const submitRegistro = (e) => {
        if(modalidadValue==='') {setModalidadValue(params.modalidad)}

        setModalConfVisibility(true);
        e.preventDefault();
        setContenido(`
        <strong>Nombre Completo:</strong> ${contenidoValues.nombre}<br/>
        <strong>Correo Electrónico:</strong> ${contenidoValues.correo}<br/>
        <strong>Número de teléfono:</strong> ${contenidoValues.numTelefono}<br/>
        <strong>Lugar de Residencia:</strong> ${contenidoValues.lugarResidencia}<br/>
        <strong>Modalidad de voluntariado:</strong> ${modalidadValue}<br/><br/>
        <strong>¿Por qué te interesaría ser parte de la organización?</strong><br/>${contenidoValues.mensaje}
        `)

        setAsunto("[Voluntariado] Nuevo Registro")
        setEncabezado("Nuevo registro de voluntariado")
        setFormulario("Completa el registro para tu voluntariado")
        setFormul(form.current)
        console.log(contenido)
        
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
            {modalExitoVisibility ? <ModalAdminExito setModalVisibility={setModalExitoVisibility} rutaContinuar='/voluntariado' accion='enviado. ¡Muchas gracias por tu interés! Pronto nos pondremos en contacto contigo' recurso= 'Registro' subt=" " nombreRecurso=" "></ModalAdminExito> : null }
            {modalConfVisibility ? <ModalAdminConfirmar setModalVisibility={setModalConfVisibility} runFunction={sendEmail} accion='enviar' recurso= 'tu respuesta' nombreRecurso=" "></ModalAdminConfirmar> : null }
            <NavHeader></NavHeader>
            <div className="titulo-header">
                <h1 className="verde">Completa el registro para <br /> tu voluntariado</h1>
            </div>
           
            <section className="registro-contenido">
                <img src={imgRegistroVoluntario} alt="" className="img-registro" />
                <div className="cont-formulario-registro">
                    <form action="" ref={form} onSubmit={submitRegistro} className="formulario-registro">
                        <label htmlFor="nombre" className='input-label'>Nombre Completo*</label>
                        <input type="text"  placeholder="Nombre completo" name="nombre" id="" className="input-gral" required onChange={handleInputChange} autoComplete="name"/>
                        <label htmlFor="correo" className='input-label'>Correo electrónico*</label>
                        <input type="email"  placeholder="Correo electrónico" name="correo" id="" className="input-gral" required onChange={handleInputChange}  autoComplete="email"/>
                        <label htmlFor="numTelefono" className='input-label'>Número de teléfono*</label>
                        <input type="tel"  placeholder="10 dígitos" name="numTelefono" id="" className="input-gral" maxLength={10} required onChange={handleInputChange}  autoComplete="tel"/>
                        <label htmlFor="lugarResidencia" className='input-label'>Lugar de residencia*</label>
                        <input type="text"  placeholder="Ciudad o comunidad" name="lugarResidencia" id="" className="input-gral" required onChange={handleInputChange}/>
                        <label htmlFor="" className="input-label">Modalidad de voluntariado*</label>
                        <Select styles={customSelectStyles} options={options} placeholder='Selecciona una modalidad' onChange={handleModalidadChange} defaultValue={defaultSelectValue}/>
                        <label htmlFor="mensaje" className="input-label">¿Por qué te interesaría ser parte de la organización?*</label>
                        <textarea name="mensaje" id=""  cols="30" rows="10" className="input-gral" placeholder='Cuéntanos' onChange={handleInputChange} required></textarea>
                        
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

export default RegistroVoluntarios;
