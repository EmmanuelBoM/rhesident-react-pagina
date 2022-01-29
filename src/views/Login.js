import React from 'react';
import '../styles/base.css'
import '../styles/Formularios.css'
import '../styles/Login.css'
import logoLogin from '../assets/logo_login.svg'

function Login() {
    return (
        <main className='login-main'>
            <section className="login-cont">
                <img src={logoLogin} alt="" className="logo-login" />
                <div className="card-login">
                    <h4 className="negro">Bienvenido</h4>
                    <h3 className="negro">Inicia sesión</h3>
                    <form action="" className="login-form">
                        <label htmlFor="email" className="input-label">Correo Electrónico</label>
                        <input name="email" type="email" className="input-gral" required placeholder='Escribe correo de administrador'/>
                        <label htmlFor="contrasena" className="input-label">Contraseña</label>
                        <input name="contrasena" type="password" className="input-gral" required placeholder='Escribe tu contraseña'/>
                        <button className='btn-login' type="submit">Iniciar sesión</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Login;
