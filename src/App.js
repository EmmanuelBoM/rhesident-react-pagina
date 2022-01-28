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

function App() {
  return (
   <Router>
     <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/proyectos' element={<Proyectos/>} />
      <Route path='/nuestras-intenciones' element={<NuestrasIntenciones/>} />
      <Route path='/nuestro-origen' element={<NuestroOrigen/>} />
      <Route path='/nuestro-equipo' element={<NuestroEquipo/>} />
      <Route path='/nuestra-huella' element={<NuestraHuella/>} />
      <Route path='/proyecto' element={<ProyectoDetalle/>} />
      <Route path='/talleres' element={<Talleres/>} />
      <Route path='/voluntariado' element={<Voluntariado/>} />
      <Route path='/donaciones' element={<Donaciones/>} />
      <Route path='/registro-voluntariado' element={<RegistroVoluntarios/>} />
      <Route path='/podcast' element={<Podcast/>} />
      <Route path='/blog' element={<Proximamente/>} />
      <Route path='/tienda' element={<Proximamente/>} />
      <Route path='/dona-ahora' element={<PaypalDona/>} />
      <Route path="*" element={<Vista404/>} />
     </Routes>
   </Router>
  )
}

export default App
