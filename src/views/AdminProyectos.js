import React, {useState} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/base.css'
import '../styles/AdminLayout.css'
import { DataGrid, esES, GridActionsCellItem } from '@mui/x-data-grid';
import iconoAgregarProyecto from '../assets/icono_agregarProyecto.svg'

function AdminProyectos() {
    const rows = [
        { id: 1, col1: 'Regeneración comunitaria de espacios', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 4, col1: 'Hello', col2: 'World' },
        { id: 5, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 6, col1: 'MUI', col2: 'is Amazing' }
      ];
      
      const columns = [
        { field: 'col1', headerName: 'Nombre',flex:1, minWidth: 80 },
        { field: 'col2', headerName: 'Estatus', flex:1, minWidth: 20},
        { field: 'col3', headerName: 'Ejes de acción', flex:1, minWidth: 100},
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Acciones',
            flex:1, 
            minWidth: 100,
            getActions: (params) => [
                // params.isActive ? eye-active : eye-disable
                <GridActionsCellItem icon={ <i class="fa-solid fa-eye icono-accion-tabla icono-tabla-habilitar"></i> }  label="Habilitar/Ocultar" />,
                <GridActionsCellItem icon={ <i class="fa-solid fa-up-right-from-square icono-accion-tabla icono-tabla-ir"></i> }  label="Ir a" />,
                <GridActionsCellItem icon={ <i class="fa-solid fa-pen-to-square icono-accion-tabla icono-tabla-editar"></i> }  label="Editar" />,
                <GridActionsCellItem icon={ <i class="fa-solid fa-trash icono-accion-tabla icono-tabla-eliminar"></i> }  label="Eliminar" />
            ]
          }
        
      ];

      const datagridStyles ={
          fontSize:'1.4rem',
          fontFamily: 'Lato',
          border: 'none',
          color: '#6C6C60',
          fontWeight: 500,
          '& .MuiDataGrid-row:hover': {
            color: '#164453',
            fontWeight: 600,
            backgroundColor:'#F5F4F7'
          },
      }
    return (
        <body className="body-admin">
            <AdminNavbar activeTab='proyectos'></AdminNavbar>
            <main className='main-admin'>
                    <header className="header-panel">
                        <div className="cont-bienvenida">
                            <svg className='icono-pagina icono-proyectos'   viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M2.99641 0.789141L2.86446 0.863465C0.257783 2.31614 -0.728625 5.34748 0.569451 7.88716C0.834975 8.40743 1.11062 8.9121 1.38626 9.3692C2.81386 11.732 12.5168 34.8559 17.0822 28.5495C21.6475 22.243 28.7839 10.9438 27.9298 9.36697C27.0758 7.79017 24.7905 4.89967 22.2227 4.89967C21.2148 4.89967 19.7237 5.22336 18.2835 5.61691C15.6691 6.33117 12.8629 5.30549 11.4798 3.14078L11.1985 2.7004C9.51715 0.072649 5.82975 -0.786917 2.99641 0.789141Z"/>
                            </svg>
                            <div className="texto-bienvenida">
                                <p className="verde">Bienvenido Administrador</p>
                                <h3 className="negro">Proyectos</h3>
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
                        <div className="layout1-panel-top">
                            <div className="card-contenido-panel card-estadisticas">
                                <div className="header-card-contenido">
                                    <div className="horizontal-indicator"></div>
                                    <h4 className="verde">Estadísticas</h4>
                                </div>
                            </div>

                            <div className="btn-agregar-panel">
                                <div className="header-card-contenido">
                                    <div className="vertical-indicator-light"></div>
                                    <h4 className="blanco">Agregar proyecto</h4>
                                </div>
                                <img src={iconoAgregarProyecto} alt="" className='icono-agregar'/>
                            </div>
                        </div>

                        <div className="card-contenido-panel card-cont-tabla">
                            <div className="header-card-contenido">
                                <div className="vertical-indicator"></div>
                                <h4 className="verde">Todos los proyectos</h4>
                            </div>
                            <DataGrid autoHeight rows={rows} columns={columns} sx={datagridStyles} localeText={esES.components.MuiDataGrid.defaultProps.localeText}/>
                        </div>
                    </section>
            </main>
        </body>
        
    );
}

export default AdminProyectos;
