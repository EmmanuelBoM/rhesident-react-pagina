import React, {useState} from 'react'
import Footer from '../components/Footer'
import NavHeader from '../components/NavHeader'
import OverlayInvitacion from '../components/OverlayInvitacion'
import '../styles/base.css'
import '../styles/LandingPage.css'
import '../styles/NuestraHuella.css'
import downArrow from '../assets/down_arrow.svg'

// SwiperJS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import {Animated} from "react-animated-css";
import "animate.css/animate.min.css";
import SwiperCore, {Pagination,Navigation} from 'swiper';

SwiperCore.use([Pagination,Navigation]);



function NuestraHuella() {
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
            <section className="hero-huella">
                    <div className="color-overlay">
                        <h1 className='titulo-hero blanco'>Nuestra Huella</h1>
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

            <section className="testimonios">
                <div className="section-title">
                    <h2 className="negro">Testimonios</h2>
                    <p className="negro section-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur minus fuga fugit quis nemo iste.</p>
                </div>
                
                <Swiper   slidesPerView={3} navigation={true} spaceBetween={1} pagination={{"clickable": true}} className="swiper-testimonios">
                    <SwiperSlide className='cont-testimonio'>
                        <div className="img-testimonial"></div>
                        <div className="detalles-testimonial">
                            <h4 className=" amarillo nombre-testimonial">José Martínez</h4>
                            <p className="blanco desc-testimonial">Beneficiario</p>
                        </div>
                        <p className="blanco texto-testimonio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis totam dolorum libero cumque! Odit, voluptatem! Id assumenda cumque sed aspernatur consequatur corrupti quia perspiciatis, quam ratione ipsam. Rem, fugit!</p>
                    </SwiperSlide>
                    <SwiperSlide className='cont-testimonio'>
                        <div className="img-testimonial"></div>
                        <div className="detalles-testimonial">
                            <h4 className=" amarillo nombre-testimonial">José Martínez</h4>
                            <p className="blanco desc-testimonial">Beneficiario</p>
                        </div>
                        <p className="blanco texto-testimonio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis totam dolorum libero cumque! Odit, voluptatem! Id assumenda cumque sed aspernatur consequatur corrupti quia perspiciatis, quam ratione ipsam. Rem, fugit!</p></SwiperSlide>
                    
                    <SwiperSlide className='cont-testimonio'>
                        <div className="img-testimonial"></div>
                        <div className="detalles-testimonial">
                            <h4 className=" amarillo nombre-testimonial">José Martínez</h4>
                            <p className="blanco desc-testimonial">Beneficiario</p>
                        </div>
                        <p className="blanco texto-testimonio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis totam dolorum libero cumque! Odit, voluptatem! Id assumenda cumque sed aspernatur consequatur corrupti quia perspiciatis, quam ratione ipsam. Rem, fugit!</p></SwiperSlide>
                    
                    <SwiperSlide className='cont-testimonio'>
                        <div className="img-testimonial"></div>
                        <div className="detalles-testimonial">
                            <h4 className=" amarillo nombre-testimonial">José Martínez</h4>
                            <p className="blanco desc-testimonial">Beneficiario</p>
                        </div>
                        <p className="blanco texto-testimonio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis totam dolorum libero cumque! Odit, voluptatem! Id assumenda cumque sed aspernatur consequatur corrupti quia perspiciatis, quam ratione ipsam. Rem, fugit!</p></SwiperSlide>
                    
                    <SwiperSlide className='cont-testimonio'>
                        <div className="img-testimonial"></div>
                        <div className="detalles-testimonial">
                            <h4 className=" amarillo nombre-testimonial">José Martínez</h4>
                            <p className="blanco desc-testimonial">Beneficiario</p>
                        </div>
                        <p className="blanco texto-testimonio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis totam dolorum libero cumque! Odit, voluptatem! Id assumenda cumque sed aspernatur consequatur corrupti quia perspiciatis, quam ratione ipsam. Rem, fugit!</p></SwiperSlide>
                    
                    <SwiperSlide className='cont-testimonio'>
                        <div className="img-testimonial"></div>
                        <div className="detalles-testimonial">
                            <h4 className=" amarillo nombre-testimonial">José Martínez</h4>
                            <p className="blanco desc-testimonial">Beneficiario</p>
                        </div>
                        <p className="blanco texto-testimonio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis totam dolorum libero cumque! Odit, voluptatem! Id assumenda cumque sed aspernatur consequatur corrupti quia perspiciatis, quam ratione ipsam. Rem, fugit!</p>
                    </SwiperSlide>
                </Swiper>
                
            </section>
            <section className="notas-medio">
                <div className="section-title">
                    <h2 className="negro">Notas de medios</h2>
                    <p className="negro section-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ducimus incidunt totam minima, molestias laudantium!</p>
                </div>
                
                <Swiper 
                    slidesPerView={4} 
                    centeredSlides={true}
                    loop={true}
                    spaceBetween={20} 
                    pagination={{"type": "custom" }} 
                    navigation={true} 
                    className="swiper-proyectos">
                
                    <SwiperSlide className='cont-nota-medio'>
                        <div className="franja-nota"></div>
                        <div className="detalles-nota">
                            <p className="fecha-nota">17 Dic, 2022</p>
                            <h4 className="nombre-nota negro">Organización rehabilita espacios comunitarios en Pachuca</h4>
                            <div className="separador-nota"></div>
                            <div className="fuente-nota">
                                <i class="fa-solid fa-newspaper icono-nota"></i>
                                <p className="nombre-fuente">Milenio noticias</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    
            </Swiper>
                
            </section>
            <section className="Aliados">
                <div className="section-title">
                    <h2 className="negro">Nuestros aliados</h2>
                    <p className="negro section-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ducimus incidunt totam minima, molestias laudantium!</p>
                </div>
                <div className="galeria-aliados">
                    
                </div>
            </section>
            <Footer></Footer>
        </main>
    )
}

export default NuestraHuella