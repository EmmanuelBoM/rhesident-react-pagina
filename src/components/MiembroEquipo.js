import React from 'react'
import '../styles/MiembroEquipo.css'
import imgMiembro from '../assets/miembro_prueba.png'

function MiembroEquipo(props) {

    function showModal(){
        props.setModalVisibility(true);
    }

    return (
        <div className="cont-miembro" onClick={showModal}>
            <svg className='miembro-svg' width="261" height="261" viewBox="0 0 261 261" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id='imgMiembro' patternUnits='userSpaceOnUse' x="0" y="0" width="1925" height="1422">
                        <image href={imgMiembro} width="261" height="261" />             
                    </pattern>
                </defs>
                <path d="M258.806 120.756C272.582 60.5354 211.893 -4.75401 174.289 0.685922C43.2306 19.6444 6.74284 107.498 2.27494 145.663C-12.0223 244.395 81.3317 262.635 129.982 260.157C207.053 249.748 253.858 142.385 258.806 120.756Z" fill="url(#imgMiembro)"/>
            </svg>
            <h4 className="nombre-miembro verde">José Arenas Rodriguez</h4>
            <p className="cargo-miembro verde">Community Manager</p>
        </div>
    )
}

export default MiembroEquipo
