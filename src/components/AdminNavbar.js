import React from 'react';
import '../styles/base.css'
import '../styles/AdminNavbar.css'
import logoMenu from '../assets/logo_menu_admin.svg'
import iconoProyectos from '../assets/corazon_icono.svg'

function AdminNavbar(props) {
    return (
        <aside className="cont-menu-admin">
            <img src={logoMenu} alt="" className="logo-menu-admin" />
            <div className="tabs">
                <div className={props.activeTab==='recursos' ? 'menu-tab tab-active':`menu-tab`}>
                    <i class={props.activeTab==='recursos' ? 'fa-solid fa-photo-film icono-tab tab-active':`fa-solid fa-photo-film icono-tab`}></i>
                    <p className={props.activeTab==='recursos' ? 'nombre-tab tab-active':`nombre-tab`}>Recursos Generales</p>
                </div>
                <div className={props.activeTab==='proyectos' ? 'menu-tab tab-active':`menu-tab`}>
                    <svg className='icono-tab-img' width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={props.activeTab==='proyectos' ? 'icono-tab-active':null}d="M2.99641 0.789141L2.86446 0.863465C0.257783 2.31614 -0.728625 5.34748 0.569451 7.88716C0.834975 8.40743 1.11062 8.9121 1.38626 9.3692C2.81386 11.732 12.5168 34.8559 17.0822 28.5495C21.6475 22.243 28.7839 10.9438 27.9298 9.36697C27.0758 7.79017 24.7905 4.89967 22.2227 4.89967C21.2148 4.89967 19.7237 5.22336 18.2835 5.61691C15.6691 6.33117 12.8629 5.30549 11.4798 3.14078L11.1985 2.7004C9.51715 0.072649 5.82975 -0.786917 2.99641 0.789141Z" fill="#CFCFC9"/>
                    </svg>
                    <p className={props.activeTab==='proyectos' ? 'nombre-tab tab-active':`nombre-tab`}>Proyectos</p>
                </div>
                <div className={props.activeTab==='notas' ? 'menu-tab tab-active':`menu-tab`}>
                    <i class={props.activeTab==='notas' ? 'fa-solid fa-newspaper icono-tab tab-active':`fa-solid fa-newspaper icono-tab`}></i>
                    <p className={props.activeTab==='notas' ? 'nombre-tab tab-active':`nombre-tab`}>Notas de medios</p>
                </div>
                <div className={props.activeTab==='beneficiarios' ? 'menu-tab tab-active':`menu-tab`}>
                    <i class={props.activeTab==='beneficiarios' ? 'fa-solid fa-hand-holding-medical icono-tab tab-active':`fa-solid fa-hand-holding-medical icono-tab`}></i>
                    <p className={props.activeTab==='beneficiarios' ? 'nombre-tab tab-active':`nombre-tab`}>Beneficiarios</p>
                </div>
                <div className={props.activeTab==='testimonios' ? 'menu-tab tab-active':`menu-tab`}>
                    <i class={props.activeTab==='testimonios' ? 'fa-solid fa-comment-dots icono-tab tab-active':`fa-solid fa-comment-dots icono-tab`}></i>
                    <p className={props.activeTab==='testimonios' ? 'nombre-tab tab-active':`nombre-tab`}>Testimonios</p>
                </div>
                <div className={props.activeTab==='colaboradores' ? 'menu-tab tab-active':`menu-tab`}>
                    <i class={props.activeTab==='colaboradores' ? 'fa-solid fa-handshake-angle icono-tab tab-active':`fa-solid fa-handshake-angle icono-tab`}></i>
                    <p className={props.activeTab==='colaboradores' ? 'nombre-tab tab-active':`nombre-tab`}>Colaboradores</p>
                </div>
                <div className={props.activeTab==='equipo' ? 'menu-tab tab-active':`menu-tab`}>
                    <i class={props.activeTab==='equipo' ? 'fa-solid fa-users icono-tab tab-active':`fa-solid fa-users icono-tab`}></i>
                    <p className={props.activeTab==='equipo' ? 'nombre-tab tab-active':`nombre-tab`}>Equipo</p>
                </div>
                <div className={props.activeTab==='talleres' ? 'menu-tab tab-active':`menu-tab`}>
                    <i class={props.activeTab==='talleres' ? 'fa-solid fa-briefcase icono-tab tab-active':`fa-solid fa-briefcase icono-tab`}></i>
                    <p className={props.activeTab==='talleres' ? 'nombre-tab tab-active':`nombre-tab`}>Talleres</p>
                </div>
                
            </div>

            <div className="logout-cont">
                <i class="fa-solid fa-right-from-bracket"></i>
                <p className="cerrar-sesion-text">Cerrar sesión</p>
            </div>
           
        </aside>
    );
}

export default AdminNavbar;
