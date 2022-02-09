import React, {useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import iconoAgregarNota from '../assets/icono_agregarNota.svg'
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

function AdminNotas() {

    //Firestore GET Query
    const [notas, setNotas] = useState([])
    const notasCollectionRef = collection(db, "notasMedio")
  
    const q = query(notasCollectionRef, orderBy("titulo"))
    let navigate = useNavigate();
    useEffect (()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/admin_notas')
        }

        if (!authToken) {
            navigate('/login')
        }

        const getNotas = async () => {
            const data = await getDocs(q);
            setNotas(data.docs.map(((doc)=>({...doc.data(), id:doc.id}))))
        }
  
      getNotas();
    }, [])

    

    const [modalVisibility, setModalVisibility] = useState(false)
    const [idNota, setIdNota] = useState('')
    const [modalInfo, setModalInfo] = useState('')

    const deleteNota = async () => {
        try{
            await deleteDoc(doc(db, "notasMedio", idNota));
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
            setIdNota(id);
            setModalVisibility(true);
        },
        [],
    );

    

    const toggleNotaVisibility = React.useCallback(
            (id, isVisible) =>async()=>{
            let visibility;
            if(isVisible) { visibility = { visible: false } }
            else{ visibility = { visible: true } }
        
            const proyectoRef = doc(db, "notasMedio", id)
            await updateDoc(proyectoRef, visibility);
            window.location.reload();
        },
        [],
    );

      const columns = React.useMemo(()=>
      [
        { field: 'titulo', headerName: 'Título de la nota',flex:1, minWidth: 120 },
        { field: 'fuente', headerName: 'Fuente', flex:1, minWidth: 20},
        { field: 'fecha', headerName: 'Fecha', flex:1, minWidth: 100},
        { field: 'notaURL', headerName: 'URL', flex:1, minWidth: 100},
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Acciones',
            flex:1, 
            minWidth: 100,
            getActions: (params) => [
            
                <GridActionsCellItem icon={ <i class={params.getValue(params.id, 'visible') ? 'fa-solid fa-eye icono-accion-tabla icono-tabla-habilitar' : 'fa-solid fa-eye-slash icono-accion-tabla icono-tabla-deshabilitar'}></i> }  label="Habilitar/Ocultar" onClick={toggleNotaVisibility(params.id, params.getValue(params.id, 'visible'))}/>,
                <Link className='link-decoration' to={`/nuestra-huella`}><GridActionsCellItem icon={ <i class="fa-solid fa-up-right-from-square icono-accion-tabla icono-tabla-ir"></i> }  label="Ir a" /></Link>,
                <Link className='link-decoration' to={`/editar-nota/${params.id}`}><GridActionsCellItem icon={ <i class="fa-solid fa-pen-to-square icono-accion-tabla icono-tabla-editar"></i> }  label="Editar" /></Link> ,
                <GridActionsCellItem icon={ <i class="fa-solid fa-trash icono-accion-tabla icono-tabla-eliminar"></i> }  label="Eliminar" onClick={showModal(params.id, params.getValue(params.id, 'titulo'))}/>
            ],
          },
      ],
      [showModal],[toggleNotaVisibility],
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
            <AdminNavbar activeTab='notas'></AdminNavbar>
            {modalVisibility ? <ModalAdminEliminar setModalVisibility={setModalVisibility} recurso='la nota' nombreRecurso={modalInfo} runFunction={deleteNota}></ModalAdminEliminar> : null}
            <main className='main-admin'>
                    <header className="header-panel">
                        <div className="cont-bienvenida">
                        <i class= 'fa-solid fa-newspaper icono-tab icono-pagina'></i>
                            <div className="texto-bienvenida">
                                <p className="verde">Bienvenido Administrador</p>
                                <h3 className="negro">Notas de medios</h3>
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

                            <Link  to='/agregar-nota' className="btn-agregar-panel">
                                <div className="header-card-contenido">
                                    <div className="vertical-indicator-light"></div>
                                    <h4 className="blanco">Agregar nota</h4>
                                </div>
                                <img src={iconoAgregarNota} alt="" className='icono-agregar'/>
                            </Link>
                            
                        </div>

                        <div className="card-contenido-panel card-cont-tabla">
                            <div className="header-card-contenido">
                                <div className="vertical-indicator"></div>
                                <h4 className="verde">Todas las notas</h4>
                            </div>
                            <DataGrid autoHeight rows={notas} columns={columns} sx={datagridStyles} localeText={esES.components.MuiDataGrid.defaultProps.localeText}/>
                        </div>
                    </section>
            </main>
        </div>
        
    );
}

export default AdminNotas;
