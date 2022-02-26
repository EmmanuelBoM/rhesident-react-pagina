import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import '../styles/base.css'
import '../styles/Donaciones.css'
import downArrow from '../assets/down_arrow_light.svg'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import NavMovil from '../components/NavMovil';

//Firebase imports
import {db} from '../firebaseConfig'
import {query, collection, getDocs,where, doc, getDoc, orderBy} from "@firebase/firestore";

function Donaciones() {
    const [portadaDonaciones, setPortadaDonaciones] = useState('')
    const portadaRef = doc(db, "recursosGenerales", "aSTTw9VJfhoZbNYB7MKk");
    const [navMovilVisibility, setNavMovilVisibility] = useState(false)

    const [beneficiarios, setBeneficiarios]= useState([])
    const beneficiariosCollectionRef = collection(db, "beneficiarios")
    const q_beneficiarios = query(beneficiariosCollectionRef, where("visible", "==",true), orderBy("nombre"));

    useEffect (()=>{

        const getPortada = async () => {
            const portadaDoc = await getDoc(portadaRef);
            setPortadaDonaciones(portadaDoc.data().url);
        };

        const getBeneficiarios = async () => {
            const data = await getDocs(q_beneficiarios);
            setBeneficiarios(data.docs.map(((doc)=>({...doc.data(), id:doc.id}))))
        }
        
        getPortada();
        getBeneficiarios();
      }, [])

    const portadaImg = {
        backgroundImage: `url(${portadaDonaciones})`,
    };
    return (
      <main>
        <Helmet>
          <title>Cómo Apoyar | Rhesident</title>
        </Helmet>
        {navMovilVisibility ? (
          <NavMovil setNavMovilVisibility={setNavMovilVisibility}></NavMovil>
        ) : null}
        <NavHeader
          textColor="blanco"
          setNavMovilVisibility={setNavMovilVisibility}
        ></NavHeader>
        <section className="hero-donaciones" style={portadaImg}>
          <div className="color-overlay">
            <h1 className="titulo-hero blanco">Apoya nuestra causa</h1>
            <p className="origen-descripcion blanco descripcion-hero">
              Buscamos contrarrestar la exclusión y vulnerabilidad en
              comunidades, que viven bajo condiciones de segregación y
              fragmentación, siendo estas ocasionadas por la urbanización
              desmesurada. Intentamos fortalecer su sentido de pertenencia.
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
        <section className="tipos-donaciones">
          <div className="cont-tipo-donaciones donar">
            <i class="fa-solid fa-circle-dollar-to-slot icono-donaciones"></i>
            <p className="mb4 blanco texto-tipo-donacion">
              Gracias por tus aportaciones para que sigamos cumpliendo con
              nuestro propósito y logrando nuestra causa.
            </p>
            <Link to="/dona-ahora">
              <button className="btn-donaciones">Donaciones</button>
            </Link>
          </div>
          <div className="cont-tipo-donaciones idea">
            <i class="fa-solid fa-lightbulb icono-donaciones"></i>
            <p className="mb4 verde  texto-tipo-donacion">
              Nos encanta tejer redes colaborativas para llevar a cabo ideas y
              crear proyectos. ¡Escríbenos lo que tienes en mente!
            </p>
            <Link to="/cuentanos-tu-idea" target="_blank">
              <button className="btn-donaciones">Cuéntanos tu idea</button>
            </Link>
          </div>
          <div className="cont-tipo-donaciones agenda-entrevista">
            <i class="fa-solid fa-calendar-day icono-donaciones"></i>
            <p className="mb4  texto-tipo-donacion">
              Sabemos que en ocasiones es necesario expresar las ideas de viva
              voz. Agenda una reunión virtual o presencial.
            </p>
            <a href="https://calendly.com/rhesidentorg" target="_blank">
              <button className="btn-donaciones">Agenda una entrevista</button>
            </a>
          </div>
        </section>

        <section className="beneficiarios">
          <h2 className="negro">Nuestros beneficiarios</h2>
          <div className="galeria-aliados">
            {beneficiarios.map((alianza) => {
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

export default Donaciones;
