import React, {useState} from 'react'
import '../styles/base.css'
import '../styles/OverlayInvitacion.css'
import "animate.css/animate.min.css";
import {Link} from 'react-router-dom'


function OverlayInvitacion(props) {
return (
    <div>
        <div className="overlay-top">
            <Link to='/como-apoyar'><button className="btn-invita-donar"><span className="bold">Apoya</span> nuestra causa</button></Link>
            <Link to='/voluntariado'><button className="btn-invita-voluntariado">Conviértete en <span className="bold">voluntario</span></button></Link>
        </div>
    </div>
    )
}

export default OverlayInvitacion
