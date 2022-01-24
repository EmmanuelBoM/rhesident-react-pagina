import React from 'react'
import Footer from '../components/Footer'
import NavHeader from '../components/NavHeader'
import '../styles/base.css'
import '../styles/LandingPage.css'
import '../styles/ProyectoDetalle.css'
import proyecto from '../assets/cultura.png'

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-cards"
import SwiperCore, { Pagination,Navigation, EffectCards } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCards]);

function ProyectoDetalle() {
    return (
        <main>
            <NavHeader textColor='negro'></NavHeader>
            <section className="header-proyecto">
                
            </section>
            <section className="detalles-principal">
                <div className="info-principal">
                    <h2 className="nombre-proyecto negro">Nombre del Proyecto</h2>
                    <div className="categorias-proyecto">
                        <div className="categoria"><p>Urbanismo</p> </div>
                        <div className="categoria"><p>Arte</p> </div>
                        <div className="categoria"><p>Sustentabilidad</p> </div>
                    </div>
                    <p className="descripcion-proyecto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus sit, quam quod iste excepturi commodi corrupti minus, magni omnis magnam earum ratione voluptate. Esse, voluptates. Asperiores dolores voluptatibus dolore! Quaerat id ab qui quia voluptatem amet dolore ducimus officia.</p>
                    <h3 className="estatus-proyecto verde">Estatus del proyecto</h3>
                    <div className="tag-estatus"> <p>Activo</p> </div>
                    <button className="btn-colabora">Colabora aquí</button>
                </div>
                <div className="img-principal-cont">
                    <svg width="484" height="428" viewBox="0 0 584 528" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id='imgProyecto' patternUnits='userSpaceOnUse' x="0" y="0" width="548" height="528">
                                <image href={proyecto} width="800" height="528" />             
                            </pattern>
                        </defs>
                        <path d="M253.501 20.802C186.61 -11.8684 107.288 -5.90641 46.7134 37.631C4.82174 67.7202 -20.9932 109.294 22.5501 161.149C120.008 277.202 128.481 569.476 319.165 522.198C509.849 474.921 577.637 582.377 581.878 431.936C586.12 281.495 590.362 225.62 526.795 182.636C463.228 139.651 420.859 83.7764 361.539 66.5826C333.729 58.5276 291.028 39.1336 253.501 20.802Z" fill="url(#imgProyecto)"/>
                    </svg>
                </div>
            </section>
            <section className="detalles-secundario">
                <div className="cont-proposito">
                    <h2 className="negro h-proyecto">Propósito</h2>
                    <p className="negro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestias vero minus perferendis ipsam suscipit dignissimos impedit tempore veniam id eligendi iusto quasi tenetur illo nam animi ipsa rerum, facilis error praesentium reiciendis eveniet. Explicabo vero in dignissimos saepe cum.</p>
                </div>
                <div className="cont-detalles-sec">
                    <div className="objetivos">
                        <h2 className="negro h-proyecto">Objetivos</h2>
                        <ul className='lista-objetivos'>
                            <li className='objetivo-ind'>
                                <svg width="50" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8186 0.988388L17.8972 1.05363C19.4519 2.33151 19.7802 4.56495 18.6643 6.2295C18.4359 6.57054 18.2026 6.89958 17.9742 7.19509C16.7919 8.72231 8.01645 24.084 5.68773 19.193C3.35901 14.3021 -0.130232 5.64051 0.594149 4.61172C1.31853 3.58294 3.11767 1.76704 4.79903 2.0168C5.45896 2.11483 6.40144 2.48811 7.3032 2.90569C8.94023 3.66363 10.8851 3.21334 12.0175 1.82145L12.2478 1.53829C13.624 -0.151081 16.1285 -0.398531 17.8186 0.988388Z" fill="#164453"/>
                                </svg>
                                <p> Objetivo 1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptatum ipsum et, assumenda odit quos.</p>
                            </li>
                            <li className='objetivo-ind'>
                                <svg width="50" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8186 0.988388L17.8972 1.05363C19.4519 2.33151 19.7802 4.56495 18.6643 6.2295C18.4359 6.57054 18.2026 6.89958 17.9742 7.19509C16.7919 8.72231 8.01645 24.084 5.68773 19.193C3.35901 14.3021 -0.130232 5.64051 0.594149 4.61172C1.31853 3.58294 3.11767 1.76704 4.79903 2.0168C5.45896 2.11483 6.40144 2.48811 7.3032 2.90569C8.94023 3.66363 10.8851 3.21334 12.0175 1.82145L12.2478 1.53829C13.624 -0.151081 16.1285 -0.398531 17.8186 0.988388Z" fill="#164453"/>
                                </svg>
                                <p> Objetivo 2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptatum ipsum et, assumenda odit quos.</p>
                            </li>
                            <li className='objetivo-ind'>
                                <svg width="50" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8186 0.988388L17.8972 1.05363C19.4519 2.33151 19.7802 4.56495 18.6643 6.2295C18.4359 6.57054 18.2026 6.89958 17.9742 7.19509C16.7919 8.72231 8.01645 24.084 5.68773 19.193C3.35901 14.3021 -0.130232 5.64051 0.594149 4.61172C1.31853 3.58294 3.11767 1.76704 4.79903 2.0168C5.45896 2.11483 6.40144 2.48811 7.3032 2.90569C8.94023 3.66363 10.8851 3.21334 12.0175 1.82145L12.2478 1.53829C13.624 -0.151081 16.1285 -0.398531 17.8186 0.988388Z" fill="#164453"/>
                                </svg>
                                <p> Objetivo 3: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptatum ipsum et, assumenda odit quos.</p>
                            </li>
                            <li className='objetivo-ind'>
                                <svg width="50" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8186 0.988388L17.8972 1.05363C19.4519 2.33151 19.7802 4.56495 18.6643 6.2295C18.4359 6.57054 18.2026 6.89958 17.9742 7.19509C16.7919 8.72231 8.01645 24.084 5.68773 19.193C3.35901 14.3021 -0.130232 5.64051 0.594149 4.61172C1.31853 3.58294 3.11767 1.76704 4.79903 2.0168C5.45896 2.11483 6.40144 2.48811 7.3032 2.90569C8.94023 3.66363 10.8851 3.21334 12.0175 1.82145L12.2478 1.53829C13.624 -0.151081 16.1285 -0.398531 17.8186 0.988388Z" fill="#164453"/>
                                </svg>
                                <p> Objetivo 4: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptatum ipsum et, assumenda odit quos.</p>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="procesos">
                        <h2 className="negro h-proyecto">Procesos</h2>
                        <p className='negro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corporis minima molestias amet ipsum non repellat dolore ipsa eum magni doloribus dolorum id nesciunt enim, laboriosam sapiente. <br/> Quae eligendi, numquam ratione itaque natus dolorem inventore eveniet tenetur blanditiis voluptate earum accusamus deserunt nemo expedita quas impedit enim. Facilis velit eveniet ipsum asperiores quia placeat debitis hic, officiis necessitatibus eligendi nihil magnam, iste incidunt atque nostrum veniam qui consequuntur et repellat aliquam laudantium temporibus obcaecati ullam totam. Architecto dolore modi officiis aspernatur numquam corrupti maxime. Dolorem facilis iusto temporibus eius nulla numquam ducimus quos dolore recusandae eligendi voluptates ipsam omnis asperiores, similique quod maxime!<br/><br/> Libero nemo incidunt sit repellat error dignissimos culpa distinctio consequuntur itaque. Molestias ducimus numquam dicta quidem odio. Quas, cum quo. Nesciunt dolorum corrupti, quo eligendi quaerat aliquam accusantium labore adipisci sed maiores? Quae magni ratione inventore nisi, obcaecati ad quia unde labore aspernatur adipisci beatae eaque iusto perferendis ut sed autem nobis est natus facere fugiat laudantium numquam suscipit qui. Atque nam ratione officiis cum eaque esse iste laborum, quo reiciendis impedit</p>
                    </div>
                </div>
            </section>
            <section className="galeria-proyecto">
                <Swiper effect={'cards'} 
                grabCursor={true} 
                className="swiper-galeria-proyecto" 
                pagination={{"type": "custom" }} 
                navigation={true}
                spaceBetween={20}  >
                    <SwiperSlide className='slide-proyecto'>Slide 1</SwiperSlide>
                    <SwiperSlide className='slide-proyecto'>Slide 2</SwiperSlide>
                    <SwiperSlide className='slide-proyecto'>Slide 3</SwiperSlide>
                    <SwiperSlide className='slide-proyecto'>Slide 4</SwiperSlide>
                    <SwiperSlide className='slide-proyecto'>Slide 5</SwiperSlide>
                    <SwiperSlide className='slide-proyecto'>Slide 6</SwiperSlide>
                    <SwiperSlide className='slide-proyecto'>Slide 7</SwiperSlide>
                    <SwiperSlide className='slide-proyecto'>Slide 8</SwiperSlide>
                    <SwiperSlide className='slide-proyecto'>Slide 9</SwiperSlide>
                </Swiper>
            </section>
            <Footer></Footer>
        </main>
    )
}

export default ProyectoDetalle
