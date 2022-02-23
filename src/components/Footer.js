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
            <div className="contacto-footer">
              <p className="footer-subtitle">Contacto</p>
              <p p className="verde">
                info@rhesident.org
              </p>
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
            </div>

            <div className="footer-mailchimp">
              <p className="footer-subtitle">Suscríbete al newsletter</p>
              <CustomMailchimpForm variacion="footer"></CustomMailchimpForm>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-cont">
              <p className="footer-subtitle">¿Quienes somos?</p>
              <Link to="/nuestras-intenciones">
                <p className="footer-link">Nuestras intenciones</p>
              </Link>
              <Link to="/nuestro-origen">
                <p className="footer-link">Nuestro origen</p>
              </Link>
              <Link to="/nuestro-equipo">
                <p className="footer-link">Nuestro equipo</p>
              </Link>
              <Link to="/nuestra-huella">
                <p className="footer-link">Nuestra huella</p>
              </Link>
            </div>

            <div className="footer-cont">
              <p className="footer-subtitle">Proyectos</p>
              <a onClick={() => window.location.replace("/proyectos#cultura")}>
                <p className="footer-link">Cultura</p>
              </a>
              <a onClick={() => window.location.replace("/proyectos#arte")}>
                <p className="footer-link">Arte</p>
              </a>
              <a
                onClick={() => window.location.replace("/proyectos#urbanismo")}
              >
                <p className="footer-link">Urbanismo</p>
              </a>
              <a
                onClick={() =>
                  window.location.replace("/proyectos#sustentabilidad")
                }
              >
                <p className="footer-link">Sustentabilidad</p>
              </a>
            </div>
            <div className="footer-cont">
              <p className="footer-subtitle">Podcast</p>
              <Link to="/podcast/youtube">
                <p className="footer-link">Escúchalo en Youtube</p>
              </Link>
              <Link to="/podcast/spotify">
                <p className="footer-link">Escúchalo en Spotify</p>
              </Link>
            </div>
            <div className="footer-cont">
              <p className="footer-subtitle">Talleres</p>
              <a onClick={() => window.location.replace("/talleres#abiertos")}>
                <p className="footer-link">Abiertos</p>
              </a>
              <a onClick={() => window.location.replace("/talleres#proximos")}>
                <p className="footer-link">Próximos</p>
              </a>
            </div>
            <div className="footer-cont">
              <p className="footer-subtitle">Blog</p>
              <Link to="/blog">
                <p className="footer-link">Próximamente</p>
              </Link>
            </div>
            <div className="footer-cont">
              <p className="footer-subtitle">Tienda</p>
              <Link to="/nuestras-intenciones">
                <p className="footer-link">Próximamente</p>
              </Link>
            </div>
            <div className="footer-cont">
              <p className="footer-subtitle">Voluntariado</p>
              <Link to="/voluntariado/Presencial">
                <p className="footer-link">Presencial</p>
              </Link>
              <Link to="/voluntariado/Híbrido">
                <p className="footer-link">Híbrido</p>
              </Link>
              <Link to="/voluntariado/Remoto">
                <p className="footer-link">A distancia</p>
              </Link>
            </div>
            <div className="footer-cont">
              <p className="footer-subtitle">Apoya la causa</p>
              <Link to="/dona-ahora">
                <p className="footer-link">Donaciones</p>
              </Link>
              <Link to="/cuentanos-tu-idea">
                <p className="footer-link">Cuéntanos tu idea</p>
              </Link>
              <a href="/">
                <p className="footer-link">Agenda una entrevista</p>
              </a>
            </div>
          </div>
        </section>
        <div className="footer-divider"></div>
        <section className="footer-bottom">
          <div className="footer-credits">
            <p>
              <span className="bold">Rhesident Org.</span> ®. 2022. Todos los
              derechos reservados. ©
            </p>
            <p>
              Desarrollado y diseñado por
              <a href="http://ebmanzo.me/" className="verde" target="_blank">
                {" "}
                Emmanuel Manzo{" "}
              </a>
            </p>
          </div>
          <div className="footer-docs">
            <Link to="/aviso-de-privacidad">
              <p className="footer-link verde">Aviso de privacidad</p>{" "}
            </Link>
          </div>
        </section>
      </footer>
    );
}

export default Footer
