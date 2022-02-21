import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavMovil.css";
function NavMovil(props) {
  function hideMenuMovil() {
    props.setNavMovilVisibility(false);
  }

  return (
    <nav className="nav-movil">
      <div className="close-cont">
        <i
          class="fa-solid fa-xmark close-menu-icon"
          onClick={hideMenuMovil}
        ></i>
      </div>
      <ul className="nav-list-movil">
        <li className="nav-element-movil nav-submenu-movil">
          <div className="nav-submenu-cont-movil">
            <p className="submenu-title-movil amarillo">¿Quienes somos?</p>
            <div className="submenu-elements-movil">
              <Link to="/nuestras-intenciones">Nuestras Intenciones</Link>
              <Link to="/nuestro-origen">Nuestro Origen</Link>
              <Link to="/nuestro-equipo">Nuestro Equipo</Link>
              <Link to="/nuestra-huella">Nuestra Huella</Link>
            </div>
          </div>
        </li>
        <li className="nav-element-movil nav-submenu-movil">
          <div className="nav-submenu-cont-movil">
            <Link to="/proyectos" className="submenu-title-movil">
              Proyectos
            </Link>
          </div>
        </li>

        <li className="nav-element-movil nav-submenu-movil">
          <div className="nav-submenu-cont-movil">
            <Link to="/talleres" className="submenu-title-movil">
              Talleres
            </Link>
          </div>
        </li>

        <li className="nav-element-movil nav-submenu-movil">
          <div className="nav-submenu-cont-movil">
            <p className="submenu-title-movil blanco">Apóyanos</p>
            <div className="submenu-elements-movil">
              <Link to="/voluntariado">Voluntariado</Link>
              <Link to="/como-apoyar">Cómo apoyar</Link>
            </div>
          </div>
        </li>

        <li className="nav-element-movil nav-submenu-movil">
          <div className="nav-submenu-cont-movil">
            <Link to="/tienda" className="submenu-title-movil blanco">
              Tienda
            </Link>
          </div>
        </li>

        <li className="nav-element-movil nav-submenu-movil">
          <div className="nav-submenu-cont-movil">
            <p className="submenu-title-movil blanco">Más</p>
            <div className="submenu-elements-movil">
              <Link to="/blog">Blog</Link>
              <Link to="/podcast">Podcast</Link>
              <Link to="/descargas">Descargas</Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavMovil;
