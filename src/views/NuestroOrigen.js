import React, {useState} from 'react'
import Footer from '../components/Footer'
import NavHeader from '../components/NavHeader'
import OverlayInvitacion from '../components/OverlayInvitacion'
import '../styles/base.css'
import '../styles/LandingPage.css'
import '../styles/NuestroOrigen.css'
import downArrow from '../assets/down_arrow_light.svg'
import gifFilosofia from '../assets/nuestra_filosofia.GIF'
import gifMarca from '../assets/nuestra_marca.GIF'
import gifHistoria from '../assets/nuestra_historia.GIF'
import {Animated} from "react-animated-css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function NuestroOrigen() {

    const [overlayVisibility, setOverlayVisibility] = useState(false)

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

            <section className="hero-origen">
                <div className="color-overlay">
                    <h1 className='titulo-hero blanco'>Nuestro Origen</h1>
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

            <section className="elementos-origen">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut='animate__fadeOutLeft' duration={1.5}>
                    <div className="nuestra-filosofia">
                        <div className="cont-origen">
                            <h2 className="titulo-origen negro">Nuestra filosofía</h2>
                            <p className="verde">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem esse reprehenderit quod iste illum cumque commodi, modi, rem ad est adipisci expedita velit. Officiis quam eaque vitae laboriosam eveniet illo, quae enim est rem distinctio. Tempora architecto numquam saepe adipisci repellendus quo reiciendis rerum, quidem expedita reprehenderit delectus et accusamus.</p>
                        </div>

                        <figure className='cont-gif'>
                            <img src={gifFilosofia} alt="" className="gif-origen" />
                        </figure>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInRight" animateOut='animate__fadeOutRight' duration={1.5}>
                    <div className="nuestra-marca">
                        <figure className='cont-gif'>
                            <img src={gifMarca} alt="" className="gif-origen" />
                        </figure>

                        <div className="cont-origen">
                            <h2 className="titulo-origen negro">Nuestra marca</h2>
                            <p className="verde">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem esse reprehenderit quod iste illum cumque commodi, modi, rem ad est adipisci expedita velit. Officiis quam eaque vitae laboriosam eveniet illo, quae enim est rem distinctio. Tempora architecto numquam saepe adipisci repellendus quo reiciendis rerum, quidem expedita reprehenderit delectus et accusamus.</p>
                        </div>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut='animate__fadeOutLeft' duration={1.5}>
                    <div className="nuestra-historia">
                        <div className="cont-origen">
                            <h2 className="titulo-origen negro">Nuestra historia</h2>
                            <p className="verde">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem esse reprehenderit quod iste illum cumque commodi, modi, rem ad est adipisci expedita velit. Officiis quam eaque vitae laboriosam eveniet illo, quae enim est rem distinctio. Tempora architecto numquam saepe adipisci repellendus quo reiciendis rerum, quidem expedita reprehenderit delectus et accusamus.</p>
                        </div>

                        <figure className='cont-gif'>
                            <img src={gifHistoria} alt="" className="gif-origen" />
                        </figure>
                        
                    </div>
                </AnimationOnScroll>
                
            </section>
            
            <Footer></Footer>
        </main>
    )
}

export default NuestroOrigen
