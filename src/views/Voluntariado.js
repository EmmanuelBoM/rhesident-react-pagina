import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import '../styles/base.css'
import '../styles/Voluntariado.css'
import downArrow from '../assets/down_arrow_light.svg'
import {Link} from 'react-router-dom'
import CardVoluntariado from '../components/CardVoluntariado';

import {Animated} from "react-animated-css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, { Pagination,Navigation } from 'swiper';

//Firebase imports
import {db} from '../firebaseConfig'
import {query, collection, getDocs,where, doc, getDoc} from "@firebase/firestore";

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

function Voluntariado() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [voluntariadoActive, setVoluntariadoActive] = useState('')
    const [swiperVisibility, setswiperVisibility] = useState(false)
    const [portadaVoluntariado, setPortadaVoluntariado] = useState('')
    const [videoURL, setVideoURL] = useState('')
    const portadaRef = doc(db, "recursosGenerales", "uxuVFcShyChtFGtJzSiX");
    const videoRef = doc(db, "recursosGenerales", "kRku4Qd3Bqpm6ho1F2kE");

    useEffect (()=>{
        
        const getPortada = async () => {
            const portadaDoc = await getDoc(portadaRef);
            setPortadaVoluntariado(portadaDoc.data().url);
          };
        
          const getVideo = async () => {
            const videoDoc = await getDoc(videoRef);
            setVideoURL(videoDoc.data().url);
          };

        getVideo();
        getPortada();

      }, []);

    const portadaImg = {
        backgroundImage: `url(${portadaVoluntariado})`,
    };

    
  return (
      <main>
        <NavHeader textColor='blanco'></NavHeader>
        <section className="hero-voluntariado" style={portadaImg}>
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
            <CardVoluntariado tipoVoluntariado='Presencial' setSwiperVisibility={setswiperVisibility} setVoluntariadoActive={setVoluntariadoActive} voluntariadoActive={voluntariadoActive}></CardVoluntariado>
            <CardVoluntariado tipoVoluntariado='Híbrido' setSwiperVisibility={setswiperVisibility} setVoluntariadoActive={setVoluntariadoActive} voluntariadoActive={voluntariadoActive}></CardVoluntariado>
            <CardVoluntariado tipoVoluntariado='Remoto' setSwiperVisibility={setswiperVisibility} setVoluntariadoActive={setVoluntariadoActive} voluntariadoActive={voluntariadoActive}></CardVoluntariado>
        </section>

        <section className={swiperVisibility ? "galeria-proyectos-voluntariado" : null}>
            {voluntariadoActive === "Presencial" ? 
                <Animated animateOnMount={true} animationIn="fadeInDown" isVisible={swiperVisibility} animationOut="slideOutUp" animationInDuration={600} animationOutDuration={600} className="swiper-proyectos">
                    <Swiper 
                    onSwiper={setSwiperRef} 
                    slidesPerView={5} 
                    centeredSlides={true}
                    loop={true}
                    spaceBetween={30} 
                    pagination={{"type": "custom" }} 
                    navigation={true} 
                    className="swiper-proyectos">
                    
                        <SwiperSlide className='proyecto-cont'> 
                        <Link to='/proyecto'>
                            <div className="proyecto-overlay">
                            <h3 className="blanco nombre-proceso-ind">Nombre del Proyecto</h3>
                            <p className="blanco descripcion-proceso-ind">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusantium ullam reiciendis possimus voluptas architecto praesentium reprehenderit quidem atque dolores.</p>
                            </div> 
                        </Link>
                        </SwiperSlide>
                    
                    
                        <SwiperSlide className='proyecto-cont'>
                            <div className="proyecto-overlay">
                            <h3 className="blanco nombre-proceso-ind">Nombre del Proyecto</h3>
                            <p className="blanco descripcion-proceso-ind">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusantium ullam reiciendis possimus voluptas architecto praesentium reprehenderit quidem atque dolores.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='proyecto-cont'>
                            <div className="proyecto-overlay">
                            <h3 className="blanco nombre-proceso-ind">Nombre del Proyecto</h3>
                            <p className="blanco descripcion-proceso-ind">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusantium ullam reiciendis possimus voluptas architecto praesentium reprehenderit quidem atque dolores.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='proyecto-cont'>
                            <div className="proyecto-overlay">
                            <h3 className="blanco nombre-proceso-ind">Nombre del Proyecto</h3>
                            <p className="blanco descripcion-proceso-ind">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusantium ullam reiciendis possimus voluptas architecto praesentium reprehenderit quidem atque dolores.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Animated>
              :null}

            {voluntariadoActive === "Híbrido" ? 
                <Animated animateOnMount={true} animationIn="fadeInDown" isVisible={swiperVisibility} animationOut="slideOutUp" animationInDuration={600} animationOutDuration={600} className="swiper-proyectos">
                    <Swiper 
                    onSwiper={setSwiperRef} 
                    slidesPerView={5} 
                    centeredSlides={true}
                    loop={true}
                    spaceBetween={30} 
                    pagination={{"type": "custom" }} 
                    navigation={true} 
                    className="swiper-proyectos">
                    
                        <SwiperSlide className='proyecto-cont'> 
                        <Link to='/proyecto'>
                            <div className="proyecto-overlay">
                            <h3 className="blanco nombre-proceso-ind">Nombre del Proyecto</h3>
                            <p className="blanco descripcion-proceso-ind">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusantium ullam reiciendis possimus voluptas architecto praesentium reprehenderit quidem atque dolores.</p>
                            </div> 
                        </Link>
                        </SwiperSlide>
                    
                    
                        <SwiperSlide className='proyecto-cont'>
                            <div className="proyecto-overlay">
                            <h3 className="blanco nombre-proceso-ind">Nombre del Proyecto</h3>
                            <p className="blanco descripcion-proceso-ind">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusantium ullam reiciendis possimus voluptas architecto praesentium reprehenderit quidem atque dolores.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='proyecto-cont'>
                            <div className="proyecto-overlay">
                            <h3 className="blanco nombre-proceso-ind">Nombre del Proyecto</h3>
                            <p className="blanco descripcion-proceso-ind">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusantium ullam reiciendis possimus voluptas architecto praesentium reprehenderit quidem atque dolores.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='proyecto-cont'>
                            <div className="proyecto-overlay">
                            <h3 className="blanco nombre-proceso-ind">Nombre del Proyecto</h3>
                            <p className="blanco descripcion-proceso-ind">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusantium ullam reiciendis possimus voluptas architecto praesentium reprehenderit quidem atque dolores.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Animated>
            :null}
            {voluntariadoActive === "Remoto" ? 
                <Animated animateOnMount={true} animationIn="fadeInDown" isVisible={swiperVisibility} animationOut="slideOutUp" animationInDuration={600} animationOutDuration={600} className="swiper-proyectos">
                    <Swiper 
                    onSwiper={setSwiperRef} 
                    slidesPerView={5} 
                    centeredSlides={true}
                    loop={true}
                    spaceBetween={30} 
                    pagination={{"type": "custom" }} 
                    navigation={true} 
                    className="swiper-proyectos">
                    
                        <SwiperSlide className='proyecto-cont'> 
                        <Link to='/proyecto'>
                            <div className="proyecto-overlay">
                            <h3 className="blanco nombre-proceso-ind">Nombre del Proyecto</h3>
                            <p className="blanco descripcion-proceso-ind">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusantium ullam reiciendis possimus voluptas architecto praesentium reprehenderit quidem atque dolores.</p>
                            </div> 
                        </Link>
                        </SwiperSlide>
                    
                    
                        <SwiperSlide className='proyecto-cont'>
                            <div className="proyecto-overlay">
                            <h3 className="blanco nombre-proceso-ind">Nombre del Proyecto</h3>
                            <p className="blanco descripcion-proceso-ind">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusantium ullam reiciendis possimus voluptas architecto praesentium reprehenderit quidem atque dolores.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='proyecto-cont'>
                            <div className="proyecto-overlay">
                            <h3 className="blanco nombre-proceso-ind">Nombre del Proyecto</h3>
                            <p className="blanco descripcion-proceso-ind">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusantium ullam reiciendis possimus voluptas architecto praesentium reprehenderit quidem atque dolores.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='proyecto-cont'>
                            <div className="proyecto-overlay">
                            <h3 className="blanco nombre-proceso-ind">Nombre del Proyecto</h3>
                            <p className="blanco descripcion-proceso-ind">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi accusantium ullam reiciendis possimus voluptas architecto praesentium reprehenderit quidem atque dolores.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Animated>
            :null}
        </section>
        <section className="cta-voluntariado">
            <AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate__fadeOut'>
                <h2 className="negro">Anímate a aprender y hacer un cambio en la sociedad</h2>
            </AnimationOnScroll>
            
            <AnimationOnScroll animateIn="animate__heartBeat" animateOut='animate__fadeOutUp' delay={2}>
                    <Link to='/registro-voluntariado'><button className="btn-cta-voluntariado"><p className="cta-voluntariado-t1">Aplica aquí</p><p className="cta-voluntariado-t2">Sé parte de Rhesident Org</p></button></Link>
            </AnimationOnScroll>
            
        </section>

        <section className="video-voluntariado">
            <h2 className="negro">¿Te imaginas cómo sería ser parte de Rhesident Org?</h2>
            <h4 className='descripcion-seccion'>¡Da clic a este video y descúbrelo!</h4>
            <iframe
            className='yt-iframe'
            src={`https://www.youtube.com/embed/${videoURL}`}
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
