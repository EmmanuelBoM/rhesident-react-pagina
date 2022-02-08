import React,{useState} from 'react';
import '../styles/base.css'
import '../styles/LandingPage.css'
import iconoEnviar from '../assets/icono_send.svg'

const CustomFormFooter = ({ status, message, onValidated }) => {
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
            <div className="input-newsletter-cont-s">
                <input  className='input-newsletter-s' type="email" name="correo" id="" placeholder='Correo electrónico'required enterKeyHint='done' autoComplete='off' onChange={handleEmailChange}/>
                <button className="btn-newsletter-s" onClick={submit} type='submit'>
                    <i class="fa-solid fa-paper-plane icono-send-newsletter-s"></i>
                </button>
            </div>
            {status === "sending" && <p className='negro mc-texto-s mc-enviando texto-s'>Enviando...</p>}

            {status === "error" && (
                <p className='mc-texto-s negro'>Ha ocurrido un error. Intenta con otro correo electrónico.</p>
            )}

            {status === "success" && (
                <p className='mc-texto-s verde'>¡Gracias por suscribirte! </p>
               
            )}

            
            
        </div>
  );
    }
export default CustomFormFooter;
