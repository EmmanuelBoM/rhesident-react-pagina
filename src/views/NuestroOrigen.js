import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import NavHeader from '../components/NavHeader'
import OverlayInvitacion from '../components/OverlayInvitacion'
import NavMovil from '../components/NavMovil'

import '../styles/base.css'
import '../styles/LandingPage.css'
import '../styles/NuestroOrigen.css'
import downArrow from '../assets/down_arrow_light.svg'
import gifFilosofia from '../assets/nuestra_filosofia.GIF'
import gifMarca from '../assets/nuestra_marca.GIF'
import gifHistoria from '../assets/nuestra_historia.GIF'
import {Animated} from "react-animated-css";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

// Firebase Imports
import {db} from '../firebaseConfig'
import {getDoc, doc} from "@firebase/firestore";
import { Helmet } from 'react-helmet'

function NuestroOrigen() {

    const [overlayVisibility, setOverlayVisibility] = useState(false)
    const [portadaOrigen, setPortadaOrigen] = useState('')
    const [navMovilVisibility, setNavMovilVisibility] = useState(false)

    const portadaRef = doc(db, "recursosGenerales", "xAt58eGwLARlU7bnoerV")
    useEffect (()=>{
        const getPortada = async () => {
          const portadaDoc = await getDoc(portadaRef);
          setPortadaOrigen(portadaDoc.data().url)
        }
    
        getPortada();
      }, []);
    
    const portadaImg = {
        backgroundImage: `url(${portadaOrigen})`
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
        {navMovilVisibility ? (
          <NavMovil setNavMovilVisibility={setNavMovilVisibility}></NavMovil>
        ) : null}

        <Helmet>
          <title>Nuestro Origen | Rhesident</title>
        </Helmet>

        <NavHeader
          textColor="blanco"
          setNavMovilVisibility={setNavMovilVisibility}
        ></NavHeader>

        <Animated
          animateOnMount={false}
          animationIn="fadeInDown"
          animationOut="fadeOutUp"
          isVisible={overlayVisibility}
          animationInDuration={500}
          animationOutDuration={500}
          className="overlay-top"
        >
          {overlayVisibility ? (
            <OverlayInvitacion
              overlayVisibility={overlayVisibility}
            ></OverlayInvitacion>
          ) : null}
        </Animated>

        <section className="hero-origen" style={portadaImg}>
          <div className="color-overlay">
            <h1 className="titulo-hero blanco">Nuestro Origen</h1>
            <p className="origen-descripcion blanco descripcion-hero">
              Rhesident Org es rizoma, es semilla, es un ser vivo, una
              multiplicidad; es acci??n y emoci??n, es integraci??n y es
              vulnerabilidad. Es la fuerza conectora que nutre nuestro
              ecosistema, para resignificar la manera en la que construimos
              comunidad.
            </p>
            <div className="scrolldown-cont">
              <img
                src={downArrow}
                alt=""
                className="scroll-down-link scroll-down-arrow"
              />
            </div>
          </div>
        </section>

        <section className="elementos-origen" id="filosofia">
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="fadeOutLeft"
            duration={2.3}
          >
            <div className="nuestra-filosofia">
              <div className="cont-origen">
                <h2 className="titulo-origen negro">Nuestra filosof??a</h2>
                <figure className="cont-gif-sec">
                  <img src={gifFilosofia} alt="" className="gif-origen" />
                </figure>
                <p className="verde">
                  Las bases de nuestra filosof??a, residen en la teor??a
                  filos??fica del Rizoma (Rhizome), escrita por Gilles Deleuze y
                  Felix Guattari. El rizoma es entendido como una multiplicidad
                  no homog??nea, una resistencia contra el modelo jer??rquico; un
                  conector, un espacio abierto de posibilidades. Para nuestra
                  organizaci??n, una comunidad se comporta como un rizoma, ya que
                  busca desterritorializar las formas preestablecidas, para
                  encontrar una nueva direcci??n y maneras de creaci??n. Esta
                  filosof??a, nos permite redescubrir las potencialidades
                  individuales y colectivas, para construir nuevas conexiones
                  comunitarias.
                </p>
              </div>

              <figure className="cont-gif">
                <img src={gifFilosofia} alt="" className="gif-origen" />
              </figure>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeInRight"
            animateOut="fadeOutRight"
            duration={2.3}
          >
            <div className="nuestra-marca" id="marca">
              <figure className="cont-gif">
                <img src={gifMarca} alt="" className="gif-origen" />
              </figure>

              <div className="cont-origen">
                <h2 className="titulo-origen negro">Nuestra marca</h2>
                <figure className="cont-gif-sec">
                  <img src={gifMarca} alt="" className="gif-origen" />
                </figure>
                <p className="verde">
                  Rhesident Org, es una marca que busca concientizar a las
                  personas acerca del lugar que ocupan en el mundo,
                  convirti??ndolas en seres corresponsables del entorno. La
                  transformaci??n comienza desde un pensamiento, una conexi??n, un
                  sentimiento o incluso una idea. Es una iniciativa comunitaria,
                  la cual ofrece servicios de regeneraci??n, interacci??n, empat??a
                  e identidad. Nos hemos enfocado en crear procesos rizom??ticos,
                  din??micos, locales pero con enfoque global; mismos que
                  permitan reconocernos como parte de un todo, de forma arm??nica
                  y equilibrada.{" "}
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="fadeOutLeft"
            duration={2.3}
          >
            <div className="nuestra-historia" id="historia">
              <div className="cont-origen">
                <h2 className="titulo-origen negro">Nuestra historia</h2>
                <figure className="cont-gif-sec">
                  <img src={gifHistoria} alt="" className="gif-origen" />
                </figure>
                <p className="verde">
                  Rhesident Org tuvo sus or??genes en el sureste asi??tico, naci??
                  un 2 de marzo de 2018 en Tailandia. Eran las piezas de un
                  rompecabezas conformado por la consciencia sobre nuestros
                  hechos, por el urbanismo, por la localidad, por lo comunitario
                  y por la idea de una organizaci??n no jer??rquica ni hegem??nica.
                  Fue as?? que lleg?? a nuestro radar, el modelo Teal para
                  reinventar organizaciones. Un modelo belga, el cual promueve
                  acciones enfocadas a un prop??sito, desde redes colaborativas;
                  mismas que buscan empoderamiento, experimentaci??n y
                  transparencia.
                </p>
              </div>

              <figure className="cont-gif">
                <img src={gifHistoria} alt="" className="gif-origen" />
              </figure>
            </div>
          </ScrollAnimation>
        </section>

        <Footer></Footer>
      </main>
    );
}

export default NuestroOrigen
