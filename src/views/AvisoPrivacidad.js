import React, {useState, useEffect} from 'react'
import logoAviso from '../assets/logo_aviso.svg'
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import NavMovil from '../components/NavMovil';
import '../styles/base.css'
import '../styles/AvisoPrivacidad.css'
import { Link } from 'react-router-dom';

function AvisoPrivacidad() {
    const [navMovilVisibility, setNavMovilVisibility] = useState(false)
  return (
    <main>
      <Helmet>
        <title>Aviso de Privacidad</title>
      </Helmet>
      {navMovilVisibility ? (
        <NavMovil setNavMovilVisibility={setNavMovilVisibility}></NavMovil>
      ) : null}
      <NavHeader setNavMovilVisibility={setNavMovilVisibility}></NavHeader>
      <section className="header-aviso">
        <img src={logoAviso} alt="Logotipo Oficial" className="img-aviso" />
        <h1 className="verde titulo-aviso">Aviso de privacidad</h1>
      </section>
      <section className="cont-aviso">
        <h3 className="negro mb4">Aviso simplificado</h3>
        <p className="negro aviso-texto">
          La Asociación Civil <span className="bold">Organización Rhesident A.C.</span>  (en adelante
          Rhesident), con domicilio en Calle Real Poniente, número 104,
          Fraccionamiento Real del Valle, Pachuca de Soto, Hidalgo, C.P. 42086,
          es responsable del manejo y tratamiento de su información personal. Le
          informamos que los datos que Usted llegue a proporcionar a través de
          este medio serán utilizados con el fin de atender sus dudas,
          comentarios, sugerencias, proporcionarle información sobre nuestros
          servicios, para el mantenimiento de la relación jurídica que exista
          entre Usted y la Asociación, actualizar su información personal,
          mantener contacto con Usted y para todo tipo de aclaraciones
          relacionadas con la prestación de nuestros servicios. Esta información
          no será utilizada con fines de mercadeo, publicidad y prospección
          comercial. <br /> <br /> Para conocer nuestro <span className="bold">Aviso de Privacidad integral</span> , Usted
          puede visitar nuestro sitio a través del vínculo <Link to="/aviso-integral">https://www.rhesident.org/aviso-integral</Link>
        </p>
      </section>
      <Footer></Footer>
    </main>
  );
}

export default AvisoPrivacidad