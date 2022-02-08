import React from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import '../styles/base.css'
import '../styles/extras.css'
import ilustracion404 from '../assets/ilustracion_404.svg'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';

function Vista404() {
    return (
        <main>
            <Helmet>
                <title>Página no encontrada</title>
            </Helmet>
            <NavHeader></NavHeader>
            <section className="img-404">
                <img src={ilustracion404} alt="" />
                <h2 className="warning-404 verde">Ups... No hay nada por aquí :(</h2>
                <Link to='/'><h4>Regresar a la página principal</h4></Link>
            </section>
            <Footer></Footer>
        </main>
    );
}

export default Vista404;
