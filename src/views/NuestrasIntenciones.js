import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import NavHeader from "../components/NavHeader";
import OverlayInvitacion from "../components/OverlayInvitacion";
import NavMovil from "../components/NavMovil";

import "../styles/base.css";
import "../styles/LandingPage.css";
import "../styles/NuestrasIntenciones.css";
import "animate.css/animate.min.css";

import downArrow from "../assets/down_arrow_light.svg";
import { Helmet } from "react-helmet";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Animated } from "react-animated-css";
import "animate.css/animate.min.css";

import { Link } from "react-router-dom";

// Firebase Imports
import { db } from "../firebaseConfig";
import { getDoc, doc } from "@firebase/firestore";



function NuestrasIntenciones() {
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const [portadaIntenciones, setPortadaIntenciones] = useState("");
  const [navMovilVisibility, setNavMovilVisibility] = useState(false)
  const portadaRef = doc(db, "recursosGenerales", "JdU7qvSU98pHcPSt59e4");
  useEffect(() => {
    const getPortada = async () => {
      const portadaDoc = await getDoc(portadaRef);
      setPortadaIntenciones(portadaDoc.data().url);
    };

    getPortada();
  }, []);

  const portadaImg = {
    backgroundImage: `url(${portadaIntenciones})`,
  };

  function showOverlay() {
    if (window.scrollY >= 80) {
      setOverlayVisibility(true);
    } else {
      setOverlayVisibility(false);
    }
  }

  window.addEventListener("scroll", showOverlay);

  return (
    <main>
      <Helmet>
        <title>Nuestras Intenciones | Rhesident</title>
      </Helmet>
      
      {navMovilVisibility ? (
        <NavMovil setNavMovilVisibility={setNavMovilVisibility}></NavMovil>
      ) : null}

      <NavHeader textColor="blanco" setNavMovilVisibility={setNavMovilVisibility}></NavHeader>
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
      <section className="hero-intenciones" style={portadaImg}>
        <div className="color-overlay">
          <h1 className="titulo-hero blanco">Nuestras intenciones</h1>
          <p className="intenciones-descripcion blanco descripcion-hero">
            Queremos generar situaciones que nos inviten a responsabilizarnos e
            intervenir para crear entornos inclusivos, transformando la forma en
            la que nos vinculamos individual y colectivamente con el entorno que
            nos rodea.
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
      <section className="intenciones-detalle">
        <div className="intencion-cont intencion-verde">
          <div className="inclusion-img"></div>
          <div className="intencion-texto">
            <p className="intencion-descripcion int-hide blanco">
              Generar conexiones que permitan nombrar y reconocer la diversidad
              dentro de una comunidad.
            </p>
            <h2 className="intencion-titulo blanco">Inclusión</h2>
            <p className="intencion-descripcion-sec blanco">
              Generar conexiones que permitan nombrar y reconocer la diversidad
              dentro de una comunidad.
            </p>
          </div>
        </div>

        <div className="intencion-cont">
          <div className="intencion-texto">
            <h2 className="intencion-titulo verde">Cohesión Social</h2>
            <p className="intencion-descripcion verde">
              Decodificar limitaciones que impiden la constante transformación
              individual y colectiva.
            </p>
          </div>
          <div className="cohesion-img"></div>
        </div>

        <div className="intencion-cont intencion-verde">
          <div className="comunidad-img"></div>
          <div className="intencion-texto">
            <p className="intencion-descripcion int-hide blanco">
              Crear nuevas posibilidades para reconstruir la organización,
              significado e identidad comunitaria.
            </p>
            <h2 className="intencion-titulo blanco">Sentido <br /> de comunidad</h2>
            <p className="intencion-descripcion-sec blanco">
              Crear nuevas posibilidades para reconstruir la organización,
              significado e identidad comunitaria.
            </p>
          </div>
        </div>

        <div className="intencion-cont">
          <div className="intencion-texto">
            <h3 className="intencion-titulo verde">
              Participación e <br /> involucramiento social
            </h3>
            <p className="intencion-descripcion verde">
              Determinar la naturaleza y vocación de cada comunidad con
              ciudadanos activos y partícipes.
            </p>
          </div>
          <div className="participacion-img"></div>
        </div>
      </section>

      <section className="proposito-evolutivo" id="propositoEvolutivo">
        <div className="color-overlay">
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOutUp"
            offset={190}
          >
            <h2 className="blanco">Nuestro propósito evolutivo</h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            className="descripcion-hero"
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOutUp"
            offset={190}
          >
            <p className="blanco">
              El propósito que seguimos, es el rizoma que multiplica nuestras
              acciones, nuestro propósito: Reproducir, desde las potencialidades
              individuales y colectivas, diferentes conexiones comunitarias,
              para que se construyan nuevas interacciones territoriales.
            </p>
          </AnimationOnScroll>
        </div>
      </section>
      <section className="cta-procesos">
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
        >
          <h2 className="negro">Para conocer qué hacemos...</h2>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__heartBeat"
          animateOut="animate__fadeOutUp"
          delay={2}
          duration={3}
        >
          <Link to="/proyectos">
            <button className="btn-intenciones-procesos">
              <p className="btn-intenciones-txt-primario">Presiona aquí</p>
              <p className="btn-intenciones-txt-secundario">
                Conoce nuestros procesos comunitarios
              </p>
            </button>
          </Link>
        </AnimationOnScroll>
      </section>
      <section className="mision-vision" id='objetivo'>
        
          <AnimationOnScroll
            className="mision"
            animateIn="animate__fadeInDown"
            animateOut="animate__fadeOutUp">
            <h2 className="blanco">Misión</h2>
            <p className="blanco texto-mvo">
              Crear conexiones comunitarias para renovar percepciones y
              diversificar acciones.
            </p>
          </AnimationOnScroll>

        <div className="separador-contacto-vertical">
          <div className="circulo-separador"></div>
          <div className="linea-separador"></div>
          <div className="circulo-separador"></div>
        </div>
        <div className="separador-contacto-horizontal">
            <div className="circulo-separador"></div>
            <div className="linea-separador-horizontal"></div>
            <div className="circulo-separador"></div>
          </div>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOut="animate__fadeOutUp"
            duration={1.4}
            className="vision"
          >
            <h2 className="blanco">Visión</h2>
            <p className="blanco texto-mvo">
              Fortalecer el sentido de pertenencia y de comunidad, incentivando
              la transformación del entorno.
            </p>
          </AnimationOnScroll>

        <div className="separador-contacto-vertical">
          <div className="circulo-separador"></div>
          <div className="linea-separador"></div>
          <div className="circulo-separador"></div>
        </div>
        <div className="separador-contacto-horizontal">
            <div className="circulo-separador"></div>
            <div className="linea-separador-horizontal"></div>
            <div className="circulo-separador"></div>
          </div>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOut="animate__fadeOutUp"
            duration={1.6}
            className="objetivo"
          >
            <h2 className="blanco">Objetivo</h2>
            <p className="blanco texto-mvo">
              Resignificar las maneras de construir y hacer comunidad.
            </p>
          </AnimationOnScroll>
      </section>
      <Footer></Footer>
    </main>
  );
}

export default NuestrasIntenciones;
