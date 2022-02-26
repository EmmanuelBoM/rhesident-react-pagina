import React, { useState } from "react";

function LoginForm(props) {
  return (
    <div className="card-login">
      <h4 className="negro">Bienvenido</h4>
      <h3 className="negro">Inicia sesión</h3>
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
        <label htmlFor="contrasena" className="input-label">
          Contraseña
        </label>
        <input
          name="contrasena"
          type="password"
          className="input-gral"
          required
          placeholder="Escribe tu contraseña"
          onChange={(e) => {
            props.setPassword(e.target.value);
          }}
        />

        {props.errorVisibility ? (
          <div className="login-error">
            <i class="fa-solid fa-circle-exclamation error-icon"></i>
            <p className="login-error-msg">{props.errorMsg}</p>
          </div>
        ) : null}

        <button className="btn-login" type="button" onClick={props.signIn}>
          Iniciar sesión
        </button>
      </form>
      <button className="btn-forgot" onClick={props.action}>
        Olvidé mi contraseña
      </button>
    </div>
  );
}

export default LoginForm;
