import React, { useState } from 'react';
import '../styles/base.css'
import '../styles/Formularios.css'
import '../styles/Login.css'
import logoLogin from '../assets/logo_login.svg'
import LoginForm from '../components/LoginForm';
import ForgotPassword from '../components/ForgotPassword';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [forgotVisibility, setForgotVisibility] = useState(false)
    const [loginVisibility, setLoginVisibility] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')
    const [errorVisibility, setErrorVisibility] = useState(false)
    const [successVisibility, setSuccessVisibility] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')
    const auth = getAuth();
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    function forgotPassword(e){
        e.preventDefault()
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setSuccessMsg('Correo enviado. Sigue las instrucciones para restablecer tu contraseña')
            setSuccessVisibility(true)
            setErrorVisibility(false)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode =='auth/user-not-found'){
                setErrorMsg("Correo electrónico no registrado.")
            }
            else{
                setErrorMsg(errorMessage)
            }
            setSuccessVisibility(false)
            setErrorVisibility(true)
        });
    }

    function signIn(){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate('/admin_proyectos')
            setErrorVisibility(false);
            sessionStorage.setItem('Auth Token', userCredential._tokenResponse.refreshToken)
        })
        .catch((error) => {
            const errorMessage = error.message;
            const errorCode= error.code;

            if(errorCode == 'auth/wrong-password' ){
                setErrorMsg('El correo electrónico o la contraseña no son correctos.');
            }
            else if(errorCode == 'auth/too-many-requests'){
                setErrorMsg('Acceso a la cuenta deshabilitado temporalmente. Intenta de nuevo más tarde.');
            }
            else if(errorCode == 'auth/user-not-found'){
                setErrorMsg('El correo electrónico o la contraseña no son correctos.');
            }
            else{
                setErrorMsg(`Hubo un error. ${errorCode}`);
            }
        
            setErrorVisibility(true);
        });
    
    }
    
    function toggleForgot(){
        if(loginVisibility){
            setErrorVisibility(false)
            setSuccessVisibility(false)
            setForgotVisibility(true)
            setLoginVisibility(false)
        }
        else{
            setErrorVisibility(false)
            setSuccessVisibility(false)
            setForgotVisibility(false)
            setLoginVisibility(true)
        }
        
    }

    return (
        <main className='login-main'>
            <section className="login-cont">
                <img src={logoLogin} alt="" className="logo-login" />
                {loginVisibility ? <LoginForm errorMsg={errorMsg} errorVisibility={errorVisibility} action = {toggleForgot} signIn={signIn} setEmail={setEmail} setPassword={setPassword}></LoginForm>:null}
                {forgotVisibility ? <ForgotPassword setEmail={setEmail} successMsg={successMsg} errorMsg={errorMsg} successVisibility={successVisibility} action = {toggleForgot} forgotPassword={forgotPassword}  errorVisibility={errorVisibility}></ForgotPassword>:null}
            </section>
        </main>
    );
}

export default Login;
