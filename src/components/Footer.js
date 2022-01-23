import React from 'react'
import '../styles/Footer.css'
import logo from '../assets/logo_dark.svg'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <section className="footer-links">
                <div className="footer-row">
                    <div className="footer-cont">
                        <div className="footer-section">
                            <div className="footer-subelement">
                                <p className="footer-subtitle">¿Quienes somos?</p>
                                <Link to='/nuestras-intenciones'><p className="footer-link">Nuestras intenciones</p></Link>
                                <p className="footer-link">Nuestro origen</p>
                                <p className="footer-link">Nuestro equipo</p>
                                <p className="footer-link">Nuestra huella</p>
                            </div>
                        </div>
                        <div className="footer-section">
                            <div className="footer-subelement">
                                <p className="footer-subtitle">Proyectos</p>
                                <p className="footer-link">Cultura</p>
                                <p className="footer-link">Arte</p>
                                <p className="footer-link">Urbanismo</p>
                                <p className="footer-link">Sustentabilidad</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-cont">
                        <div className="footer-section">
                            <div className="footer-subelement">
                                <p className="footer-subtitle">Podcast</p>
                                <p className="footer-link">Escúchalo en Youtube</p>
                                <p className="footer-link">Escúchalo en Spotify</p>
                            </div>
                        </div>
                        <div className="footer-section">
                            <div className="footer-subelement">
                                <p className="footer-subtitle">Talleres</p>
                                <p className="footer-link">Cultura</p>
                                <p className="footer-link">Arte</p>
                                <p className="footer-link">Urbanismo</p>
                                <p className="footer-link">Sustentabilidad</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="footer-row">
                    <div className="footer-cont">
                        <div className="footer-section">
                            <div className="footer-subelement">
                                <p className="footer-subtitle">Blog</p>
                                <p className="footer-link">Artículos</p>
                                <p className="footer-link">Escribe para Rhesident</p>
                            </div>
                        </div>
                        <div className="footer-section">
                            <div className="footer-subelement">
                                <p className="footer-subtitle">Tienda</p>
                                <p className="footer-link">Todos los productos</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer-cont">
                        <div className="footer-section">
                            <div className="footer-subelement">
                                <p className="footer-subtitle">Voluntariado</p>
                                <p className="footer-link">Presencial</p>
                                <p className="footer-link">Híbrido</p>
                                <p className="footer-link">A distancia</p>
                            </div>
                        </div>

                        <div className="footer-section">
                            <div className="footer-subelement">
                                <p className="footer-subtitle">Apoya la causa</p>
                                <p className="footer-link">Donaciones</p>
                                <p className="footer-link">Cuéntanos tu idea</p>
                                <p className="footer-link">Agenda una entrevista</p>
                            </div>
                        </div>
                    </div>
                </div>
                   
                
                <div className="footer-logo">
                    <img src={logo} alt="" className="logo-footer" />
                </div>
               
            </section>
            <section className="footer-credits">
                <p><span className="bold">Rhesident Org.</span> ®. 2021. Todos los derechos reservados. ©</p>
                <p>Desarrollado y diseñado por<a href=""> Emmanuel Manzo </a></p>
            </section>
        </footer>
    )
}

export default Footer
