import React from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import '../styles/base.css'
import '../styles/extras.css'
import ilustracionMantenimiento from '../assets/ilustracion_mantenimiento.svg'

function Mantenimiento() {
  return (
        <main>
            <NavHeader></NavHeader>
            <section className="proximamente">
                    <h1 className="verde">Página en mantenimiento</h1>
                    <h4 className='negro'>Mientras trabajamos, puedes navegar en nuestras otras páginas disponibles.</h4>
                    <img src={ilustracionMantenimiento} alt="" />
            </section>
            <Footer></Footer>
        </main>
  );
}

export default Mantenimiento;
