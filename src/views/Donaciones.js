import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import '../styles/base.css'
import '../styles/Donaciones.css'
import downArrow from '../assets/down_arrow_light.svg'
import {Link} from 'react-router-dom'

//Firebase imports
import {db} from '../firebaseConfig'
import {query, collection, getDocs,where} from "@firebase/firestore";

function Donaciones() {

    const [beneficiarios, setBeneficiarios]= useState([])
    const beneficiariosCollectionRef = collection(db, "beneficiarios")
    const q_beneficiarios = query(beneficiariosCollectionRef, where("visible", "==",true));
    useEffect (()=>{
        
        const getBeneficiarios = async () => {
        const data = await getDocs(q_beneficiarios);
        setBeneficiarios(data.docs.map(((doc)=>({...doc.data(), id:doc.id}))))
        }
    
        getBeneficiarios();
      }, [])
  return (
      <main>
            <NavHeader textColor='blanco'></NavHeader>
            <section className="hero-donaciones">
                <div className="color-overlay">
                    <h1 className='titulo-hero blanco'>Apoya nuestra causa</h1>
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
            <section className="tipos-donaciones">
                <div className="cont-tipo-donaciones donar">
                    <i class="fa-solid fa-circle-dollar-to-slot icono-donaciones"></i>
                    <p className="mb4 blanco">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit architecto soluta repellendus unde id!</p>
                    <Link to='/dona-ahora'><button className="btn-donaciones">Donaciones</button></Link>
                </div>
                <div className="cont-tipo-donaciones idea">
                    <i class="fa-solid fa-lightbulb icono-donaciones verde"></i>
                    <p className="mb4 verde">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit architecto soluta repellendus unde id!</p>
                    <Link to='/cuentanos-tu-idea'><button className="btn-donaciones">Cuéntanos tu idea</button></Link>
                </div>
                <div className="cont-tipo-donaciones agenda-entrevista">
                    <i class="fa-solid fa-calendar-day icono-donaciones"></i>
                    <p className="mb4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit architecto soluta repellendus unde id!</p>
                    <button className="btn-donaciones">Agenda una entrevista</button>
                </div>
            </section>

            <section className="beneficiarios">
                <h2 className="negro">Nuestros beneficiarios</h2>
                <div className="galeria-aliados">
                    {
                        beneficiarios.map((alianza)=>{
                            return(
                                <img src={alianza.imgURL} alt={`alianza_${alianza.nombre}`} title={alianza.nombre} className="img-alianza" />
                            )
                        })
                    }
                </div>
            </section>
            <Footer></Footer>
      </main>
  );
}

export default Donaciones;
