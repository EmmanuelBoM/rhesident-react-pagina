import React, {useState} from 'react'
import '../styles/base.css'
import '../styles/OverlayInvitacion.css'
import "animate.css/animate.min.css";


function OverlayInvitacion(props) {
return (
    <div>
        <div className="overlay-top">
            <button className="btn-invita-donar"><span className="bold">Apoya</span> nuestra causa</button>
            <button className="btn-invita-voluntariado">Conviértete en <span className="bold">voluntario</span></button>
        </div>
    </div>
    )
}

export default OverlayInvitacion
