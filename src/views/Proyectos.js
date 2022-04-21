import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import NavHeader from "../components/NavHeader";
import OverlayInvitacion from "../components/OverlayInvitacion";
import NavMovil from "../components/NavMovil";

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
  const [navMovilVisibility, setNavMovilVisibility] = useState(false)
  const [culturaImg, setImgCultura] = useState('')
  const [arteImg, setImgArte] = useState('')
  const [urbanismoImg, setImgUrbanismo] = useState('')
  const [sustentabilidadImg, setImgSustentabilidad] = useState('')
  const portadaRef = doc(db, "recursosGenerales", "iFJVC92tChob76LtClV4");
  const culturaRef = doc(db, "recursosGenerales", "J0uekV97B4U7n7cdWd9W");
  const arteRef = doc(db, "recursosGenerales", "vDRd2aOZzlUDxFTOjnLA");
  const urbanismoRef = doc(db, "recursosGenerales", "x2imEnVsTNCZSmI0Y8uv");
  const sustentabilidadRef = doc(db, "recursosGenerales", "rpDAVZHphDNpmI30z7mw");
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
    
    const getImgArte = async () => {
      const arteDoc = await getDoc(arteRef);
      setImgArte(arteDoc.data().url);
    };

    const getImgCultura = async () => {
      const culturaDoc = await getDoc(culturaRef);
      setImgCultura(culturaDoc.data().url);
    };

    const getImgSustentabilidad = async () => {
      const sustentabilidadDoc = await getDoc(sustentabilidadRef);
      setImgSustentabilidad(sustentabilidadDoc.data().url);
    };

    const getImgUrbanismo = async () => {
      const urbanismoDoc = await getDoc(urbanismoRef);
      setImgUrbanismo(urbanismoDoc.data().url);
    };

    const getPortada = async () => {
      const portadaDoc = await getDoc(portadaRef);
      setPortadaProyectos(portadaDoc.data().url);
    };


    getImgArte();
    getImgCultura();
    getImgSustentabilidad();
    getImgUrbanismo();

    getPortada();
    getProyectosArte();
    getProyectosCultura();
    getProyectosSustentabilidad();
    getProyectosUrbanismo();
  }, []);

  const portadaImg = {
    backgroundImage: `url(${portadaProyectos})`,
  };

  const arteBGImg = {
    backgroundImage: `url(${arteImg})`,
  };
  const culturaBGImg = {
    backgroundImage: `url(${culturaImg})`,
  };
  const sustentabilidadBGImg = {
    backgroundImage: `url(${sustentabilidadImg})`,
  };
  const urbanismoBGImg = {
    backgroundImage: `url(${urbanismoImg})`,
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
              onClick={() => window.location.replace("/proyectos#arte_")}
            >
              Arte
            </button>
            <button
              className="btn-seccion"
              onClick={() => window.location.replace("/proyectos#urbanismo_")}
            >
              Urbanismo
            </button>
            <button
              className="btn-seccion"
              onClick={() =>
                window.location.replace("/proyectos#sustentabilidad_")
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
        <div className="cultura" id="cultura" style={culturaBGImg}>
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
            slidesPerView={7}
            centeredSlides={true}
            loop={true}
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
        <div className="arte" id="arte_" style={arteBGImg}>
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
            slidesPerView={7}
            centeredSlides={true}
            loop={true}
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
        <div className="urbanismo" id="urbanismo_" style={urbanismoBGImg}>
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
            slidesPerView={7}
            centeredSlides={true}
            loop={true}
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
        <div className="sustentabilidad" id="sustentabilidad_" style={sustentabilidadBGImg}>
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
            slidesPerView={7}
            centeredSlides={true}
            loop={true}
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
