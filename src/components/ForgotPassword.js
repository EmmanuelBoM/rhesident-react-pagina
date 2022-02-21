import React, { useState } from "react";

function ForgotPassword(props) {
  return (
    <div className="card-login">
      <h3 className="negro">¿Olvidaste tu contraseña?</h3>
      <p className="negro subt-forgot">
        Ingresa tu correo electrónico. Te enviaremos un correo de
        restablecimiento.
      </p>
      <form action="" className="login-form">
        <label htmlFor="email" className="input-label">
          Correo Electrónico
        </label>
        <input
          name="email"
          type="email"
          className="input-gral"
          required
          placeholder="Escribe correo de administrador"
          onChange={(e) => {
            props.setEmail(e.target.value);
          }}
        />
        {props.errorVisibility ? (
          <div className="login-error">
            <i class="fa-solid fa-circle-exclamation error-icon"></i>
            <p className="login-error-msg">{props.errorMsg}</p>
          </div>
        ) : null}

        {props.successVisibility ? (
          <div className="login-success">
            <i class="fa-solid fa-circle-exclamation error-icon"></i>
            <p className="login-error-msg">{props.successMsg}</p>
          </div>
        ) : null}

        <button
          className="btn-login"
          type="button"
          onClick={props.forgotPassword}
        >
          Enviar correo
        </button>
      </form>
      <button className="btn-forgot" onClick={props.action}>
        Iniciar Sesión
      </button>
    </div>
  );
}

export default ForgotPassword;
