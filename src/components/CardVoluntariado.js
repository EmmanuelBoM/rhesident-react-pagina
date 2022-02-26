import React from 'react';
import '../styles/base.css'
import '../styles/Voluntariado.css'
import {Link} from 'react-router-dom'

function CardVoluntariado(props) {

    function setActive(){
        props.setVoluntariadoActive(props.tipoVoluntariado)
        props.setSwiperVisibility(true)
    }

    return (
      <div
        className={
          props.voluntariadoActive === props.tipoVoluntariado
            ? `cont-tipo-voluntariado cont-voluntariado-active`
            : `cont-tipo-voluntariado`
        }
      >
        {props.tipoVoluntariado === "Presencial" ? (
          <i
            class={
              props.voluntariadoActive === props.tipoVoluntariado
                ? " text-voluntariado-active fa-solid  fa-handshake-angle icono-voluntariado"
                : "fa-solid  fa-handshake-angle icono-voluntariado"
            }
          ></i>
        ) : null}
        {props.tipoVoluntariado === "Híbrido" ? (
          <i
            class={
              props.voluntariadoActive === props.tipoVoluntariado
                ? " text-voluntariado-active fa-solid fa-chalkboard-user icono-voluntariado"
                : "fa-solid fa-chalkboard-user icono-voluntariado"
            }
          ></i>
        ) : null}
        {props.tipoVoluntariado === "Virtual" ? (
          <i
            class={
              props.voluntariadoActive === props.tipoVoluntariado
                ? " text-voluntariado-active fa-solid fa-desktop icono-voluntariado"
                : "fa-solid fa-desktop icono-voluntariado"
            }
          ></i>
        ) : null}
        <div className="cont-nombre-voluntariado">
          <h3
            className={
              props.voluntariadoActive === props.tipoVoluntariado
                ? `nombre-voluntariado text-voluntariado-active`
                : `nombre-voluntariado`
            }
          >
            {props.tipoVoluntariado}
          </h3>
          <div className="cont-i-explicacion">
            <i
              className={
                props.voluntariadoActive === props.tipoVoluntariado
                  ? `text-voluntariado-active`
                  : null
              }
              class={
                props.voluntariadoActive === props.tipoVoluntariado
                  ? "text-voluntariado-active fa-regular fa-circle-question icono-pregunta"
                  : "fa-regular fa-circle-question icono-pregunta"
              }
            ></i>
            <div className="explicacion-tipo">
              {props.tipoVoluntariado === "Presencial" ? <p className="negro">Si te encuentras en la ciudad de Pachuca o en zonas aledañas, este es tu momento para involucrarte.</p> : null}
              {props.tipoVoluntariado === "Híbrido" ? <p className="negro">Si te agrada el trabajo remoto y tienes posibilidad de acompañar ciertos procesos presenciales, esto es para ti.</p> : null}
              {props.tipoVoluntariado === "Virtual" ? <p className="negro">Tenemos también muchos proyectos los cuales requieren de colaboración a distancia, no lo dudes, ¡regístrate!</p> : null}
            </div>
          </div>
         
          
        </div>
        
        <Link to="/registro-voluntariado" target="_blank">
          <button
            className={
              props.voluntariadoActive === props.tipoVoluntariado
                ? `btn-voluntariado-active btn-voluntariado`
                : `btn-voluntariado`
            }
          >
            Aplica aquí
          </button>
        </Link>
        <button
          className={
            props.voluntariadoActive === props.tipoVoluntariado
              ? `btn-ver-proyectos text-voluntariado-active`
              : `btn-ver-proyectos`
          }
          onClick={setActive}
        >
          Ver Proyectos
        </button>
        <i
          class={
            props.voluntariadoActive === props.tipoVoluntariado
              ? "fa-solid fa-angles-down scroll-down-link flecha-card-v"
              : "dnone"
          }
        ></i>
      </div>
    );
}

export default CardVoluntariado;
