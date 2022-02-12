import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import NavHeader from "../components/NavHeader";
import OverlayInvitacion from "../components/OverlayInvitacion";

import "../styles/base.css";
import "../styles/LandingPage.css";
import "../styles/Proyectos.css";
import downArrow from "../assets/down_arrow_light.svg";
import Proyecto from "../components/Proyecto";
import { Link } from "react-router-dom";

import { Animated } from "react-animated-css";
import "animate.css/animate.min.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";

//Firebase imports
import { db } from "../firebaseConfig";
import {
  query,
  collection,
  getDocs,
  where,
  doc,
  getDoc,
} from "@firebase/firestore";
import { Helmet } from "react-helmet";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Proyectos() {
  //Firestore GET Query
  const [proyectosArte, setProyectosArte] = useState([]);
  const [proyectosCultura, setProyectosCultura] = useState([]);
  const [proyectosUrbanismo, setProyectosUrbanismo] = useState([]);
  const [proyectosSustentabilidad, setProyectosSustentabilidad] = useState([]);
  const [portadaProyectos, setPortadaProyectos] = useState("");

  const portadaRef = doc(db, "recursosGenerales", "iFJVC92tChob76LtClV4");
  const proyectosCollectionRef = collection(db, "proyectos");

  const q_arte = query(
    proyectosCollectionRef,
    where("ejesAccion", "array-contains", "Arte"),
    where("visible", "==", true)
  );
  const q_cultura = query(
    proyectosCollectionRef,
    where("ejesAccion", "array-contains", "Cultura"),
    where("visible", "==", true)
  );
  const q_sustentabilidad = query(
    proyectosCollectionRef,
    where("ejesAccion", "array-contains", "Sustentabilidad"),
    where("visible", "==", true)
  );
  const q_urbanismo = query(
    proyectosCollectionRef,
    where("ejesAccion", "array-contains", "Urbanismo"),
    where("visible", "==", true)
  );

  useEffect(() => {
    const getProyectosArte = async () => {
      const data = await getDocs(q_arte);
      setProyectosArte(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getProyectosCultura = async () => {
      const data = await getDocs(q_cultura);
      setProyectosCultura(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    const getProyectosSustentabilidad = async () => {
      const data = await getDocs(q_sustentabilidad);
      setProyectosSustentabilidad(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    const getProyectosUrbanismo = async () => {
      const data = await getDocs(q_urbanismo);
      setProyectosUrbanismo(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    const getPortada = async () => {
      const portadaDoc = await getDoc(portadaRef);
      setPortadaProyectos(portadaDoc.data().url);
    };

    getPortada();
    getProyectosArte();
    getProyectosCultura();
    getProyectosSustentabilidad();
    getProyectosUrbanismo();
  }, []);

  const portadaImg = {
    backgroundImage: `url(${portadaProyectos})`,
  };

  const [swiperRef, setSwiperRef] = useState(null);

  const [overlayVisibility, setOverlayVisibility] = useState(false);

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
        <title>Proyectos | Rhesident</title>
      </Helmet>
      <NavHeader textColor="blanco"></NavHeader>
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
      <section className="hero-proyectos" style={portadaImg}>
        <div className="color-overlay">
          <h1 className="titulo-hero blanco">Proyectos</h1>
          <p className="origen-descripcion blanco descripcion-hero">
            Es casi un proceso artesanal el que otorgamos a cada espacio y
            lugar. Nuestros 4 ejes de acción, nos permiten conformar procesos
            comunitarios que permitan generar consciencia acerca del lugar que
            ocupamos, renovando la manera en la que nos vinculamos con nuestro
            entorno.
          </p>
          <div className="btns-secciones">
            <button
              className="btn-seccion"
              onClick={() => window.location.replace("/proyectos#cultura")}
            >
              Cultura
            </button>
            <button
              className="btn-seccion"
              onClick={() => window.location.replace("/proyectos#arte")}
            >
              Arte
            </button>
            <button
              className="btn-seccion"
              onClick={() => window.location.replace("/proyectos#urbanismo")}
            >
              Urbanismo
            </button>
            <button
              className="btn-seccion"
              onClick={() =>
                window.location.replace("/proyectos#sustentabilidad")
              }
            >
              Sustentabilidad
            </button>
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
          <div className="dark-overlay cultura-overlay">
            <h2 className="blanco">Cultura</h2>
            <div className="scrolldown-cont">
              <img
                src={downArrow}
                alt=""
                className="scroll-down-link scroll-down-arrow"
              />
            </div>
            <p className="blanco descripcion-proceso">
              Intentamos reconstruir la identidad y la organización comunitaria;
              fortaleciendo el sentido de pertenencia de cada lugar. Desde aquí,
              co-creamos iniciativas de colaboración, enfocadas en educación,
              empoderamiento y emprendimiento.
            </p>
          </div>
        </div>
        <div className="proyectos-galeria">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={1}
            centeredSlides={true}
            loop={false}
            spaceBetween={30}
            pagination={{ type: "custom" }}
            navigation={true}
            className="swiper-proyectos"
          >
            {proyectosCultura.map((proyecto, i) => {
              const proyectoBG = {
                backgroundImage: `url(${proyecto.imgPrincipalURL})`,
              };
              return (
                <SwiperSlide className="proyecto-cont" style={proyectoBG}>
                  <Link to={`/proyecto/${proyecto.id}`}>
                    <div className="proyecto-overlay cultura-proyecto">
                      <h3 className="blanco nombre-proceso-ind">
                        {proyecto.nombre}
                      </h3>
                      <p className="blanco descripcion-proceso-ind">
                        {proyecto.descripcionBreve}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <section className="proceso">
        <div className="arte" >
          <div className="dark-overlay arte-overlay">
            <h2 className="blanco" id="arte">Arte</h2>
            <div className="scrolldown-cont">
              <img
                src={downArrow}
                alt=""
                className="scroll-down-link scroll-down-arrow"
              />
            </div>
            <p className="blanco descripcion-proceso" >
              El arte es nuestra herramienta para descolonizar las formas de
              interacción preestablecidas. Mediante este eje, logramos
              determinar la naturaleza y vocación de cada comunidad, generando
              mayor participación e involucramiento social.
            </p>
          </div>
        </div>
        <div className="proyectos-galeria">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={1}
            centeredSlides={true}
            loop={false}
            spaceBetween={30}
            pagination={{ type: "custom" }}
            navigation={true}
            className="swiper-proyectos"
          >
            {proyectosArte.map((proyecto, i) => {
              const proyectoBG = {
                backgroundImage: `url(${proyecto.imgPrincipalURL})`,
              };
              return (
                <SwiperSlide className="proyecto-cont" style={proyectoBG}>
                  <Link to={`/proyecto/${proyecto.id}`}>
                    <div className="proyecto-overlay arte-proyecto">
                      <h3 className="blanco nombre-proceso-ind">
                        {proyecto.nombre}
                      </h3>
                      <p className="blanco descripcion-proceso-ind">
                        {proyecto.descripcionBreve}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <section className="proceso">
        <div className="urbanismo" >
          <div className="dark-overlay urbanismo-overlay">
            <h2 className="blanco" id="urbanismo">Urbanismo</h2>
            <div className="scrolldown-cont">
              <img
                src={downArrow}
                alt=""
                className="scroll-down-link scroll-down-arrow"
              />
            </div>
            <p className="blanco descripcion-proceso" >
              Nombramos y reconocemos la diversidad dentro de cada lugar,
              mediante la participación, la planificación y el ordenamiento
              territorial. Este eje nos permite fortalecer la inclusión, la
              creatividad y la iniciativa tanto en campo como en gabinete.
            </p>
          </div>
        </div>
        <div className="proyectos-galeria">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={1}
            centeredSlides={true}
            loop={false}
            spaceBetween={30}
            pagination={{ type: "custom" }}
            navigation={true}
            className="swiper-proyectos"
          >
            {proyectosUrbanismo.map((proyecto, i) => {
              const proyectoBG = {
                backgroundImage: `url(${proyecto.imgPrincipalURL})`,
              };
              return (
                <SwiperSlide className="proyecto-cont" style={proyectoBG}>
                  <Link to={`/proyecto/${proyecto.id}`}>
                    <div className="proyecto-overlay urbanismo-proyecto">
                      <h3 className="blanco nombre-proceso-ind">
                        {proyecto.nombre}
                      </h3>
                      <p className="blanco descripcion-proceso-ind">
                        {proyecto.descripcionBreve}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <section className="proceso" >
        <div className="sustentabilidad" >
          <div className="dark-overlay sustentabilidad-overlay">
            <h2 className="blanco">Sustentabilidad</h2>
            <div className="scrolldown-cont">
              <img
                src={downArrow}
                alt=""
                className="scroll-down-link scroll-down-arrow"
              />
            </div>
            <p className="blanco descripcion-proceso" id="sustentabilidad">
              Para decodificar las limitaciones que impiden una constante
              transformación individual y colectiva, acudimos al eje de
              sustentabilidad. Logramos ver el panorama con mayor amplitud, para
              particularizar estrategias de cohesión social.
            </p>
          </div>
        </div>
        <div className="proyectos-galeria">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={1}
            centeredSlides={true}
            loop={false}
            spaceBetween={30}
            pagination={{ type: "custom" }}
            navigation={true}
            className="swiper-proyectos"
          >
            {proyectosSustentabilidad.map((proyecto, i) => {
              const proyectoBG = {
                backgroundImage: `url(${proyecto.imgPrincipalURL})`,
              };
              return (
                <SwiperSlide className="proyecto-cont" style={proyectoBG}>
                  <Link to={`/proyecto/${proyecto.id}`}>
                    <div className="proyecto-overlay sustentabilidad-proyecto">
                      <h3 className="blanco nombre-proceso-ind">
                        {proyecto.nombre}
                      </h3>
                      <p className="blanco descripcion-proceso-ind">
                        {proyecto.descripcionBreve}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <Footer></Footer>
    </main>
  );
}

export default Proyectos;
