import React from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import '../styles/base.css'
import '../styles/LandingPage.css'
import '../styles/Talleres.css'
import downArrow from '../assets/down_arrow_light.svg'
import Taller from '../components/Taller';

function Talleres() {
    return(
        <main>
            <NavHeader textColor='blanco'></NavHeader>
            <section className="hero-taller">
                    <div className="color-overlay">
                        <h1 className='titulo-hero blanco'>Aprende con nuestros talleres</h1>
                        <p className='origen-descripcion blanco descripcion-hero'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
                            quia praesentium iste explicabo ad ipsum ex eius neque, dolor error
                            commodi accusamus. 
                        </p>
                        <div className="scrolldown-cont">
                            <img src={downArrow} alt="" className="scroll-down-link scroll-down-arrow" />
                        </div>
                    </div>
            </section>

            <section className="talleres">
                <h2 className="verde">Activos</h2>
                <div className="talleres-activos">
                    <Taller></Taller>
                    <Taller></Taller>
                    <Taller></Taller>
                    <Taller></Taller>
                </div>
                <h2 className="verde">Próximos</h2>
                <div className="talleres-proximos">
                    <Taller></Taller>
                    <Taller></Taller>
                    <Taller></Taller>
                </div>
                
            </section>
            <Footer></Footer> 
        </main>
    );
}

export default Talleres;
