import React, {useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import ModalAdminEliminar from '../components/ModalAdminEliminar';
import iconoAgregarTaller from '../assets/icono_agregarTaller.svg'
//Estilos
import '../styles/base.css'
import '../styles/AdminLayout.css'

//npm components
import { DataGrid, esES, GridActionsCellItem } from '@mui/x-data-grid';
import {Link, useNavigate} from 'react-router-dom'

//Firebase Imports
import {db} from '../firebaseConfig'
import {query, collection, getDocs,orderBy, doc, updateDoc,  deleteDoc} from "@firebase/firestore";
import { Helmet } from 'react-helmet';

function AdminTalleres() {

    //Firestore GET Query
    const [talleres, setTalleres] = useState([])
    const talleresCollectionRef = collection(db, "talleres")
  
    const q = query(talleresCollectionRef, orderBy("nombre"))

    let navigate = useNavigate();
    useEffect (()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/admin_talleres')
        }

        if (!authToken) {
            navigate('/login')
        }

      const getTalleres = async () => {
        const data = await getDocs(q);
        setTalleres(data.docs.map(((doc)=>({...doc.data(), id:doc.id}))))
      }
  
      getTalleres();
    }, [])

    

    const [modalVisibility, setModalVisibility] = useState(false)
    const [idTaller, setIdTaller] = useState('')
    const [modalInfo, setModalInfo] = useState('')

    const deleteTaller = async () => {
        try{
            await deleteDoc(doc(db, "talleres", idTaller));
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
            setIdTaller(id);
            setModalVisibility(true);
        },
        [],
    );

    

    const toggleTallerVisibility = React.useCallback(
            (id, isVisible) =>async()=>{
            let visibility;
            if(isVisible) { visibility = { visible: false } }
            else{ visibility = { visible: true } }
        
            const tallerRef = doc(db, "talleres", id)
            await updateDoc(tallerRef, visibility);
            window.location.reload();
        },
        [],
    );

      const columns = React.useMemo(()=>
      [
        { field: 'nombre', headerName: 'Nombre',flex:1, minWidth: 80 },
        { field: 'estatus', headerName: 'Estatus', flex:1, minWidth: 40},
        { field: 'duracion', headerName: 'Duración (Hrs.)', flex:1, minWidth: 20},
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Acciones',
            flex:1, 
            minWidth: 100,
            getActions: (params) => [
            
                <GridActionsCellItem icon={ <i class={params.getValue(params.id, 'visible') ? 'fa-solid fa-eye icono-accion-tabla icono-tabla-habilitar' : 'fa-solid fa-eye-slash icono-accion-tabla icono-tabla-deshabilitar'}></i> }  label="Habilitar/Ocultar" onClick={toggleTallerVisibility(params.id, params.getValue(params.id, 'visible'))}/>,
                <Link className='link-decoration' to={`/talleres`} target="_blank"><GridActionsCellItem icon={ <i class="fa-solid fa-up-right-from-square icono-accion-tabla icono-tabla-ir"></i> }  label="Ir a" /></Link>,
                <Link className='link-decoration' to={`/editar-taller/${params.id}`}><GridActionsCellItem icon={ <i class="fa-solid fa-pen-to-square icono-accion-tabla icono-tabla-editar"></i> }  label="Editar" /></Link> ,
                <GridActionsCellItem icon={ <i class="fa-solid fa-trash icono-accion-tabla icono-tabla-eliminar"></i> }  label="Eliminar" onClick={showModal(params.id, params.getValue(params.id, 'nombre'))}/>
            ],
          },
      ],
      [showModal],[toggleTallerVisibility],
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
        <Helmet>
          <title>Panel | Rhesident</title>
        </Helmet>
        <AdminNavbar activeTab="talleres"></AdminNavbar>
        {modalVisibility ? (
          <ModalAdminEliminar
            setModalVisibility={setModalVisibility}
            recurso="el taller"
            nombreRecurso={modalInfo}
            runFunction={deleteTaller}
          ></ModalAdminEliminar>
        ) : null}
        <main className="main-admin">
          <header className="header-panel">
            <div className="cont-bienvenida">
              <i class="fa-solid fa-briefcase icono-tab icono-pagina"></i>
              <div className="texto-bienvenida">
                <p className="verde">Bienvenido Administrador</p>
                <h3 className="negro">Talleres</h3>
              </div>
            </div>
            <div className="cont-accesos-directos">
              <Link to="/" className="acceso-directo" target="_blank">
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

              <Link to="/agregar-taller" className="btn-agregar-panel">
                <div className="header-card-contenido">
                  <div className="vertical-indicator-light"></div>
                  <h4 className="blanco">Agregar taller</h4>
                </div>
                <img
                  src={iconoAgregarTaller}
                  alt=""
                  className="icono-agregar"
                />
              </Link>
            </div>

            <div className="card-contenido-panel card-cont-tabla">
              <div className="header-card-contenido">
                <div className="vertical-indicator"></div>
                <h4 className="verde">Todos los talleres</h4>
              </div>
              <DataGrid
                autoHeight
                rows={talleres}
                columns={columns}
                sx={datagridStyles}
                localeText={esES.components.MuiDataGrid.defaultProps.localeText}
              />
            </div>
          </section>
        </main>
      </div>
    );
}

export default AdminTalleres;
