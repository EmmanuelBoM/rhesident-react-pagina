import React, {useState} from 'react'
import Footer from '../components/Footer'
import NavHeader from '../components/NavHeader'
import '../styles/base.css'
import '../styles/LandingPage.css'
import '../styles/NuestroEquipo.css'
import downArrow from '../assets/down_arrow_light.svg'
import MiembroEquipo from '../components/MiembroEquipo'
import ModalMiembro from '../components/ModalMiembro'
import OverlayInvitacion from '../components/OverlayInvitacion'

import {Animated} from "react-animated-css";
import "animate.css/animate.min.css";


function NuestroEquipo() {
    //Bloquear scroll del body
    // document.body.style.overflow = 'hidden';

    const [overlayVisibility, setOverlayVisibility] = useState(false)
    const [modalVisibility, setModalVisibility] = useState(false)

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
           
            <section className="hero-equipo">
                <div className="color-overlay">
                    <h1 className='titulo-hero blanco'>Nuestro Equipo</h1>
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
            <section className="galeria-equipo">
                <div className="cont-miembros">
                    <MiembroEquipo setModalVisibility={setModalVisibility}></MiembroEquipo>
                    <MiembroEquipo></MiembroEquipo>
                    <MiembroEquipo></MiembroEquipo>
                    <MiembroEquipo></MiembroEquipo>
                    <MiembroEquipo></MiembroEquipo>
                    <MiembroEquipo></MiembroEquipo>
                </div>
            </section>
            <Footer></Footer>
            <Animated animateOnMount={false} animationIn="fadeIn" animationOut="fadeOut" isVisible={modalVisibility} animationInDuration={500} animationOutDuration={500} className="overlay-top">
                {modalVisibility ? <ModalMiembro setModalVisibility={setModalVisibility} modalVisibility={modalVisibility}></ModalMiembro> : null}
            </Animated>
           
        </main>
    )
}

export default NuestroEquipo
