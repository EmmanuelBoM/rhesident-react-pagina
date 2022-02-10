import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import '../styles/base.css'
import '../styles/LandingPage.css'
import '../styles/Talleres.css'
import downArrow from '../assets/down_arrow_light.svg'
import Taller from '../components/Taller';
import ModalTaller from '../components/ModalTaller';

import {Animated} from "react-animated-css";
import "animate.css/animate.min.css";

//Firebase imports
import {db} from '../firebaseConfig'
import {query, collection, getDocs,where, doc, getDoc} from "@firebase/firestore";
import { Helmet } from 'react-helmet';

function Talleres() {
    const [modalVisibility, setModalVisibility] = useState(false)
    const [talleresAbiertos, setTalleresAbiertos]= useState([])
    const [talleresProximos, setTalleresProximos]= useState([])
    const [taller, setTaller]= useState({})
    const [portadaTalleres, setPortadaTalleres] = useState('')

    const portadaRef = doc(db, "recursosGenerales", "fQoDFrUMsc7yKR6cfbh7");
    const talleresCollectionRef = collection(db, "talleres")
    const q_abiertos = query(talleresCollectionRef, where("visible", "==",true), where("estatus", "==", "Abierto"));
    const q_proximos = query(talleresCollectionRef, where("visible", "==",true), where("estatus", "==", "Próximo"));

    useEffect (()=>{
        const getTalleresAbiertos= async () => {
          const data = await getDocs(q_abiertos);
          setTalleresAbiertos (data.docs.map(((doc)=>({...doc.data(), id:doc.id}))))
        }

        const getTalleresProximos= async () => {
            const data = await getDocs(q_proximos);
            setTalleresProximos (data.docs.map(((doc)=>({...doc.data(), id:doc.id}))))
        }

        const getPortada = async () => {
            const portadaDoc = await getDoc(portadaRef);
            setPortadaTalleres(portadaDoc.data().url);
          };

        getPortada();
        getTalleresAbiertos();
        getTalleresProximos();

      }, [])

      const portadaImg = {
        backgroundImage: `url(${portadaTalleres})`,
      };
    return(
        <main>
            <Helmet>
                <title>Talleres | Rhesident</title>
            </Helmet>
            <NavHeader textColor='blanco'></NavHeader>
            <section className="hero-talleres" style={portadaImg}>
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
                <h2 className="verde" id='abiertos'>Talleres abiertos</h2>
                <div className="talleres-activos">
                    {talleresAbiertos.map((tallerInd)=>{
                        return(
                            <Taller taller={tallerInd} setTaller={setTaller} setModalVisibility={setModalVisibility}></Taller>
                        )
                    })}
                </div>
                <h2 className="verde" id='proximos'>Próximos Talleres</h2>
                <div className="talleres-proximos">
                    {talleresProximos.map((tallerInd)=>{
                        return(
                            <Taller taller={tallerInd} setTaller={setTaller} setModalVisibility={setModalVisibility}></Taller>
                        )
                    })}
                   
                </div>
                
            </section>
            <Animated animateOnMount={false} animationIn="fadeIn" animationOut="fadeOut" isVisible={modalVisibility} animationInDuration={500} animationOutDuration={500} className="overlay-top">
                {modalVisibility ? <ModalTaller taller ={taller} setModalVisibility={setModalVisibility} modalVisibility={modalVisibility}></ModalTaller> : null}
            </Animated>
            <Footer></Footer> 
        </main>
    );
}

export default Talleres;
