import React, {useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import iconoAgregarProyecto from '../assets/icono_agregarProyecto.svg'
import ModalAdminEliminar from '../components/ModalAdminEliminar';

//Estilos
import '../styles/base.css'
import '../styles/AdminLayout.css'

//npm components
import { DataGrid, esES, GridActionsCellItem } from '@mui/x-data-grid';
import {Link, useNavigate} from 'react-router-dom'

//Firebase Imports
import {db} from '../firebaseConfig'
import {query, collection, getDocs,orderBy, doc, updateDoc,  deleteDoc} from "@firebase/firestore";

function AdminProyectos() {

    //Firestore GET Query
    const [proyectos, setProyectos] = useState([])
    const proyectosCollectionRef = collection(db, "proyectos")
  
    const q = query(proyectosCollectionRef, orderBy("nombre"))

    let navigate = useNavigate();
    useEffect (()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/admin_proyectos')
        }

        if (!authToken) {
            navigate('/login')
        }

        const getProyectos = async () => {
            const data = await getDocs(q);
            setProyectos(data.docs.map(((doc)=>({...doc.data(), id:doc.id}))))
        }
  
      getProyectos();
    }, [])

    

    const [modalVisibility, setModalVisibility] = useState(false)
    const [idProyecto, setIdProyecto] = useState('')
    const [modalInfo, setModalInfo] = useState('')

    const deleteProyecto = async () => {
        try{
            await deleteDoc(doc(db, "proyectos", idProyecto));
        }
        catch(error){
            console.log(error)
        }
        setModalVisibility(false);
        window.location.reload();
        
    }

    const showModal = React.useCallback(
        (id, info)=>()=>{
            setModalInfo(info);
            setIdProyecto(id);
            setModalVisibility(true);
        },
        [],
    );

    

    const toggleProyectoVisibility = React.useCallback(
            (id, isVisible) =>async()=>{
            let visibility;
            if(isVisible) { visibility = { visible: false } }
            else{ visibility = { visible: true } }
        
            const proyectoRef = doc(db, "proyectos", id)
            await updateDoc(proyectoRef, visibility);
            window.location.reload();
        },
        [],
    );

      const columns = React.useMemo(()=>
      [
        { field: 'nombre', headerName: 'Nombre',flex:1, minWidth: 80 },
        { field: 'estatus', headerName: 'Estatus', flex:1, minWidth: 20},
        { field: 'ejesAccion', headerName: 'Ejes de acción', flex:1, minWidth: 100},
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Acciones',
            flex:1, 
            minWidth: 100,
            getActions: (params) => [
            
                <GridActionsCellItem icon={ <i class={params.getValue(params.id, 'visible') ? 'fa-solid fa-eye icono-accion-tabla icono-tabla-habilitar' : 'fa-solid fa-eye-slash icono-accion-tabla icono-tabla-deshabilitar'}></i> }  label="Habilitar/Ocultar" onClick={toggleProyectoVisibility(params.id, params.getValue(params.id, 'visible'))}/>,
                <Link className='link-decoration' to={`/proyecto/${params.id}`}><GridActionsCellItem icon={ <i class="fa-solid fa-up-right-from-square icono-accion-tabla icono-tabla-ir"></i> }  label="Ir a" /></Link>,
                <Link className='link-decoration' to={`/editar-proyecto/${params.id}`}><GridActionsCellItem icon={ <i class="fa-solid fa-pen-to-square icono-accion-tabla icono-tabla-editar"></i> }  label="Editar" /></Link> ,
                <GridActionsCellItem icon={ <i class="fa-solid fa-trash icono-accion-tabla icono-tabla-eliminar"></i> }  label="Eliminar" onClick={showModal(params.id, params.getValue(params.id, 'nombre'))}/>
            ],
          },
      ],
      [showModal],[toggleProyectoVisibility],
    );

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
        <div className="body-admin">
            <AdminNavbar activeTab='proyectos'></AdminNavbar>
            {modalVisibility ? <ModalAdminEliminar setModalVisibility={setModalVisibility} recurso='el proyecto' nombreRecurso={modalInfo} runFunction={deleteProyecto}></ModalAdminEliminar> : null}
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
                            <Link to='/' className="acceso-directo">
                                <i class="fa-solid fa-house negro"></i>
                                <p className="nombre-acceso-directo negro">Página principal</p>
                            </Link>
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

                            <Link  to='/agregar-proyecto' className="btn-agregar-panel">
                                <div className="header-card-contenido">
                                    <div className="vertical-indicator-light"></div>
                                    <h4 className="blanco">Agregar proyecto</h4>
                                </div>
                                <img src={iconoAgregarProyecto} alt="" className='icono-agregar'/>
                            </Link>
                            
                        </div>

                        <div className="card-contenido-panel card-cont-tabla">
                            <div className="header-card-contenido">
                                <div className="vertical-indicator"></div>
                                <h4 className="verde">Todos los proyectos</h4>
                            </div>
                            <DataGrid autoHeight rows={proyectos} columns={columns} sx={datagridStyles} localeText={esES.components.MuiDataGrid.defaultProps.localeText}/>
                        </div>
                    </section>
            </main>
        </div>
        
    );
}

export default AdminProyectos;
