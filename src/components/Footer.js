import React from 'react'
import '../styles/Footer.css'
import logo from '../assets/logo_dark.svg'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <section className="footer-main-content">
                <div className="footer-details">
                    <img src="" alt="" className="logo-footer" />
                    
                </div>
            </section>
            <div className="footer-divider"></div>
            <section className="footer-bottom">
                <div className="footer-credits">
                    <p><span className="bold">Rhesident Org.</span> ®. 2021. Todos los derechos reservados. ©</p>
                    <p>Desarrollado y diseñado por<a href=""> Emmanuel Manzo </a></p>
                </div>
                <div className="footer-docs">
                    <p>Política de privacidad</p>
                    <p>Términos y condiciones</p>
                </div>
                
            </section>
        </footer>
    )
}

export default Footer
