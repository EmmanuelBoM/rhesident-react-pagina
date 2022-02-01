import React, {useState} from 'react'
import '../styles/base.css'
import '../styles/NavHeader.css'
import logo from '../assets/logo.svg'
import logoDark from '../assets/logo_dark.svg'
import { Link, useLocation } from 'react-router-dom';



function NavHeader(props) {
    const [hoverState, setHoverState] = useState(true)
    const location = useLocation();

    function hoverOut(){
        setHoverState(false);
    }

    return (
        <header className='header-principal'>
            <div className="cont-logo">
                <Link to='/'><img src={props.textColor =='blanco' ? logo: logoDark} alt="" className="logo-header" /></Link>
            </div>
            <nav className="nav-principal">
                <ul className='nav-list'>
                    <li className='nav-element nav-submenu'>
                        <div className="nav-submenu-cont">
                            <div className="submenu-elements">
                                <Link to='/nuestras-intenciones'>
                                    Nuestras Intenciones
                                </Link>
                                <Link to='/nuestro-origen'>
                                    Nuestro Origen
                                </Link>
                                <Link to='/nuestro-equipo'>
                                    Nuestro Equipo
                                </Link>
                                <Link to='/nuestra-huella'>
                                    Nuestra Huella
                                </Link>
                            </div>
                        </div>
                        <a className={props.textColor == 'blanco' ? `submenu-title blanco`: `submenu-title negro`}>
                            ¿Quienes somos?
                        </a>
                        <div className={props.textColor == 'blanco' ? `nav-indicator light ${(location.pathname === '/nuestro-equipo' || location.pathname ==='/nuestras-intenciones' || location.pathname ==='/nuestra-huella' || location.pathname === '/nuestro-origen') ? 'active-light':null }`: `nav-indicator dark`}></div>
                        <svg className={props.textColor == 'blanco' ? `arrow-sub light`: `arrow-sub dark`} width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7085 1.83122C20.7093 2.04908 20.6612 2.26435 20.5678 2.46119C20.4744 2.65804 20.3381 2.83146 20.169 2.96872L11.419 10.0125C11.158 10.227 10.8307 10.3442 10.4929 10.3442C10.1551 10.3442 9.82781 10.227 9.56687 10.0125L0.816865 2.7208C0.519049 2.47327 0.331763 2.11756 0.29621 1.73194C0.260656 1.34632 0.379746 0.962367 0.627282 0.664552C0.874817 0.366735 1.23052 0.17945 1.61614 0.143896C2.00176 0.108343 2.38572 0.227432 2.68353 0.474968L10.5002 6.99372L18.3169 0.693718C18.5309 0.515389 18.7916 0.402109 19.068 0.367285C19.3444 0.332461 19.6251 0.377547 19.8767 0.497213C20.1283 0.616878 20.3403 0.80611 20.4878 1.04252C20.6352 1.27893 20.7118 1.55263 20.7085 1.83122Z" />
                        </svg>
                    </li>
                   
                    <li className='nav-element'>
                        <Link to='/proyectos' className={props.textColor == 'blanco' ? `submenu-title blanco`: `submenu-title negro`}>Proyectos</Link>
                        <div className={props.textColor == 'blanco' ? `nav-indicator light ${location.pathname==='/proyectos'?'active-light':null }`: `nav-indicator dark`}></div>
                    </li>
                    
                    <li className='nav-element'>
                        <Link to='/talleres' className={props.textColor == 'blanco' ? `submenu-title blanco`: `submenu-title negro`}>Talleres</Link>
                        <div className={props.textColor === 'blanco' ? `nav-indicator light ${location.pathname==='/talleres'?'active-light':null}`:`nav-indicator dark`} ></div>
                    </li>

                    <li className='nav-element nav-submenu'>
                        <div className="nav-submenu-cont">
                            <div className="submenu-elements">
                                <Link to='/voluntariado'>
                                    Voluntariado
                                </Link>
                                <Link to='/como-apoyar'>
                                    Cómo apoyar
                                </Link>
                            </div>
                        </div>
                        <a className='submenu-title' className={props.textColor == 'blanco' ? `submenu-title blanco`: `submenu-title negro`}>
                            Apóyanos
                        </a>
                        <div className={props.textColor == 'blanco' ? `nav-indicator light ${(location.pathname === '/voluntariado' || location.pathname === '/donaciones') ? 'active-light' : null}`: `nav-indicator dark`}></div>
                        <svg className={props.textColor == 'blanco' ? `arrow-sub light`: `arrow-sub dark`} width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7085 1.83122C20.7093 2.04908 20.6612 2.26435 20.5678 2.46119C20.4744 2.65804 20.3381 2.83146 20.169 2.96872L11.419 10.0125C11.158 10.227 10.8307 10.3442 10.4929 10.3442C10.1551 10.3442 9.82781 10.227 9.56687 10.0125L0.816865 2.7208C0.519049 2.47327 0.331763 2.11756 0.29621 1.73194C0.260656 1.34632 0.379746 0.962367 0.627282 0.664552C0.874817 0.366735 1.23052 0.17945 1.61614 0.143896C2.00176 0.108343 2.38572 0.227432 2.68353 0.474968L10.5002 6.99372L18.3169 0.693718C18.5309 0.515389 18.7916 0.402109 19.068 0.367285C19.3444 0.332461 19.6251 0.377547 19.8767 0.497213C20.1283 0.616878 20.3403 0.80611 20.4878 1.04252C20.6352 1.27893 20.7118 1.55263 20.7085 1.83122Z" />
                        </svg>
                    </li>

                    <li className='nav-element'>
                        <Link to='/tienda' className={props.textColor == 'blanco' ? `submenu-title blanco`: `submenu-title negro`}>Tienda</Link>
                        <div className={props.textColor == 'blanco' ? `nav-indicator light`: `nav-indicator dark ${location.pathname === '/tienda' ? 'active-dark':null}`}></div>
                    </li>
                    
                    <li className='nav-element nav-submenu'>
                        <div className="nav-submenu-cont">
                            <div className="submenu-elements">
                                <Link to='/blog'>
                                    Blog
                                </Link>
                                <Link to='/podcast'>
                                    Podcast
                                </Link>
                            </div>
                        </div>
                        <a className='submenu-title' className={props.textColor == 'blanco' ? `submenu-title blanco`: `submenu-title negro`}>
                            Más                      
                        </a>
                        <div className={props.textColor == 'blanco' ? `nav-indicator light`: `nav-indicator dark ${(location.pathname === '/blog' || location.pathname === '/podcast') ? 'active-dark':null}`}></div>
                        <svg className={props.textColor == 'blanco' ? `arrow-sub light`: `arrow-sub dark`} width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7085 1.83122C20.7093 2.04908 20.6612 2.26435 20.5678 2.46119C20.4744 2.65804 20.3381 2.83146 20.169 2.96872L11.419 10.0125C11.158 10.227 10.8307 10.3442 10.4929 10.3442C10.1551 10.3442 9.82781 10.227 9.56687 10.0125L0.816865 2.7208C0.519049 2.47327 0.331763 2.11756 0.29621 1.73194C0.260656 1.34632 0.379746 0.962367 0.627282 0.664552C0.874817 0.366735 1.23052 0.17945 1.61614 0.143896C2.00176 0.108343 2.38572 0.227432 2.68353 0.474968L10.5002 6.99372L18.3169 0.693718C18.5309 0.515389 18.7916 0.402109 19.068 0.367285C19.3444 0.332461 19.6251 0.377547 19.8767 0.497213C20.1283 0.616878 20.3403 0.80611 20.4878 1.04252C20.6352 1.27893 20.7118 1.55263 20.7085 1.83122Z"/>
                        </svg>
                    </li>
                </ul>
            </nav>
            <div className="header-filler">
            <img src={logo} alt="" className="logo-filler" />
            </div>
        </header>
    )
}

export default NavHeader
