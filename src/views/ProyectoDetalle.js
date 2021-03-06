import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import NavHeader from '../components/NavHeader'
import '../styles/base.css'
import '../styles/LandingPage.css'
import '../styles/ProyectoDetalle.css'
import downArrow from '../assets/down_arrow.svg'

// Firebase Imports
import {db} from '../firebaseConfig'
import {doc, getDoc} from "@firebase/firestore";


// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-cards"
import SwiperCore, {EffectCards } from 'swiper';
import ModalResponsive from '../components/ModalResponsive'


// install Swiper modules
SwiperCore.use([EffectCards]);




function ProyectoDetalle() {
    const [proyecto, setProyecto] = useState({})
    const [ejesAccion, setEjesAccion] = useState([])
    const [objetivos, setObjetivos] = useState([])
    const [etiquetas, setEtiquetas] = useState([])
    const [galeria, setGaleria] = useState([])
    const [imgGaleria, setImgGaleria] = useState([])
    const [modalVisibility, setModalVisibility] = useState(false)
    let params = useParams();


    const proyectoRef = doc(db, "proyectos", params.id)
    useEffect (()=>{
        const getProyecto = async () => {
            const proyectoDoc = await getDoc(proyectoRef);
            setProyecto(proyectoDoc.data())
            setEjesAccion(proyectoDoc.data().ejesAccion)
            setObjetivos(proyectoDoc.data().objetivos)
            setEtiquetas(proyectoDoc.data().etiquetas)
            setGaleria(proyectoDoc.data().imgGaleria)
        }
    
        getProyecto();
      }, []);
    
    function handleGaleriaClick(){
        setModalVisibility(true)
    }
    
    return (
        <main>
            <NavHeader textColor='negro'></NavHeader>
            <section className="header-proyecto">
                
            </section>
            <section className="detalles-principal">
                <div className="img-principal-cont">
                    <svg width="584" className='img-principal-svg' height="528" viewBox="0 0 584 528" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id='imgProyecto' patternUnits='userSpaceOnUse' x="0" y="0" width="100%" height="100%" className='pt-proyecto-detalle'>
                                <image href={proyecto.imgPrincipalURL} className='img-principal-proyecto' />             
                            </pattern>
                        </defs>
                        <path d="M253.501 20.802C186.61 -11.8684 107.288 -5.90641 46.7134 37.631C4.82174 67.7202 -20.9932 109.294 22.5501 161.149C120.008 277.202 128.481 569.476 319.165 522.198C509.849 474.921 577.637 582.377 581.878 431.936C586.12 281.495 590.362 225.62 526.795 182.636C463.228 139.651 420.859 83.7764 361.539 66.5826C333.729 58.5276 291.028 39.1336 253.501 20.802Z" fill="url(#imgProyecto)"/>
                    </svg>
                </div>
                <div className="info-principal">
                    <h2 className="nombre-proyecto negro">{proyecto.nombre}</h2>
                    <div className="categorias-proyecto">
                        {ejesAccion.map((eje)=>{
                            return(
                                <div className="categoria"><p>{eje}</p> </div>
                            )
                            
                        })}
                    </div>
                    
                    <div className="descripcion-proyecto procesos-texto negro">{proyecto.descripcionGeneral}</div>
                    
                    <div className="categorias-proyecto">
                        {
                            etiquetas.map((etiqueta)=>{
                                return(
                                    <p className="etiqueta verde">{etiqueta}</p>
                                )
                            })
                        }
                    </div>
                </div>

                

            </section>

            <section className="detalles-secundario">
                <h3 className="estatus-proyecto">Estatus del proyecto</h3>
                {proyecto.estatus === 'Activo' ? <div className="tag-estatus e-activo"> <p>{proyecto.estatus}</p> </div> : null}
                {proyecto.estatus === 'Terminado' ? <div className="tag-estatus e-pasado"> <p>{proyecto.estatus}</p> </div> : null}
                {proyecto.estatus === 'Pr??ximo' ? <div className="tag-estatus e-proximo"> <p>{proyecto.estatus}</p> </div> : null}
                <div className="cont-botones-proyecto">
                    {proyecto.URLExterno  !== "N/A" ? <a href={proyecto.URLExterno}><button className="btn-proyecto-externo"> <span className="bold">Ingresa</span> a la p??gina del proyecto</button></a> : null}
                    {proyecto.estatus ==='Activo' ?<Link to='/registro-voluntariado'><button className="btn-colabora">Colabora aqu??</button></Link>  :null}
                </div>
                
                <div className="scrolldown-cont">
                    <img src={downArrow} alt="" className="scroll-down-link scroll-down-arrow" />
                </div>

                <div className="cont-proposito">
                    <h2 className="negro h-proyecto">Prop??sito</h2>
                    <p className="negro">{proyecto.proposito}</p>
                </div>
                <div className="cont-detalles-sec">
                    <div className="objetivos">
                        <h2 className="negro h-proyecto">Objetivos</h2>
                        <ul className='lista-objetivos'>
                            {
                                objetivos.map((objetivo)=>{
                                    return(
                                        <li className='objetivo-ind'>
                                            <svg width="50" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.8186 0.988388L17.8972 1.05363C19.4519 2.33151 19.7802 4.56495 18.6643 6.2295C18.4359 6.57054 18.2026 6.89958 17.9742 7.19509C16.7919 8.72231 8.01645 24.084 5.68773 19.193C3.35901 14.3021 -0.130232 5.64051 0.594149 4.61172C1.31853 3.58294 3.11767 1.76704 4.79903 2.0168C5.45896 2.11483 6.40144 2.48811 7.3032 2.90569C8.94023 3.66363 10.8851 3.21334 12.0175 1.82145L12.2478 1.53829C13.624 -0.151081 16.1285 -0.398531 17.8186 0.988388Z" fill="#164453"/>
                                            </svg>
                                            <p>{objetivo}</p>
                                        </li>
                                    )
                                    
                                })
                            }
                            
                        </ul>
                    </div>
                    <div className="procesos">
                        <h2 className="negro h-proyecto">Procesos</h2>
                        <div className='negro procesos-texto'>{proyecto.procesos}</div>
                    </div>
                </div>
            </section>
            <div className="scrolldown-cont">
                    <img src={downArrow} alt="" className="scroll-down-link scroll-down-arrow" />
            </div>
            <section className="galeria-proyecto">
                <h2 className="negro h-proyecto">Galer??a</h2>
                <Swiper 
                effect={'cards'} 
                className="swiper-galeria-proyecto"
                grabCursor={true}
                navigation={true}
                modules={[EffectCards]}>
                    {
                        galeria.map((img, i)=>{
                            const proyectoImgGaleria = {
                                backgroundImage: `url(${img})`
                                }
                            return(
                                <div >
                                    <SwiperSlide style={proyectoImgGaleria} className='slide-proyecto' tag='div'></SwiperSlide>
                                </div>
                                
                                )
                        })  
                    }
                </Swiper>
            </section>
            {modalVisibility?<ModalResponsive imgGaleria={imgGaleria}></ModalResponsive>:null}
            <Footer></Footer>
           
        </main>
    )
}

export default ProyectoDetalle
