import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import NavHeader from "../components/NavHeader";
import "../styles/base.css";
import "../styles/Voluntariado.css";
import downArrow from "../assets/down_arrow_light.svg";
import { Link, useParams } from "react-router-dom";
import CardVoluntariado from "../components/CardVoluntariado";
import NavMovil from '../components/NavMovil';
import { Animated } from "react-animated-css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
import usePagination from "@mui/material/usePagination/usePagination";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Voluntariado() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [voluntariadoActive, setVoluntariadoActive] = useState("");
  const [swiperVisibility, setswiperVisibility] = useState(false);
  const [portadaVoluntariado, setPortadaVoluntariado] = useState("");
  const [proyectosPresencial, setProyectosPresencial] = useState("");
  const [proyectosRemoto, setProyectosRemoto] = useState("");
  const [proyectosHibrido, setProyectosHibrido] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const portadaRef = doc(db, "recursosGenerales", "uxuVFcShyChtFGtJzSiX");
  const videoRef = doc(db, "recursosGenerales", "kRku4Qd3Bqpm6ho1F2kE");
  const proyectosCollectionRef = collection(db, "proyectos");
  const [navMovilVisibility, setNavMovilVisibility] = useState(false)

  const q_presencial = query(
    proyectosCollectionRef,
    where("modalidad", "==", "Presencial"),
    where("visible", "==", true)
  );
  const q_remoto = query(
    proyectosCollectionRef,
    where("modalidad", "==", "Remoto"),
    where("visible", "==", true)
  );
  const q_hibrido = query(
    proyectosCollectionRef,
    where("modalidad", "==", "Híbrido"),
    where("visible", "==", true)
  );
  useEffect(() => {
    
    const getProyectosPresencial = async () => {
      const data = await getDocs(q_presencial);
      setProyectosPresencial(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    const getProyectosRemoto = async () => {
      const data = await getDocs(q_remoto);
      setProyectosRemoto(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    const getProyectosHibrido = async () => {
      const data = await getDocs(q_hibrido);
      setProyectosHibrido(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    const getPortada = async () => {
      const portadaDoc = await getDoc(portadaRef);
      setPortadaVoluntariado(portadaDoc.data().url);
    };

    const getVideo = async () => {
      const videoDoc = await getDoc(videoRef);
      setVideoURL(videoDoc.data().url);
    };

    getProyectosHibrido();
    getProyectosPresencial();
    getProyectosRemoto();
    getVideo();
    getPortada();

  }, []);

  const portadaImg = {
    backgroundImage: `url(${portadaVoluntariado})`,
  };

  return (
    <main>
      <Helmet>
        <title>Voluntariado | Rhesident</title>
      </Helmet>
      {navMovilVisibility ? (
        <NavMovil setNavMovilVisibility={setNavMovilVisibility}></NavMovil>
      ) : null}
      <NavHeader textColor="blanco"  setNavMovilVisibility={setNavMovilVisibility}></NavHeader>
      <section className="hero-voluntariado" style={portadaImg}>
        <div className="color-overlay">
          <h1 className="titulo-hero blanco">
            ¡Regístrate a nuestro voluntariado!
          </h1>
          <p className="origen-descripcion blanco descripcion-hero">
            “...lo que está en el mundo me pertenece –no en el sentido de
            propiedad–, me pertenece como responsabilidad, como derecho a saber,
            derecho a intervenir, derecho a cambiar. Eso se llama consciencia;
            se gana, se pierde y se renueva todos los días”
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
      <section className="tipos-voluntariado">
        <CardVoluntariado
          tipoVoluntariado="Presencial"
          setSwiperVisibility={setswiperVisibility}
          setVoluntariadoActive={setVoluntariadoActive}
          voluntariadoActive={voluntariadoActive}
        ></CardVoluntariado>
        <CardVoluntariado
          tipoVoluntariado="Híbrido"
          setSwiperVisibility={setswiperVisibility}
          setVoluntariadoActive={setVoluntariadoActive}
          voluntariadoActive={voluntariadoActive}
        ></CardVoluntariado>
        <CardVoluntariado
          tipoVoluntariado="Virtual"
          setSwiperVisibility={setswiperVisibility}
          setVoluntariadoActive={setVoluntariadoActive}
          voluntariadoActive={voluntariadoActive}
        ></CardVoluntariado>
      </section>

      <section
        className={swiperVisibility ? "galeria-proyectos-voluntariado" : null}
      >
        {voluntariadoActive === "Presencial" ? (
          <Animated
            animateOnMount={true}
            animationIn="fadeInDown"
            isVisible={swiperVisibility}
            animationOut="slideOutUp"
            animationInDuration={600}
            animationOutDuration={600}
            className="swiper-proyectos"
          >
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
              {proyectosPresencial.map((proyecto) => {
                const proyectoBG = {
                  backgroundImage: `url(${proyecto.imgPrincipalURL})`,
                };
                return (
                  <SwiperSlide className="proyecto-cont" style={proyectoBG}>
                    <Link to={`/proyecto/${proyecto.id}`}>
                      <div className="proyecto-overlay">
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
          </Animated>
        ) : null}

        {voluntariadoActive === "Híbrido" ? (
          <Animated
            animateOnMount={true}
            animationIn="fadeInDown"
            isVisible={swiperVisibility}
            animationOut="slideOutUp"
            animationInDuration={600}
            animationOutDuration={600}
            className="swiper-proyectos"
          >
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
              {proyectosHibrido.map((proyecto) => {
                const proyectoBG = {
                  backgroundImage: `url(${proyecto.imgPrincipalURL})`,
                };
                return (
                  <SwiperSlide className="proyecto-cont" style={proyectoBG}>
                    <Link to={`/proyecto/${proyecto.id}`}>
                      <div className="proyecto-overlay">
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
          </Animated>
        ) : null}
        {voluntariadoActive === "Remoto" ? (
          <Animated
            animateOnMount={true}
            animationIn="fadeInDown"
            isVisible={swiperVisibility}
            animationOut="slideOutUp"
            animationInDuration={600}
            animationOutDuration={600}
            className="swiper-proyectos"
          >
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
              {proyectosRemoto.map((proyecto) => {
                const proyectoBG = {
                  backgroundImage: `url(${proyecto.imgPrincipalURL})`,
                };
                return (
                  <SwiperSlide className="proyecto-cont" style={proyectoBG}>
                    <Link to={`/proyecto/${proyecto.id}`}>
                      <div className="proyecto-overlay">
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
          </Animated>
        ) : null}
      </section>
      <section className="cta-voluntariado">
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
        >
          <h2 className="negro subt-center">
            Aprende, comparte y logra transformar tu entorno.
          </h2>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn="animate__heartBeat"
          animateOut="animate__fadeOutUp"
          delay={2}
        >
          <Link to="/registro-voluntariado" target="_blank">
            <button className="btn-cta-voluntariado">
              <p className="cta-voluntariado-t1">Aplica aquí</p>
              <p className="cta-voluntariado-t2">Sé parte de Rhesident Org</p>
            </button>
          </Link>
        </AnimationOnScroll>
      </section>

      <section className="video-voluntariado">
        <h2 className="negro subt-center">
          ¿Te imaginas cómo sería formar parte de Rhesident Org?
        </h2>
        <h4 className="descripcion-seccion">
          ¡Da clic a este video y descúbrelo!
        </h4>
        <div className="cont-frame">
          <iframe
            className="responsive-iframe"
            src={`https://www.youtube.com/embed/${videoURL}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
       
      </section>
      <Footer></Footer>
    </main>
  );
}

export default Voluntariado;
