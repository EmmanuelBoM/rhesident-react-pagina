import React from 'react';
import '../styles/base.css'
import '../styles/extras.css'
import ilustracionMantenimiento from '../assets/ilustracion_mantenimiento.svg'

function Mantenimiento() {
    return (
        <main>
            <section className="proximamente">
                <h1 className="verde">En mantenimiento</h1>
                <h4 className='negro'>Esperamos volver pronto. ¡Gracias por tu paciencia!</h4>
                <img className='ilustracion-mantenimiento' src={ilustracionMantenimiento} alt="" />
            </section>|
        </main>
    );
}

export default Mantenimiento;
