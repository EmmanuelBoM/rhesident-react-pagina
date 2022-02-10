import React from 'react'
import '../styles/MiembroEquipo.css'

function MiembroEquipo(props) {

    function showModal(){
        props.setMiembroModal(props.miembro)
        props.setModalVisibility(true);
    }

    return (
        <div className="cont-miembro" onClick={showModal}>
            <svg className='miembro-svg' width="261" height="261" viewBox="0 0 261 261" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id={`imgMiembro${props.miembro.id}`} className='img-miembro' patternUnits='userSpaceOnUse' x="0" y="0" width="100%" height="100%">
                        <image  className='img-miembro-perfil' href={props.miembro.imgPerfilURL}  width="261" height="261" />             
                    </pattern>
                </defs>
                <path d="M258.806 120.756C272.582 60.5354 211.893 -4.75401 174.289 0.685922C43.2306 19.6444 6.74284 107.498 2.27494 145.663C-12.0223 244.395 81.3317 262.635 129.982 260.157C207.053 249.748 253.858 142.385 258.806 120.756Z" fill={`url(#imgMiembro${props.miembro.id})`}/>
            </svg>
            <h4 className="nombre-miembro verde">{props.miembro.nombre}</h4>
            <p className="cargo-miembro verde">{props.miembro.areaEspecializacion}</p>
        </div>
    )
}

export default MiembroEquipo
