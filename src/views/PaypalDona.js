import React from 'react';
import paypalLogo from '../assets/paypal_logo.svg'
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import '../styles/base.css'
import '../styles/LandingPage.css'
import '../styles/PaypalDona.css'

function PaypalDona() {
    return (
        <main className='main-paypal'>
            <NavHeader textColor='blanco'></NavHeader>
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
