import React from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import '../styles/base.css'
import '../styles/Voluntariado.css'
import downArrow from '../assets/down_arrow_light.svg'
import {Link} from 'react-router-dom'
function Voluntariado() {
  return (
      <main>
        <NavHeader textColor='blanco'></NavHeader>
        <section className="hero-voluntariado">
            <div className="color-overlay">
                <h1 className='titulo-hero blanco'>¡Conviértete en voluntario!</h1>
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
        <section className="tipos-voluntariado">
            <div className="cont-tipo-voluntariado">
                <i class="fa-solid fa-handshake-angle icono-voluntariado"></i>
                <div className="cont-nombre-voluntariado">
                    <h3 className="nombre-voluntariado">Presencial</h3>
                    <i class="fa-regular fa-circle-question icono-pregunta"></i>
                </div>
                <Link to='/registro-voluntariado'>
                    <button className="btn-voluntariado">Aplica aquí</button>
                </Link>
                <button className="btn-ver-proyectos">Ver Proyectos</button>
            </div>
            <div className="cont-tipo-voluntariado">
                <i class="fa-solid fa-chalkboard-user icono-voluntariado"></i>
                <div className="cont-nombre-voluntariado">
                    <h3 className="nombre-voluntariado">Híbrido</h3>
                    <i class="fa-regular fa-circle-question icono-pregunta"></i>
                </div>
                <Link to='/registro-voluntariado'>
                    <button className="btn-voluntariado">Aplica aquí</button>
                </Link>
                <button className="btn-ver-proyectos">Ver Proyectos</button>
            </div>
            <div className="cont-tipo-voluntariado">
                <i class="fa-solid fa-desktop icono-voluntariado"></i>
                <div className="cont-nombre-voluntariado">
                    <h3 className="nombre-voluntariado">Remoto</h3>
                    <i class="fa-regular fa-circle-question icono-pregunta"></i>
                </div>
                <Link to='/registro-voluntariado'>
                    <button className="btn-voluntariado">Aplica aquí</button>
                </Link>
                <button className="btn-ver-proyectos">Ver Proyectos</button>
            </div>
        </section>

        <section className="galeria-proyectos-voluntariado">

        </section>
        <section className="cta-voluntariado">
            <h2 className="negro">Anímate a aprender y hacer un cambio en la sociedad</h2>
            <button className="btn-cta-voluntariado">Aplica aquí</button>
        </section>

        <section className="video-voluntariado">
            <h2 className="negro">¿Te imaginas cómo sería ser parte de Rhesident Org?</h2>
            <h4 className='descripcion-seccion'>¡Da clic a este video y descúbrelo!</h4>
            <iframe
            className='yt-iframe'
            src='https://www.youtube.com/embed/gR3q8YMGh8A'
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>
        <Footer></Footer>

      </main>
  );
}

export default Voluntariado;
