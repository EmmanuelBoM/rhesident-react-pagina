import React,{useState} from 'react';
import '../styles/base.css'
import '../styles/LandingPage.css'
import iconoEnviar from '../assets/icono_send.svg'

const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');

    function handleEmailChange(e){
        const newEmail = {...email, [e.target.name]: e.target.value}
        setEmail(newEmail)
        console.log(email.correo)
    }

    const submit = () => {
        email && email.correo.indexOf("@") > -1 && onValidated({EMAIL: email.correo});
        console.log("hola")
        console.log(status)
    }

    return(
        <div >
            <div className="input-newsletter-cont">
                <input  className='input-newsletter' type="email" name="correo" id="" placeholder='Escribe tu correo electrónico'required enterKeyHint='done' autoComplete='off' onChange={handleEmailChange}/>
                <button className="btn-newsletter" onClick={submit}>
                    <i class="fa-solid fa-paper-plane icono-send-newsletter"></i>
                </button>
            </div>
            {status === "sending" && <p className='blanco mc-texto mc-enviando'>Enviando...</p>}

            {status === "error" && (
                <p className='mc-texto mc-error'>Ha ocurrido un error. Por favor verifica no haberte suscrito previamente al newsletter</p>
            )}

            {status === "success" && (
                <p className='mc-texto mc-exito'>¡Gracias por suscribirte! </p>
               
            )}

            
            
        </div>
  );
    }
export default CustomForm;
