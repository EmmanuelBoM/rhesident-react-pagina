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
                <p className="blanco descripcion-dona">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt similique porro numquam aperiam reiciendis et, aliquam error ipsum quibusdam necessitatibus?</p>
                <div className="card-paypal">
                    <img src={paypalLogo} alt="" />
                    <button className="btn-dona-paypal">Donar ahora</button>
                </div>
                <div className="dona-bottom">
                    <div className="frase">
                        <h4 className="blanco">"Las grandes oportunidades para ayudar a los demás raras veces vienen, pero las pequeñas nos rodean todos los días."</h4>
                        <p className="autor-frase blanco">Sally Koch.</p>
                    </div>
                    <img src="" alt="" className="gif-dona" />
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
}

export default PaypalDona;
