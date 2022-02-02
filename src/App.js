import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
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


function App() {
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
      <Route path='/registro-voluntariado' element={<RegistroVoluntarios/>} />
      <Route path='/podcast' element={<Podcast/>} />
      <Route path='/blog' element={<Proximamente/>} />
      <Route path='/tienda' element={<Proximamente/>} />
      <Route path='/dona-ahora' element={<PaypalDona/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/admin_recursos' element={<AdminRecursos/>} />
      <Route path='/admin_proyectos' element={<AdminProyectos/>} />
      <Route path='/agregar-proyecto' element={<AdminAgregarProyecto/>} />
      <Route path='/editar-proyecto/:id' element={<AdminEditarProyecto/>} />
      <Route path='/admin_notas' element={<AdminNotas/>} />
      <Route path='/agregar-nota' element={<AdminAgregarNota/>} />
      <Route path='/editar-nota/:id' element={<AdminEditarNota/>} />
      <Route path='/admin_beneficiarios' element={<AdminBeneficiarios/>} />
      <Route path='/agregar-beneficiario' element={<AdminAgregarBeneficiario/>} />
      <Route path='/editar-beneficiario/:id' element={<AdminEditarBeneficiario/>} />
      <Route path='/admin_alianzas' element={<AdminAlianzas/>} />
      <Route path='/agregar-alianza' element={<AdminAgregarAlianza/>} />
      <Route path='/editar-alianza/:id' element={<AdminEditarAlianza/>} />
      <Route path='/admin_equipo' element={<AdminEquipo/>} />
      <Route path='/agregar-miembro' element={<AdminAgregarMiembro/>} />
      <Route path='/editar-miembro/:id' element={<AdminEditarMiembro/>} />
      <Route path='/admin_testimonios' element={<AdminTestimonios/>} />
      <Route path="*" element={<Vista404/>} />
     </Routes>
   </Router>
  )
}

export default App
