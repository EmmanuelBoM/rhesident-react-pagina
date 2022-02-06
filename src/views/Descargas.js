import React, {useState, useEffect} from 'react';
import ilustracionDescargas from '../assets/ilustracion_descargas.svg'
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import '../styles/base.css'
import '../styles/Descargas.css'

//Firebase imports
import {db} from '../firebaseConfig'
import {query, collection, getDocs,where} from "@firebase/firestore";

function Descargas() {
    const [descargas, setDescargas] = useState([])


    const descargasCollectionRef = collection(db, "descargas")
    const q= query(descargasCollectionRef, where("visible", "==",true));
    useEffect (()=>{
        const getDescargas= async () => {
          const data = await getDocs(q);
          setDescargas (data.docs.map(((doc)=>({...doc.data(), id:doc.id}))))
        }

        getDescargas();

      }, [])
    return (
        <main>
             <NavHeader></NavHeader>
            <section className="header-descargas">
                <img src={ilustracionDescargas} alt="" className="img-descargas" />
                <div className="text-header-descargas">
                    <h1 className="negro">Descargas</h1>
                    <p className="header-subt verde">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit maiores commodi, error praesentium placeat eius.</p>
                </div>
            </section>
            <section className="descargas-lista">
                {
                    descargas.map((descarga)=>{
                        return(
                            <div className="descarga">
                                <div className="descarga-l">
                                    <div className="header-descarga">
                                        <div className="barra-header-descarga"></div>
                                        <h3 className="nombre-descarga verde">{descarga.nombre}</h3>
                                    </div>
                                    <p className="descripcion-descarga negro">{descarga.descripcion}</p>
                                </div>
                                <div className="descarga-r">
                                    <a href={descarga.archivoURL} download target="_blank"><i class="fa-solid fa-download icono-descarga"></i></a>
                                </div>
                            </div>
                        )
                    })
                }
                
            </section>
            <Footer></Footer>
        </main>
        );
}

export default Descargas;
