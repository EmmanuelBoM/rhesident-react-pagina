import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import NavHeader from '../components/NavHeader'
import OverlayInvitacion from '../components/OverlayInvitacion'

import '../styles/base.css'
import '../styles/LandingPage.css'
import '../styles/NuestrasIntenciones.css'
import "animate.css/animate.min.css"

import downArrow from '../assets/down_arrow_light.svg'
import imgHeroIntenciones from '../assets/nuestras_intenciones.png';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import {Animated} from "react-animated-css";
import "animate.css/animate.min.css";

import {Link} from 'react-router-dom';

// Firebase Imports
import {db} from '../firebaseConfig'
import {collection,getDoc, doc} from "@firebase/firestore";

function NuestrasIntenciones() {
    const [overlayVisibility, setOverlayVisibility] = useState(false)
    const [portadaIntenciones, setPortadaIntenciones] = useState('')

    const portadaRef = doc(db, "recursosGenerales", "JdU7qvSU98pHcPSt59e4")
    useEffect (()=>{
        const getPortada = async () => {
          const portadaDoc = await getDoc(portadaRef);
          setPortadaIntenciones(portadaDoc.data().url)
        }
    
        getPortada();
      }, []);
    
    const portadaImg = {
        backgroundImage: `url(${portadaIntenciones})`
    }

    function showOverlay(){
        if (window.scrollY>=80){
            setOverlayVisibility(true)
        }
        else{
            setOverlayVisibility(false)
        }
    }

    window.addEventListener('scroll', showOverlay)

    return (
        <main>
            <NavHeader textColor='blanco'></NavHeader>
            <Animated animateOnMount={false} animationIn="fadeInDown" animationOut="fadeOutUp" isVisible={overlayVisibility} animationInDuration={500} animationOutDuration={500}className="overlay-top">
                {overlayVisibility ? <OverlayInvitacion overlayVisibility={overlayVisibility}></OverlayInvitacion>:null}
            </Animated>
            <section className="hero-intenciones" style={portadaImg}>
                <div className="color-overlay">
                    <h1 className='titulo-hero blanco'>Nuestras intenciones</h1>
                    <p className='intenciones-descripcion blanco descripcion-hero'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
                        quia praesentium iste explicabo ad ipsum ex eius neque, dolor error
                        commodi accusamus. 
                    </p>
                    <div className="scrolldown-cont">
                        <img src={downArrow} alt="" className="scroll-down-link scroll-down-arrow" />
                    </div>
                </div>
            </section>
            <section className="intenciones-detalle">
                <div className="intencion-cont intencion-verde">
                    <div className="intencion-img"></div>
                    <div className="intencion-texto">
                        <p className="intencion-descripcion blanco">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio quis, impedit perferendis rem minima qui. Rerum pariatur amet nostrum?</p>
                        <h2 className="intencion-titulo blanco">Inclusión</h2>
                    </div>
                </div>

                <div className="intencion-cont">
                    <div className="intencion-texto">
                        <h2 className="intencion-titulo verde">Cohesión Social</h2>
                        <p className="intencion-descripcion verde">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio quis, impedit perferendis rem minima qui. Rerum pariatur amet nostrum?</p>
                    </div>
                    <div className="intencion-img"></div>
                </div>

                <div className="intencion-cont intencion-verde">
                    <div className="intencion-img"></div>
                    <div className="intencion-texto">
                        <p className="intencion-descripcion blanco">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio quis, impedit perferendis rem minima qui. Rerum pariatur amet nostrum?</p>
                        <h2 className="intencion-titulo blanco">Sentido de comunidad</h2>
                    </div>
                </div>

                <div className="intencion-cont">
                    <div className="intencion-texto">
                        <h2 className="intencion-titulo verde">Participación e involucramiento social</h2>
                        <p className="intencion-descripcion verde">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio quis, impedit perferendis rem minima qui. Rerum pariatur amet nostrum?</p>
                    </div>
                    <div className="intencion-img"></div>
                </div>
            </section>

            <section className="proposito-evolutivo">
                <div className="color-overlay">
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut='animate__fadeOutUp' offset={190}>
                        <h2 className='blanco'>Nuestro propósito evolutivo</h2>
                    </AnimationOnScroll>
                    <AnimationOnScroll className='descripcion-hero' animateIn="animate__fadeInUp" animateOut='animate__fadeOutUp' offset={190}>
                        <p className='blanco'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
                            quia praesentium iste explicabo ad ipsum ex eius neque, dolor error
                            commodi accusamus. 
                        </p>
                    </AnimationOnScroll>
                </div>
            </section>
            <section className="cta-procesos">
                <AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate__fadeOut'>
                    <h2 className='negro'>Para conocer qué hacemos...</h2>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__heartBeat" animateOut='animate__fadeOutUp' delay={2}>
                    <Link to='/proyectos'><button className="btn-intenciones-procesos"><p className="btn-intenciones-txt-primario">Presiona aquí</p><p className="btn-intenciones-txt-secundario">Conoce nuestros procesos comunitarios</p></button></Link>
                </AnimationOnScroll>
            </section>
            <section className="mision-vision">
            <div className="mision">
                <AnimationOnScroll animateIn="animate__fadeInDown" animateOut='animate__fadeOutUp'>
                        <h2 className="blanco">Misión</h2>
                        <p className="blanco">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos voluptatum maxime ut itaque aspernatur qui laborum, ad cupiditate amet libero.</p>
                </AnimationOnScroll>
            </div>
                <div className="separador">
                    <div className="circulo-separador"></div>
                    <div className="linea-separador"></div>
                    <div className="circulo-separador"></div>
                </div>

                <div className="vision">
                <AnimationOnScroll animateIn="animate__fadeInDown" animateOut='animate__fadeOutUp' duration={1.4}>
                    <h2 className="blanco">Visión</h2>
                    <p className="blanco">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos voluptatum maxime ut itaque aspernatur qui laborum, ad cupiditate amet libero.</p>
                </AnimationOnScroll>
                    
                </div>
                <div className="separador">
                    <div className="circulo-separador"></div>
                    <div className="linea-separador"></div>
                    <div className="circulo-separador"></div>
                </div>
                <div className="objetivo">
                    <AnimationOnScroll animateIn="animate__fadeInDown" animateOut='animate__fadeOutUp' duration={1.6}>
                    <h2 className="blanco">Objetivo</h2>
                    <p className="blanco">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos voluptatum maxime ut itaque aspernatur qui laborum, ad cupiditate amet libero.</p>
                    </AnimationOnScroll>
                    
                </div>
            </section>
            <Footer></Footer>
        </main>
    )
}

export default NuestrasIntenciones
