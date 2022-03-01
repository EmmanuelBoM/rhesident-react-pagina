import React, {useState, useEffect} from 'react'
import '../styles/base.css'
import '../styles/LandingPage.css'
import NavHeader from '../components/NavHeader'
import Footer from '../components/Footer'
import iconoHuella from '../assets/huella1.svg'
import iconoCausa from '../assets/icono_causa.svg'
import iconoMas from '../assets/icono_mas.svg'
import downArrow from '../assets/down_arrow.svg'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom'
import CustomMailchimpForm from '../components/CustomMailchimpForm'
import iconoIntenciones from '../assets/icono_intenciones.png'
import iconoOrigen from '../assets/icono_origen.svg'
import iconoProcesos from '../assets/icono_procesos.svg'
import iconoEquipo from '../assets/icono_equipo.svg'
import { Helmet } from 'react-helmet';
import ModalResponsive from '../components/ModalResponsive.js'


import "animate.css/animate.min.css";

// Firebase Imports
import {db} from '../firebaseConfig'
import {collection,getDoc, doc} from "@firebase/firestore";
import NavMovil from '../components/NavMovil'

import ReactGA from 'react-ga';

function LandingPage() {
    const [portadaImg, setPortadaImg] = useState('')
    const [causaImg, setCausaImg] = useState('')
    const [videoURL, setVideoURL] = useState('')
    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalImg, setModalImg] = useState('')
    const [navMovilVisibility, setNavMovilVisibility] = useState(false)
    
    const causaBGImg = {
      backgroundImage: `url(${causaImg})`,
    };

    const portadaRef = doc(db, "recursosGenerales", "5ePochyXKfxpLa6MK32Q")
    const modalRef = doc(db, "recursosGenerales", "enDqmvvOeWGgzB88rDrB")
    const videoRef = doc(db, "recursosGenerales", "5aT7wvcLG9yGr6B8Ar8G")
    const causaRef = doc(db, "recursosGenerales", "9Ye3smePFo8rD4oilpTE")

    useEffect(() => {
      
      ReactGA.initialize('UA-221512994-2');
      ReactGA.pageview(window.location.pathname + window.location.search);
      
      const getPortada = async () => {
          const portadaDoc = await getDoc(portadaRef);
          setPortadaImg(portadaDoc.data().url);
      };

      const getCausaImg = async () => {
        const causaDoc = await getDoc(causaRef);
        setCausaImg(causaDoc.data().url);
      };

      const getModal = async () => {
        const modalDoc = await getDoc(modalRef);
        setModalImg(modalDoc.data().url);
        let modalStorage = sessionStorage.getItem("modalLanding");
        if (modalStorage) {
          setModalVisibility(false);
        } else {
          setModalVisibility(modalDoc.data().visible);
        }
      };

      const getVideo = async () => {
        const videoDoc = await getDoc(videoRef);
        setVideoURL(videoDoc.data().url);
      };

      getCausaImg();
      getModal();
      getVideo();
      getPortada();
    }, []);

    function showData(){
      console.log(portadaImg)
    }

    
    return (
      <main className="main-landing">
        <Helmet>
          <title>Inicio | Rhesident Org </title>
        </Helmet>

        {modalVisibility ? (
          <ModalResponsive
            img={modalImg}
            setModalVisibility={setModalVisibility}
          ></ModalResponsive>
        ) : null}

        {navMovilVisibility ? (
          <NavMovil setNavMovilVisibility={setNavMovilVisibility}></NavMovil>
        ) : null}

        <NavHeader
          textColor="blanco"
          setNavMovilVisibility={setNavMovilVisibility}
        ></NavHeader>
        <section className="hero-landing">
          <svg
            className="main-svg"
            viewBox="0 0 1920 850"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="img1"
                patternUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1925"
                height="1422"
              >
                <image href={portadaImg} className="img-portada-landing" />
              </pattern>
            </defs>
            <path
              opacity="1"
              d="M1920 583.5C1633.68 1100.34 711.057 681.759 174.892 802.451C105.911 817.977 48.0377 828.408 -3.36576e-06 816L2.3076e-05 0.500065L1918.46 0.500131L1920 583.5Z"
              fill="url(#img1)"
            />
            <path
              opacity="0.7"
              d="M1920 583.5C1633.68 1100.34 711.057 681.759 174.892 802.451C105.911 817.977 48.0377 828.408 -3.36576e-06 816L2.3076e-05 0.500065L1918.46 0.500131L1920 583.5Z"
              fill="#0C3E4D"
            />
          </svg>

          <h1 className="titulo-landing blanco">Rhesident <span className="amarillo">Org.</span> </h1>
          <h3 className="subtitulo-landing blanco">
            Somos una organización de <br />{" "}
            <span className="bold amarillo">
              Regeneración Comunitaria Multidisciplinaria
            </span>
          </h3>
          <p className="descripcion-hero-landing blanco">
            Somos una organización <span className="bold">teal</span> de
            regeneración comunitaria multidisciplinaria, basada en un sistema
            holístico e integral; mediante acciones locales, pretendemos
            transformar la interacción comunitaria, incentivando el bienestar
            individual y colectivo.
          </p>
          <div className="scrolldown-cont-small">
            <i className="fa-solid fa-angles-down scroll-down-link"></i>
          </div>

          <div className="hero-ctas">
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOut="fadeOutLeft"
              offset={190}
            >
              <div className="cta">
                <div className="icono-cta">
                  <img src={iconoHuella} alt="" className="img-cta" />
                </div>
                <p className="texto-cta negro">
                  Únete al equipo y otorga tus talentos a este movimiento.
                </p>
                <Link to="/voluntariado">
                  <button className="btn-cta">
                    Conviértete <br /> en voluntario
                  </button>
                </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInRight"
              animateOut="fadeOutRight"
              offset={190}
            >
              <div className="cta">
                <div className="icono-cta">
                  <img src={iconoCausa} alt="" className="img-cta" />
                </div>

                <p className="texto-cta megro">
                  Con tu ayuda, podemos lograr grandes transformaciones.
                </p>
                <Link to="/como-apoyar">
                  <button className="btn-cta">
                    Apoya
                    <br /> nuestra causa{" "}
                  </button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <div className="scrolldown-cont">
          <i className="fa-solid fa-angle-down scroll-down-link-green"></i>
        </div>

        <section className="video-principal">
          <div className="cont-frame">
            <iframe
              className="responsive-iframe"
              src={`https://www.youtube.com/embed/${videoURL}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <div className="scrolldown-cont">
          <img
            src={downArrow}
            alt=""
            className="scroll-down-link scroll-down-arrow"
          />
        </div>

        <section className="nuestra-causa" style={causaBGImg}>
          <div className="color-overlay">
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeOutUp"
              offset={190}
            >
              <h2>Nuestra Causa</h2>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeOutUp"
              delay={1}
            >
              <p className="causa-descripcion">
                Buscamos contrarrestar la{" "}
                <span className="amarillo">exclusión</span> y{" "}
                <span className="amarillo">vulnerabilidad</span> en comunidades
                (urbanas, semi rurales y rurales), ciudades y grupos
                poblacionales que viven bajo condiciones de segregación y
                fragmentación, ocasionadas por la urbanización desmesurada.
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeOutUp"
              delay={1}
            >
              <p className="causa-descripcion">
                Solemos tomar en cuenta los efectos sociales que han impactado a
                las comunidades y a su relación con su entorno, fortaleciendo su
                sentido de pertenencia;{" "}
                <span className="amarillo">
                  evitando mayor fragmentación y conflicto social
                </span>
                , así como disminuyendo la desigualdad espacial.
              </p>
            </ScrollAnimation>
          </div>
        </section>

        <div className="scrolldown-cont">
          <img
            src={downArrow}
            alt=""
            className="scroll-down-link scroll-down-arrow"
          />
        </div>

        <section className="conoce">
          <h2 className="negro">¡Conócenos!</h2>
          <h4 className="descripcion-seccion">
            <span className="bold">Desliza hacia abajo</span> para conocer
            <br /> los aspectos que definen a{" "}
            <span className="bold">Rhesident Org.</span>{" "}
          </h4>

          <ScrollAnimation animateIn="fadeIn" duration={2}>
            <div className="item-conoce">
              <svg
                className="huella-conoce"
                width="471"
                height="426"
                viewBox="0 0 471 426"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="path-conoce"
                  d="M40.5948 34.4589L40.5961 34.458C87.9233 0.385331 149.926 -4.30329 202.253 21.2961C232.481 36.0871 267.288 51.946 290.191 58.5908C313.062 65.2314 332.898 79.4079 353.747 96.7009C359.129 101.165 364.588 105.846 370.177 110.639C386.022 124.228 402.912 138.713 422.06 151.682C434.42 160.054 443.273 168.906 449.666 179.206C456.068 189.521 460.165 201.552 462.652 216.508C467.294 244.419 466.224 281.559 464.679 335.213C464.552 339.628 464.421 344.156 464.291 348.799C463.868 363.835 462.655 375.409 460.635 384.291C458.613 393.18 455.849 399.071 452.535 403.021C446.191 410.585 436.516 412.52 419.997 411.659C413.54 411.322 406.268 410.57 398.15 409.73C365.305 406.332 318.625 401.503 256.204 417.006C219.151 426.208 191.482 418.865 169.269 401.631C146.744 384.154 129.427 356.192 114.134 323.389C103.982 301.613 94.9114 278.156 85.8043 254.605C81.1717 242.625 76.5296 230.621 71.731 218.801C57.6226 184.049 42.216 151.064 22.0185 126.972C5.27119 106.995 2.43836 89.8345 6.87797 75.1449C11.4465 60.0286 24.0447 46.366 40.5948 34.4589Z"
                  stroke="#F0E967"
                  strokeWidth="10"
                />
              </svg>
              <h3 className="verde subt-conoce">
                Nuestras <br /> intenciones
              </h3>
              <p className="negro text-conoce">
                Aquí encontrarás todo lo que motiva cada una de nuestras
                actividades y colaboraciones.
              </p>
              <Link className="corazon-conoce" to="/nuestras-intenciones">
                <img src={iconoIntenciones} alt="" />
              </Link>
            </div>
          </ScrollAnimation>

          <div className="line-conoce"></div>

          <ScrollAnimation
            animateIn="fadeInRight"
            animateOut="fadeOutRight"
            offset={180}
          >
            <div
              className="nodes-cont-r"
              onClick={() =>
                window.location.replace(
                  "/nuestras-intenciones#propositoEvolutivo"
                )
              }
            >
              <div className="node-conoce"></div>
              <p className="node-texto">
                Nuestro <br /> propósito evolutivo
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="fadeOutLeft"
            offset={190}
          >
            <div
              className="nodes-cont-l"
              onClick={() =>
                window.location.replace("/nuestras-intenciones#objetivo")
              }
            >
              <p className="node-texto">
                Nuestro <br /> objetivo
              </p>
              <div className="node-conoce"></div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOut="fadeOutRight"
            offset={200}
          >
            <div
              className="nodes-cont-r"
              onClick={() =>
                window.location.replace("/nuestras-intenciones#objetivo")
              }
            >
              <div className="node-conoce"></div>
              <p className="node-texto">
                Nuestra <br /> misión y visión
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={2}>
            <div className="item-conoce">
              <svg
                className="huella-conoce"
                width="471"
                height="426"
                viewBox="0 0 471 426"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="path-conoce"
                  d="M40.5948 34.4589L40.5961 34.458C87.9233 0.385331 149.926 -4.30329 202.253 21.2961C232.481 36.0871 267.288 51.946 290.191 58.5908C313.062 65.2314 332.898 79.4079 353.747 96.7009C359.129 101.165 364.588 105.846 370.177 110.639C386.022 124.228 402.912 138.713 422.06 151.682C434.42 160.054 443.273 168.906 449.666 179.206C456.068 189.521 460.165 201.552 462.652 216.508C467.294 244.419 466.224 281.559 464.679 335.213C464.552 339.628 464.421 344.156 464.291 348.799C463.868 363.835 462.655 375.409 460.635 384.291C458.613 393.18 455.849 399.071 452.535 403.021C446.191 410.585 436.516 412.52 419.997 411.659C413.54 411.322 406.268 410.57 398.15 409.73C365.305 406.332 318.625 401.503 256.204 417.006C219.151 426.208 191.482 418.865 169.269 401.631C146.744 384.154 129.427 356.192 114.134 323.389C103.982 301.613 94.9114 278.156 85.8043 254.605C81.1717 242.625 76.5296 230.621 71.731 218.801C57.6226 184.049 42.216 151.064 22.0185 126.972C5.27119 106.995 2.43836 89.8345 6.87797 75.1449C11.4465 60.0286 24.0447 46.366 40.5948 34.4589Z"
                  stroke="#F0E967"
                  strokeWidth="10"
                />
              </svg>
              <h3 className="verde subt-conoce">
                Nuestro <br /> Origen
              </h3>
              <p className="negro text-conoce">
                Cada acción, pensamiento, intuición y sentir han contado; nos
                seguimos transformando cada día.
              </p>
              <Link className="corazon-conoce" to="/nuestro-origen">
                <img src={iconoOrigen} alt="" />
              </Link>
            </div>
          </ScrollAnimation>
          <div className="line-conoce-2"></div>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="fadeOutLeft"
            offset={200}
          >
            <div
              className="nodes-cont-l"
              onClick={() =>
                window.location.replace("/nuestro-origen#filosofia")
              }
            >
              <p className="node-texto">
                Nuestra <br /> filosofía
              </p>
              <div className="node-conoce"></div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOut="fadeOutRight"
            offset={180}
          >
            <div
              className="nodes-cont-r"
              onClick={() =>
                window.location.replace("/nuestro-origen#historia")
              }
            >
              <div className="node-conoce"></div>
              <p className="node-texto">
                Nuestra <br /> marca
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="fadeOutLeft"
            offset={200}
          >
            <div
              className="nodes-cont-l"
              onClick={() => window.location.replace("/nuestro-origen#marca")}
            >
              <p className="node-texto">
                Nuestra <br /> historia
              </p>
              <div className="node-conoce"></div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={3}>
            <div className="item-conoce">
              <svg
                className="huella-conoce"
                width="471"
                height="426"
                viewBox="0 0 471 426"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="path-conoce"
                  d="M40.5948 34.4589L40.5961 34.458C87.9233 0.385331 149.926 -4.30329 202.253 21.2961C232.481 36.0871 267.288 51.946 290.191 58.5908C313.062 65.2314 332.898 79.4079 353.747 96.7009C359.129 101.165 364.588 105.846 370.177 110.639C386.022 124.228 402.912 138.713 422.06 151.682C434.42 160.054 443.273 168.906 449.666 179.206C456.068 189.521 460.165 201.552 462.652 216.508C467.294 244.419 466.224 281.559 464.679 335.213C464.552 339.628 464.421 344.156 464.291 348.799C463.868 363.835 462.655 375.409 460.635 384.291C458.613 393.18 455.849 399.071 452.535 403.021C446.191 410.585 436.516 412.52 419.997 411.659C413.54 411.322 406.268 410.57 398.15 409.73C365.305 406.332 318.625 401.503 256.204 417.006C219.151 426.208 191.482 418.865 169.269 401.631C146.744 384.154 129.427 356.192 114.134 323.389C103.982 301.613 94.9114 278.156 85.8043 254.605C81.1717 242.625 76.5296 230.621 71.731 218.801C57.6226 184.049 42.216 151.064 22.0185 126.972C5.27119 106.995 2.43836 89.8345 6.87797 75.1449C11.4465 60.0286 24.0447 46.366 40.5948 34.4589Z"
                  stroke="#F0E967"
                  strokeWidth="10"
                />
              </svg>
              <h4 className="verde subt-conoce">
                Nuestros <br /> Procesos <br /> comunitarios
              </h4>
              <p className="negro text-conoce">
                La inmediatez del ahora, suele impedir valorar los procesos.
                Aquí te presentamos los nuestros.
              </p>
              <Link className="corazon-conoce" to="/nuestro-origen">
                <img src={iconoProcesos} alt="" />
              </Link>
            </div>
          </ScrollAnimation>

          <div className="line-conoce-3"></div>

          <ScrollAnimation
            animateIn="fadeInRight"
            animateOut="fadeOutRight"
            offset={180}
          >
            <div
              className="nodes-cont-r"
              onClick={() => window.location.replace("/proyectos#cultura")}
            >
              <div className="node-conoce"></div>
              <p className="node-texto">Cultura</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="fadeOutLeft"
            offset={190}
          >
            <div
              className="nodes-cont-l"
              onClick={() => window.location.replace("/proyectos#arte")}
            >
              <p className="node-texto">Arte</p>
              <div className="node-conoce"></div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOut="fadeOutRight"
            offset={200}
          >
            <div
              className="nodes-cont-r"
              onClick={() => window.location.replace("/proyectos#urbanismo")}
            >
              <div className="node-conoce"></div>
              <p className="node-texto">Urbanismo</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="fadeOutLeft"
            offset={190}
          >
            <div
              className="nodes-cont-l"
              onClick={() =>
                window.location.replace("/proyectos#sustentabilidad")
              }
            >
              <p className="node-texto">Sustentabilidad</p>
              <div className="node-conoce"></div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={3}>
            <div className="item-conoce">
              <svg
                className="huella-conoce"
                width="471"
                height="426"
                viewBox="0 0 471 426"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="path-conoce"
                  d="M40.5948 34.4589L40.5961 34.458C87.9233 0.385331 149.926 -4.30329 202.253 21.2961C232.481 36.0871 267.288 51.946 290.191 58.5908C313.062 65.2314 332.898 79.4079 353.747 96.7009C359.129 101.165 364.588 105.846 370.177 110.639C386.022 124.228 402.912 138.713 422.06 151.682C434.42 160.054 443.273 168.906 449.666 179.206C456.068 189.521 460.165 201.552 462.652 216.508C467.294 244.419 466.224 281.559 464.679 335.213C464.552 339.628 464.421 344.156 464.291 348.799C463.868 363.835 462.655 375.409 460.635 384.291C458.613 393.18 455.849 399.071 452.535 403.021C446.191 410.585 436.516 412.52 419.997 411.659C413.54 411.322 406.268 410.57 398.15 409.73C365.305 406.332 318.625 401.503 256.204 417.006C219.151 426.208 191.482 418.865 169.269 401.631C146.744 384.154 129.427 356.192 114.134 323.389C103.982 301.613 94.9114 278.156 85.8043 254.605C81.1717 242.625 76.5296 230.621 71.731 218.801C57.6226 184.049 42.216 151.064 22.0185 126.972C5.27119 106.995 2.43836 89.8345 6.87797 75.1449C11.4465 60.0286 24.0447 46.366 40.5948 34.4589Z"
                  stroke="#F0E967"
                  strokeWidth="10"
                />
              </svg>
              <h3 className="verde subt-conoce">
                Nuestro <br /> Equipo
              </h3>
              <p className="negro text-conoce">
                Conoce a quienes han decidido otorgar sus dones y talentos, al
                servicio de otras y otros. Éste es nuestro equipo.
              </p>
              <Link className="corazon-conoce" to="/nuestro-equipo">
                <img src={iconoEquipo} alt="" />
              </Link>
            </div>
          </ScrollAnimation>
        </section>

        <section className="round-ctas">
          <div className="round-cta-cont">
            <h3 className="negro">Voluntariado en Rhesident Org.</h3>
            <Link to="/voluntariado">
              <div className="btn-round">
                <img src={iconoMas} alt="" />
              </div>
            </Link>

            <p className="negro">Conocer más</p>
          </div>

          <div className="round-cta-cont">
            <h3 className="negro">Ayúdanos a lograr nuestro propósito</h3>
            <Link to="/como-apoyar">
              <div className="btn-round">
                <img src={iconoMas} alt="" />
              </div>
            </Link>
            <p className="negro">Descubre cómo</p>
          </div>
        </section>

        <section className="contacto">
          <div className="newsletter-cont">
            <h2 className="blanco">Suscríbete al newsletter</h2>
            <p className="blanco">
              La diversidad nutre nuestro ser. Conoce nuevas propuestas,
              acciones e iniciativas; ejercita tu pensamiento crítico con
              nuestro blog y descubre cómo involucrarte en nuestros proyectos.
            </p>
            <CustomMailchimpForm variacion="normal"></CustomMailchimpForm>
          </div>
          <div className="separador-contacto-horizontal">
            <div className="circulo-separador"></div>
            <div className="linea-separador-horizontal"></div>
            <div className="circulo-separador"></div>
          </div>
          <div className="separador-contacto-vertical">
            <div className="circulo-separador"></div>
            <div className="linea-separador"></div>
            <div className="circulo-separador"></div>
          </div>
          <div className="info-contacto">
            <h2 className="blanco">Contáctanos</h2>
            <p className="blanco">
              Siempre hay maneras de acercarnos, aún en la distancia. Te dejamos
              todas nuestras vías de comunicación y redes sociales para que te
              pongas en contacto con nuestro equipo.
            </p>
            <div className="redes">
              <a href="https://www.facebook.com/rhesident.org">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/rhesident_org/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com/rhesident_org">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/rhesident-org/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="mailto:contacto@rhesident.org">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    );
}

export default LandingPage