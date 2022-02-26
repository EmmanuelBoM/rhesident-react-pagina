import React,{useState} from 'react';
import { Helmet } from 'react-helmet';
import paypalLogo from '../assets/paypal_logo.svg'
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import NavMovil from '../components/NavMovil';

import '../styles/base.css'
import '../styles/LandingPage.css'
import '../styles/PaypalDona.css'

function PaypalDona() {
    const [navMovilVisibility, setNavMovilVisibility] = useState(false)
    return (
        <main className='main-paypal'>
            <Helmet>
                <title>Dona ahora | Rhesident</title>
            </Helmet>
            {navMovilVisibility ? (
                <NavMovil setNavMovilVisibility={setNavMovilVisibility}></NavMovil>
            ) : null}
            <NavHeader textColor='blanco' setNavMovilVisibility={setNavMovilVisibility}></NavHeader>
            <section className="contenido-dona">
                <h2 className="titulo-hero blanco">Dona ahora</h2>
                <p className="blanco descripcion-dona">Desde aquí puedes apoyarnos a seguir trabajando por nuestro propósito y causa. Cada aporte es valioso.</p>
                <div className="card-paypal">
                    <img src={paypalLogo} alt="" />
                    <a href='https://www.paypal.com/paypalme/rhesidentorg' className="btn-dona-paypal">Donar ahora</a>
                </div>
                <div className="dona-bottom">
                    <div className="frase">
                        <h4 className="blanco">"Sé que las cosas pueden incluso empeorar, pero también sé que es posible intervenir para mejorarlas".</h4>
                        <p className="autor-frase blanco">Paulo Freire</p>
                    </div>
                    <div className="img-dona"></div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
}

export default PaypalDona;
