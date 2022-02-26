import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import NavHeader from "../components/NavHeader";
import "../styles/base.css";
import "../styles/LandingPage.css";
import "../styles/NuestroEquipo.css";
import downArrow from "../assets/down_arrow_light.svg";
import MiembroEquipo from "../components/MiembroEquipo";
import ModalMiembro from "../components/ModalMiembro";
import OverlayInvitacion from "../components/OverlayInvitacion";
import NavMovil from "../components/NavMovil";

import { Animated } from "react-animated-css";
import "animate.css/animate.min.css";

//Firebase imports
import { db } from "../firebaseConfig";
import {
  query,
  collection,
  getDocs,
  where,
  doc,
  getDoc,
  orderBy
} from "@firebase/firestore";
import { Helmet } from "react-helmet";

function NuestroEquipo() {
  //Bloquear scroll del body

  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [equipo, setEquipo] = useState([]);
  const [miembroModal, setMiembroModal] = useState({});
  const [portadaEquipo, setPortadaEquipo] = useState("");
  const [navMovilVisibility, setNavMovilVisibility] = useState(false)

  const portadaRef = doc(db, "recursosGenerales", "ovN44y53KLXexXeAvrQn");
  const equipoCollectionRef = collection(db, "equipo");
  const q = query(equipoCollectionRef, where("visible", "==", true), orderBy("nombre"));

  useEffect(() => {
    const getEquipo = async () => {
      const data = await getDocs(q);
      setEquipo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getPortada = async () => {
      const portadaDoc = await getDoc(portadaRef);
      setPortadaEquipo(portadaDoc.data().url);
    };

    getPortada();
    getEquipo();
  }, []);

  const portadaImg = {
    backgroundImage: `url(${portadaEquipo})`,
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
        <title>Nuestro Equipo | Rhesident</title>
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

      <section className="hero-equipo" style={portadaImg}>
        <div className="color-overlay">
          <h1 className="titulo-hero blanco">Nuestro Equipo</h1>
          <p className="origen-descripcion blanco descripcion-hero">
            Quienes colaboran en Rhesident Org, son personas que buscan no
            solamente crecer individualmente, sino en colectivo. Personas que
            están dispuestas a ofrecer su intelecto, corazón y espíritu, para
            despertar a una vida y visión diferentes.
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
      <section className="galeria-equipo">
        <div className="cont-miembros">
          {equipo.map((miembro, i) => {
            return (
              <MiembroEquipo
                miembro={miembro}
                miembroModal={miembroModal}
                setMiembroModal={setMiembroModal}
                setModalVisibility={setModalVisibility}
              ></MiembroEquipo>
            );
          })}
        </div>
      </section>
      <Footer></Footer>
      <Animated
        animateOnMount={false}
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={modalVisibility}
        animationInDuration={500}
        animationOutDuration={500}
        className="overlay-top"
      >
        {modalVisibility ? (
          <ModalMiembro
            miembro={miembroModal}
            setModalVisibility={setModalVisibility}
            modalVisibility={modalVisibility}
          ></ModalMiembro>
        ) : null}
      </Animated>
    </main>
  );
}

export default NuestroEquipo;
