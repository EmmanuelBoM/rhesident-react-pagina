import React, {useState} from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import NavMovil from '../components/NavMovil';

import '../styles/base.css'
import '../styles/extras.css'

import ilustracion404 from '../assets/ilustracion_404.svg'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';


function Vista404() {
    const [navMovilVisibility, setNavMovilVisibility] = useState(false)
    return (
        <main>
            <Helmet>
                <title>Página no encontrada</title>
            </Helmet>
            {navMovilVisibility ? (
                <NavMovil setNavMovilVisibility={setNavMovilVisibility}></NavMovil>
            ) : null}
            <NavHeader setNavMovilVisibility={setNavMovilVisibility}></NavHeader>
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
