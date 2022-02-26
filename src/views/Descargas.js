import React, {useState, useEffect} from 'react';
import ilustracionDescargas from '../assets/ilustracion_descargas.svg'
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import NavMovil from '../components/NavMovil';

import '../styles/base.css'
import '../styles/Descargas.css'

//Firebase imports
import {db} from '../firebaseConfig'
import {query, collection, getDocs,where} from "@firebase/firestore";
import { Helmet } from 'react-helmet';

function Descargas() {
    const [descargas, setDescargas] = useState([])
    const [navMovilVisibility, setNavMovilVisibility] = useState(false)

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
            <Helmet>
                <title>Descargas | Rhesident</title>
            </Helmet>
            {navMovilVisibility ? (
                <NavMovil setNavMovilVisibility={setNavMovilVisibility}></NavMovil>
            ) : null}
            <NavHeader setNavMovilVisibility={setNavMovilVisibility}></NavHeader>
            <section className="header-descargas">
                <img src={ilustracionDescargas} alt="" className="img-descargas" />
                <div className="text-header-descargas">
                    <h1 className="negro">Descargas</h1>
                    <p className="header-subt verde">Aquí encontrarás diferentes materiales que hemos elaborado para ti, ¡nos encanta compartir!</p>
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
