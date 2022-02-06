import React, {useState} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/AdminLayout.css'
import popUp from '../assets/cultura.png'



function AdminRecursos() {
    const [popupPreview, setPopupPreview] = useState('')
    return (
        <body className='body-admin'>
            <AdminNavbar activeTab='recursos'></AdminNavbar>
            <main className='main-admin'>
                <section className="panel-content">
                    <header className="header-panel">
                        <div className="cont-bienvenida">
                            <i class="fa-solid fa-photo-film icono-pagina"></i>
                            <div className="texto-bienvenida">
                                <p className="verde">Bienvenido Administrador</p>
                                <h3 className="negro">Recursos generales</h3>
                            </div>
                        </div>
                        <div className="cont-accesos-directos">
                            <div className="acceso-directo">
                                <i class="fa-solid fa-house negro"></i>
                                <p className="nombre-acceso-directo negro">Página principal</p>
                            </div>
                        </div>
                    </header>
                    <section className="panel-bottom">
                        <div className="card-contenido-panel card-recurso">
                            <div className="header-card-contenido mb4">
                                <div className="vertical-indicator"></div>
                                <h4 className="verde">Pop Up Landing page</h4>
                            </div>
                            <div className="file-preview">
                                <input type="file" name="" id="" className="input-archivo" />
                                <img src={popupPreview} alt="" className="preview-img" />
                            </div>
                            
                        </div>
                    </section>
                </section>
            </main>
            
            
        </body>
    );
}

export default AdminRecursos;
