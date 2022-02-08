import React from 'react'
import '../styles/Footer.css'
import logo from '../assets/logo_dark.svg'
import { Link } from 'react-router-dom';
import CustomMailchimpForm from './CustomMailchimpForm';

function Footer() {
    return (
        <footer>
            <section className="footer-main-content">
                <div className="footer-details">
                    <img src={logo} alt="" className="logo-footer" />
                    <p className="footer-subtitle">Contacto</p>
                    <p className="verde">info@rhesident.org</p>
                    <div className="redes-footer">
                        <a href="https://www.facebook.com/rhesident.org">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/rhesident_org/">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com/rhesident_org">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://twitter.com/rhesident_org">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/rhesident-org/">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <p className="footer-subtitle">Suscríbete al newsletter</p>
                    <CustomMailchimpForm variacion='footer'></CustomMailchimpForm>
                </div>
                <div className="footer-links">
                    <div className="footer-cont">
                        <p className="footer-subtitle">¿Quienes somos?</p>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Nuestras intenciones</p></Link>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Nuestro origen</p></Link>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Nuestro equipo</p></Link>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Nuestra huella</p></Link>
                    </div>
                    <div className="footer-cont">
                        <p className="footer-subtitle">Proyectos</p>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Cultura</p></Link>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Arte</p></Link>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Urbanismo</p></Link>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Sustentabilidad</p></Link>
                    </div>
                    <div className="footer-cont">
                        <p className="footer-subtitle">Podcast</p>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Escúchalo en Youtube</p></Link>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Escúchalo en Spotify</p></Link>
                    </div>
                    <div className="footer-cont">
                        <p className="footer-subtitle">Talleres</p>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Activos</p></Link>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Próximos</p></Link>
                    </div>
                    <div className="footer-cont">
                        <p className="footer-subtitle">Blog</p>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Artículos</p></Link>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Escribe para Rhesident</p></Link>
                    </div>
                    <div className="footer-cont">
                        <p className="footer-subtitle">Tienda</p>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Próximamente</p></Link>
                    </div>
                    <div className="footer-cont">
                        <p className="footer-subtitle">Voluntariado</p>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Presencial</p></Link>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Híbrido</p></Link>
                        <Link to='/nuestras-intenciones'><p className="footer-link">A distancia</p></Link>
                    </div>
                    <div className="footer-cont">
                        <p className="footer-subtitle">Apoya la causa</p>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Donaciones</p></Link>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Cuéntanos tu idea</p></Link>
                        <Link to='/nuestras-intenciones'><p className="footer-link">Agenda una entrevista</p></Link>
                    </div>
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
