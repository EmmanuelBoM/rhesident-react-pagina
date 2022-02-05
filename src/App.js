import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
  } from 'react-router-dom';
import "animate.css";

import Mantenimiento from './views/Mantenimiento';



function App() {
  return (
   <Router>
     <Routes>
      <Route path='/' element={<Mantenimiento/>} />
      <Route path="*" element={<Mantenimiento/>} />
     </Routes>
   </Router>
  )
}

export default App
