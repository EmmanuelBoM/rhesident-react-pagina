import React from "react";
import "../styles/Taller.css";

function Taller(props) {
    function showModal() {
        props.setModalVisibility(true);
        props.setTaller(props.taller);
    }
     return (
        <div className="taller" onClick={showModal}>
        <div className="cont-taller">
            <svg
            className="taller-svg"
            width="261"
            height="261"
            viewBox="0 0 261 261"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <defs>
                <pattern
                id={`imgTaller${props.taller.id}`}
                patternUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="100%"
                height="100%"
                >
                <image
                    className="img-taller-ind"
                    href={props.taller.imgURL}
                    width="410"
                    height="280"
                />
                </pattern>
            </defs>
            <path
                d="M258.806 120.756C272.582 60.5354 211.893 -4.75401 174.289 0.685922C43.2306 19.6444 6.74284 107.498 2.27494 145.663C-12.0223 244.395 81.3317 262.635 129.982 260.157C207.053 249.748 253.858 142.385 258.806 120.756Z"
                fill={`url(#imgTaller${props.taller.id})`}
            />
            </svg>
        </div>
        <div className="info-taller">
            <h4 className="nombre-taller">{props.taller.nombre}</h4>
            <p className="duracion-taller">{`${props.taller.duracion} horas`}</p>
        </div>
        </div>
    );
}

export default Taller;
