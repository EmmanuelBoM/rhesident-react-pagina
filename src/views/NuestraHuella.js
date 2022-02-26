import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import NavHeader from "../components/NavHeader";
import OverlayInvitacion from "../components/OverlayInvitacion";
import "../styles/base.css";
import "../styles/LandingPage.css";
import "../styles/NuestraHuella.css";
import downArrow from "../assets/down_arrow_light.svg";
import NavMovil from "../components/NavMovil";

// SwiperJS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Animated } from "react-animated-css";
import "animate.css/animate.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";

import moment from 'moment';

//Firebase imports
import { db } from "../firebaseConfig";
import {
  query,
  collection,
  getDocs,
  where,
  orderBy,
  doc,
  getDoc,
} from "@firebase/firestore";
import { Helmet } from "react-helmet";

SwiperCore.use([Pagination, Navigation]);

function NuestraHuella() {
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const [notas, setNotas] = useState([]);
  const [testimonios, setTestimonios] = useState([]);
  const [alianzas, setAlianzas] = useState([]);
  const [portadaHuella, setPortadaHuella] = useState("");
  const [navMovilVisibility, setNavMovilVisibility] = useState(false)

  function showOverlay() {
    if (window.scrollY >= 80) {
      setOverlayVisibility(true);
    } else {
      setOverlayVisibility(false);
    }
  }

  const portadaRef = doc(db, "recursosGenerales", "mHhvAtVFhE9x7rikpH4W");

  const notasCollectionRef = collection(db, "notasMedio");
  const q_notas = query(notasCollectionRef, where("visible", "==", true), orderBy("fecha"));

  const testimoniosCollectionRef = collection(db, "testimonios");
  const q_testimonios = query(testimoniosCollectionRef, where("visible", "==", true), orderBy("nombre"));

  const alianzasCollectionRef = collection(db, "alianzas");
  const q_alianzas = query(alianzasCollectionRef, where("visible", "==", true), orderBy("nombre"));

  useEffect(() => {
    const getNotas = async () => {
      const data = await getDocs(q_notas);
      setNotas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getTestimonios = async () => {
      const data = await getDocs(q_testimonios);
      setTestimonios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getAlianzas = async () => {
      const data = await getDocs(q_alianzas);
      setAlianzas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getPortada = async () => {
      const portadaDoc = await getDoc(portadaRef);
      setPortadaHuella(portadaDoc.data().url);
    };
    getPortada();
    getNotas();
    getTestimonios();
    getAlianzas();
  }, []);

  const portadaImg = {
    backgroundImage: `url(${portadaHuella})`,
  };

  window.addEventListener("scroll", showOverlay);
  return (
    <main>
      <Helmet>
        <title>Nuestra Huella | Rhesident</title>
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
      <section className="hero-huella" style={portadaImg}>
        <div className="color-overlay">
          <h1 className="titulo-hero blanco">Nuestra Huella</h1>
          <p className="origen-descripcion blanco descripcion-hero">
          Tenemos un compromiso con el movimiento; para mover el territorio y generar transformación colectiva, colaborativa y local.  Somos semilla creativa y de empoderamiento; canalizamos, abrimos caminos, posibilidades, mentes y corazones. 
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

      <section className="testimonios">
        <div className="section-title">
          <h2 className="negro">Testimonios</h2>
          <h4 className="negro descripcion-seccion">
          Te compartimos algunos testimonios de personas, organizaciones, colectivos y distintas agrupaciones con quienes hemos colaborado y creado nuevas conexiones.
          </h4>
        </div>

        <Swiper
          slidesPerView={4}
          navigation={true}
          spaceBetween={1}
          centeredSlides={true}
          initialSlide={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          pagination={{ clickable: true }}
          className="swiper-testimonios"
        >
          {testimonios.map((testimonio) => {
            const imgBg = {
              backgroundImage: `url(${testimonio.imgURL})`,
            };
            return (
              <SwiperSlide className="cont-testimonio">
                <div className="img-testimonial" style={imgBg}></div>
                <div className="detalles-testimonial">
                  <h4 className=" amarillo nombre-testimonial">
                    {testimonio.nombre}
                  </h4>
                  <p className="blanco desc-testimonial">
                    {testimonio.relacion}
                  </p>
                </div>
                <p className="blanco texto-testimonio">
                  "{testimonio.testimonio}"
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="notas-medio">
        <div className="section-title">
          <h2 className="negro">Notas de medios</h2>
          <h4 className="descripcion-seccion">
            Aquí un recuento de proyectos o actividades que hemos creado,
            organizado, o en las que nos hemos involucrado.
          </h4>
        </div>

        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          pagination={{ type: "custom" }}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 2,
            },
          }}
          className="swiper-proyectos"
        >
          {notas.map((nota) => {
            var fecha = moment(nota.fecha).format("DD-MM-YYYY");
            return (
              <SwiperSlide className="cont-nota-medio">
                <div className="franja-nota"></div>
                <a
                  href={nota.notaURL}
                  className="cont-nota-medio link-decoration"
                >
                  <div className="detalles-nota">
                    <p className="fecha-nota">{fecha}</p>
                    <h4 className="nombre-nota negro">{nota.titulo}</h4>
                    <div className="separador-nota"></div>
                    <div className="fuente-nota">
                      <i class="fa-solid fa-newspaper icono-nota"></i>
                      <p className="nombre-fuente">{nota.fuente}</p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="Aliados">
        <div className="section-title">
          <h2 className="negro">Nuestras alianzas colaborativas</h2>
          <h4 className="negro descripcion-seccion">
            El poder tejer redes, co-crear, compartir saberes y aprender de
            otras y otros, es uno de los pilares de nuestra forma de trabajo.
          </h4>
        </div>
        <div className="galeria-aliados">
          {alianzas.map((alianza) => {
            return (
              <img
                src={alianza.imgURL}
                alt={`alianza_${alianza.nombre}`}
                title={alianza.nombre}
                className="img-alianza"
              />
            );
          })}
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}

export default NuestraHuella;
