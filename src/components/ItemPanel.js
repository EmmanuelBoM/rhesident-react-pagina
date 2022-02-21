import React, { useEffect, useState } from "react";
import "../styles/base.css";
import "../styles/ItemPanel.css";
import { Link } from "react-router-dom";

//Firebase Imports
import { db } from "../firebaseConfig";
import { doc, updateDoc } from "@firebase/firestore";

function ItemPanel(props) {
  const dbRef = doc(db, props.collection, props.doc.id);

  const stylesImg = {
    backgroundImage:
      props.objetivo === "miembro"
        ? `url(${props.doc.imgPerfilURL})`
        : `url(${props.doc.imgURL})`,
  };

  function showModal() {
    props.setModalInfo(props.doc.nombre);
    props.setId(props.doc.id);
    props.setModalVisibility(true);
  }

  const toggleItemVisibility = async () => {
    let visibility;
    if (props.doc.visible) {
      visibility = { visible: false };
    } else {
      visibility = { visible: true };
    }

    await updateDoc(dbRef, visibility);
    window.location.reload();
  };

  return (
    <div className="cont-item-panel">
      <div className="img-item-panel" style={stylesImg}></div>
      <p className="nombre-item-panel negro">{props.doc.nombre}</p>
      <div className="acciones-item-panel">
        <i
          class={
            props.doc.visible
              ? "fa-solid fa-eye icono-accion-tabla icono-tabla-habilitar"
              : "fa-solid fa-eye-slash icono-accion-tabla icono-tabla-deshabilitar"
          }
          onClick={toggleItemVisibility}
        ></i>
        <Link
          to={`/editar-${props.objetivo}/${props.doc.id}`}
          className="link-decoration"
        >
          <i class="fa-solid fa-pen-to-square icono-accion-tabla icono-tabla-editar"></i>
        </Link>
        <i
          class="fa-solid fa-trash icono-accion-tabla icono-tabla-eliminar"
          onClick={showModal}
        ></i>
      </div>
    </div>
  );
}

export default ItemPanel;
