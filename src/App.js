import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes, 
  Navigate
  } from 'react-router-dom';
import "animate.css";
import LandingPage from './views/LandingPage'
import NuestrasIntenciones from './views/NuestrasIntenciones';
import NuestroOrigen from './views/NuestroOrigen';
import NuestroEquipo from './views/NuestroEquipo';
import NuestraHuella from './views/NuestraHuella'
import Proyectos from './views/Proyectos'
import ProyectoDetalle from './views/ProyectoDetalle'
import Talleres from './views/Talleres'
import Voluntariado from './views/Voluntariado';
import Donaciones from './views/Donaciones';
import RegistroVoluntarios from './views/RegistroVoluntarios';
import Podcast from './views/Podcast';
import Vista404 from './views/Vista404';
import Proximamente from './views/Proximamente';
import PaypalDona from './views/PaypalDona';
import ScrollToTop from './components/ScrollToTop';
import Login from './views/Login';
import AdminRecursos from './views/AdminRecursos';
import AdminProyectos from './views/AdminProyectos';
import AdminAgregarProyecto from './views/AdminAgregarProyecto';
import AdminEditarProyecto from './views/AdminEditarProyecto';
import AdminNotas from './views/AdminNotas';
import AdminAgregarNota from './views/AdminAgregarNota';
import AdminEditarNota from './views/AdminEditarNota';
import AdminBeneficiarios from './views/AdminBeneficiarios';
import AdminAgregarBeneficiario from './views/AdminAgregarBeneficiario';
import AdminEditarBeneficiario from './views/AdminEditarBeneficiario';
import AdminAlianzas from './views/AdminAlianzas';
import AdminAgregarAlianza from './views/AdminAgregarAlianza';
import AdminEditarAlianza from './views/AdminEditarAlianza';
import AdminEquipo from './views/AdminEquipo';
import AdminAgregarMiembro from './views/AdminAgregarMiembro';
import AdminEditarMiembro from './views/AdminEditarMiembro';
import AdminTestimonios from './views/AdminTestimonios';
import AdminAgregarTestimonio from './views/AdminAgregarTestimonio';
import AdminEditarTestimonio from './views/AdminEditarTestimonio';
import AdminTalleres from './views/AdminTalleres';
import AdminAgregarTaller from './views/AdminAgregarTaller';
import FormularioIdea from './views/FormularioIdea';
import Mantenimiento from './views/Mantenimiento';
import RegistroTaller from './views/RegistroTaller';
import AdminDescargas from './views/AdminDescargas';
import AdminAgregarDescarga from './views/AdminAgregarDescarga';
import AdminEditarDescarga from './views/AdminEditarDescarga';
import Descargas from './views/Descargas';


function App() {
  const [authToken, setAuthToken] =useState('')
  
  useEffect(() => {
    setAuthToken(window.localStorage.getItem('Auth Token'));
  }, [])
  

  return (
   <Router>
      <ScrollToTop/>
     <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/proyectos' element={<Proyectos/>} />
      <Route path='/nuestras-intenciones' element={<NuestrasIntenciones/>} />
      <Route path='/nuestro-origen' element={<NuestroOrigen/>} />
      <Route path='/nuestro-equipo' element={<NuestroEquipo/>} />
      <Route path='/nuestra-huella' element={<NuestraHuella/>} />
      <Route path='/proyecto/:id' element={<ProyectoDetalle/>} />
      <Route path='/talleres' element={<Talleres/>} />
      <Route path='/voluntariado' element={<Voluntariado/>} />
      <Route path='/como-apoyar' element={<Donaciones/>} />
      <Route path='/registro-voluntariado/:modalidad' element={<RegistroVoluntarios/>} />
      <Route path='/registro-voluntariado' element={<RegistroVoluntarios/>} />
      <Route path='/podcast' element={<Podcast/>} />
      <Route path='/blog' element={<Proximamente/>} />
      <Route path='/tienda' element={<Proximamente/>} />
      <Route path='/dona-ahora' element={<PaypalDona/>} />
      <Route path='/cuentanos-tu-idea' element={<FormularioIdea/>} />
      <Route path='/registro-taller/:id' element={<RegistroTaller/>} />
      <Route path='/descargas' element={<Descargas/>} />
      
      <Route path='/login' element={<Login/>} />
      <Route path='/admin_recursos' element={authToken ? <AdminRecursos/>: <Navigate to='/login'/>} />
      
      <Route path='/admin_proyectos' element={authToken ? <AdminProyectos/> : <Navigate to='/login'/>} />
      <Route path='/agregar-proyecto' element={authToken ? <AdminAgregarProyecto/> : <Navigate to='/login'/>} />
      <Route path='/editar-proyecto/:id' element={authToken ? <AdminEditarProyecto/> : <Navigate to='/login'/>} />
      
      <Route path='/admin_notas' element={authToken ? <AdminNotas/>  : <Navigate to='/login'/>} />
      <Route path='/agregar-nota' element={authToken ? <AdminAgregarNota/> : <Navigate to='/login'/>} />
      <Route path='/editar-nota/:id' element={ authToken ? <AdminEditarNota/>: <Navigate to='/login'/>} />
      
      <Route path='/admin_beneficiarios' element={ authToken ? <AdminBeneficiarios/> : <Navigate to='/login'/>} />
      <Route path='/agregar-beneficiario' element={ authToken ? <AdminAgregarBeneficiario/> : <Navigate to='/login'/>} />
      <Route path='/editar-beneficiario/:id' element={ authToken ?  <AdminEditarBeneficiario/> : <Navigate to='/login'/>} />
      
      <Route path='/admin_alianzas' element={ authToken ? <AdminAlianzas/> : <Navigate to='/login'/>} />
      <Route path='/agregar-alianza' element={ authToken ? <AdminAgregarAlianza/> : <Navigate to='/login'/>} />
      <Route path='/editar-alianza/:id' element={authToken ? <AdminEditarAlianza/> : <Navigate to='/login'/>} />
      
      <Route path='/admin_equipo' element={authToken ? <AdminEquipo/> : <Navigate to='/login'/>} />
      <Route path='/agregar-miembro' element={ authToken ? <AdminAgregarMiembro/> : <Navigate to='/login'/>} />
      <Route path='/editar-miembro/:id' element={authToken ? <AdminEditarMiembro/> : <Navigate to='/login'/>} />
      
      <Route path='/admin_testimonios' element={authToken ? <AdminTestimonios/>: <Navigate to='/login'/>} />
      <Route path='/agregar-testimonio' element={authToken ?<AdminAgregarTestimonio/>: <Navigate to='/login'/>} />
      <Route path='/editar-testimonio/:id' element={authToken ?<AdminEditarTestimonio/>: <Navigate to='/login'/>} />
     
      <Route path='/admin_talleres' element={authToken ?<AdminTalleres/>: <Navigate to='/login'/>} />
      <Route path='/agregar-taller' element={authToken ?<AdminAgregarTaller/>: <Navigate to='/login'/>} />
      {/* TO DO /editar-taller/:id */}
      <Route path='/admin_descargas' element={authToken ?<AdminDescargas/>: <Navigate to='/login'/>} />
      <Route path='/agregar-descarga' element={authToken ?<AdminAgregarDescarga/>: <Navigate to='/login'/>} />
      <Route path='/editar-descarga/:id' element={authToken ?<AdminEditarDescarga/>: <Navigate to='/login'/>} />
      
      <Route path="*" element={<Vista404/>} />
     </Routes>
   </Router>
  )
}

export default App
