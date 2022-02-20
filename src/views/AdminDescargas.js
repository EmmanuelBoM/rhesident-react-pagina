import React, {useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import iconoAgregarDescarga from '../assets/icono_agregarDescarga.svg'
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
import { Helmet } from 'react-helmet';

function AdminDescargas() {

    //Firestore GET Query
    const [descargas, setDescargas] = useState([])
    const descargasCollectionRef = collection(db, "descargas")
  
    const q = query(descargasCollectionRef, orderBy("nombre"))
    let navigate = useNavigate();
    useEffect (()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/admin_descargas')
        }

        if (!authToken) {
            navigate('/login')
        }
        const getDescargas = async () => {
            const data = await getDocs(q);
            setDescargas(data.docs.map(((doc)=>({...doc.data(), id:doc.id}))))
        }
  
        getDescargas();
    }, [])

    

    const [modalVisibility, setModalVisibility] = useState(false)
    const [idTestimonio, setIdTestimonio] = useState('')
    const [modalInfo, setModalInfo] = useState('')

    const deleteTestimonio = async () => {
        try{
            await deleteDoc(doc(db, "descargas", idTestimonio));
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
            setIdTestimonio(id);
            setModalVisibility(true);
        },
        [],
    );

    
    const toggleTestimonioVisibility = React.useCallback(
            (id, isVisible) =>async()=>{
            let visibility;
            if(isVisible) { visibility = { visible: false } }
            else{ visibility = { visible: true } }
        
            const descargaRef = doc(db, "descargas", id)
            await updateDoc(descargaRef, visibility);
            window.location.reload();
        },
        [],
    );

      const columns = React.useMemo(()=>
      [
        { field: 'nombre', headerName: 'Nombre',flex:1, minWidth: 60 },
        { field: 'descripcion', headerName: 'Descripción', flex:1, minWidth: 100},
        { field: 'archivoURL', headerName: 'Archivo', flex:1, minWidth: 150},
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Acciones',
            flex:1, 
            minWidth: 100,
            getActions: (params) => [
            
                <GridActionsCellItem icon={ <i class={params.getValue(params.id, 'visible') ? 'fa-solid fa-eye icono-accion-tabla icono-tabla-habilitar' : 'fa-solid fa-eye-slash icono-accion-tabla icono-tabla-deshabilitar'}></i> }  label="Habilitar/Ocultar" onClick={toggleTestimonioVisibility(params.id, params.getValue(params.id, 'visible'))}/>,
                <Link className='link-decoration' to={`/descargas`} target="_blank"><GridActionsCellItem icon={ <i class="fa-solid fa-up-right-from-square icono-accion-tabla icono-tabla-ir"></i> }  label="Ir a" /></Link>,
                <Link className='link-decoration' to={`/editar-descarga/${params.id}`}><GridActionsCellItem icon={ <i class="fa-solid fa-pen-to-square icono-accion-tabla icono-tabla-editar"></i> }  label="Editar" /></Link> ,
                <GridActionsCellItem icon={ <i class="fa-solid fa-trash icono-accion-tabla icono-tabla-eliminar"></i> }  label="Eliminar" onClick={showModal(params.id, params.getValue(params.id, 'nombre'))}/>
            ],
          },
      ],
      [showModal],[toggleTestimonioVisibility],
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
        <AdminNavbar activeTab="descargas"></AdminNavbar>
        {modalVisibility ? (
          <ModalAdminEliminar
            setModalVisibility={setModalVisibility}
            recurso="la descarga"
            nombreRecurso={modalInfo}
            runFunction={deleteTestimonio}
          ></ModalAdminEliminar>
        ) : null}
        <main className="main-admin">
          <header className="header-panel">
            <div className="cont-bienvenida">
              <i class="fa-solid fa-file-arrow-down icono-tab icono-pagina"></i>
              <div className="texto-bienvenida">
                <p className="verde">Bienvenido Administrador</p>
                <h3 className="negro">Descargas</h3>
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

              <Link to="/agregar-descarga" className="btn-agregar-panel">
                <div className="header-card-contenido">
                  <div className="vertical-indicator-light"></div>
                  <h4 className="blanco">Agregar descarga</h4>
                </div>
                <img
                  src={iconoAgregarDescarga}
                  alt=""
                  className="icono-agregar"
                />
              </Link>
            </div>

            <div className="card-contenido-panel card-cont-tabla">
              <div className="header-card-contenido">
                <div className="vertical-indicator"></div>
                <h4 className="verde">Todas los descargas</h4>
              </div>
              <DataGrid
                autoHeight
                rows={descargas}
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

export default AdminDescargas;
