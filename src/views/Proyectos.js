import React, {useState} from 'react'
import Footer from '../components/Footer'
import NavHeader from '../components/NavHeader'
import OverlayInvitacion from '../components/OverlayInvitacion'

import '../styles/base.css'
import '../styles/LandingPage.css'
import '../styles/Proyectos.css'
import downArrow from '../assets/down_arrow_light.svg'
import Proyecto from '../components/Proyecto'
import { Link } from 'react-router-dom';

import {Animated} from "react-animated-css";
import "animate.css/animate.min.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, { Pagination,Navigation } from 'swiper';


// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

function Proyectos() {

  const [swiperRef, setSwiperRef] = useState(null);

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
        <section className="hero-proyectos">
          <div className="color-overlay">
            <h1 className="titulo-hero blanco">Proyectos</h1>
            <p className="origen-descripcion blanco descripcion-hero">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, quia praesentium iste explicabo ad ipsum ex eius neque,
              dolor error commodi accusamus.
            </p>
            <div className="btns-secciones">
              <button className="btn-seccion" onClick={() => window.location.replace("/proyectos#cultura")}>Cultura</button>
              <button className="btn-seccion" onClick={() => window.location.replace("/proyectos#arte")}>Arte</button>
              <button className="btn-seccion" onClick={() => window.location.replace("/proyectos#urbanismo")}>Urbanismo</button>
              <button className="btn-seccion" onClick={() => window.location.replace("/proyectos#sustentabilidad")}>Sustentabilidad</button>
            </div>
            <div className="scrolldown-cont">
              <img
                src={downArrow}
                alt=""
                className="scroll-down-link scroll-down-arrow"
              />
            </div>
          </div>
        </section>
        
        <section className="proceso">
          <div className="cultura" id="cultura">
            <div className="dark-overlay">
                <h2 className="blanco">Cultura</h2>
                <div className="scrolldown-cont">
                  <img src={downArrow} alt="" className="scroll-down-link scroll-down-arrow"/>
                </div>
                <p className="blanco descripcion-proceso">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos nesciunt nemo dignissimos totam eveniet tempora consequuntur esse veniam amet?</p>
            </div>
          </div>
          <div className="proyectos-galeria">
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
          </div>
        </section>

        <section className="proceso">
          <div className="arte" id="arte">
            <div className="dark-overlay">
                <h2 className="blanco">Arte</h2>
                <div className="scrolldown-cont">
                  <img src={downArrow} alt="" className="scroll-down-link scroll-down-arrow"/>
                </div>
                <p className="blanco descripcion-proceso">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos nesciunt nemo dignissimos totam eveniet tempora consequuntur esse veniam amet?</p>
            </div>
          </div>
          <div className="proyectos-galeria">
            <Swiper 
              onSwiper={setSwiperRef} 
              slidesPerView={5} 
              centeredSlides={true}
              loop={true}
              spaceBetween={40} 
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
          </div>
        </section>

        <section className="proceso">
          <div className="urbanismo" id="urbanismo">
            <div className="dark-overlay">
                <h2 className="blanco">Urbanismo</h2>
                <div className="scrolldown-cont">
                  <img src={downArrow} alt="" className="scroll-down-link scroll-down-arrow"/>
                </div>
                <p className="blanco descripcion-proceso">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos nesciunt nemo dignissimos totam eveniet tempora consequuntur esse veniam amet?</p>
            </div>
            
          </div>
          <div className="proyectos-galeria">
            <Swiper 
              onSwiper={setSwiperRef} 
              slidesPerView={5} 
              centeredSlides={true}
              loop={true}
              spaceBetween={40} 
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
          </div>
        </section>

        <section className="proceso">
          <div className="sustentabilidad" id="sustentabilidad">
            <div className="dark-overlay">
            <h2 className="blanco">Sustentabilidad</h2>
                <div className="scrolldown-cont">
                  <img src={downArrow} alt="" className="scroll-down-link scroll-down-arrow"/>
                </div>
                <p className="blanco descripcion-proceso">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos nesciunt nemo dignissimos totam eveniet tempora consequuntur esse veniam amet?</p>
            </div>
          </div>
          <div className="proyectos-galeria">
            <Swiper 
              onSwiper={setSwiperRef} 
              slidesPerView={5} 
              centeredSlides={true}
              loop={true}
              spaceBetween={40} 
              pagination={{"type": "custom" }} 
              navigation={true} 
              className="mySwiper">
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
          </div>
        </section>
        
        

        
        <Footer></Footer>
      </main>
    );
}

export default Proyectos
