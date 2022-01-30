import React, {useState} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/base.css'
import '../styles/AdminLayout.css'
import ilustracionAgregarProyecto from '../assets/ilustracion_agregar_proyecto.svg'
import Select from 'react-select'

const options = [
  { value: 'Cultura', label: 'Cultura' },
  { value: 'Arte', label: 'Arte' },
  { value: 'Urbanismo', label: 'Urbanismo' },
  { value: 'Sustentabilidad', label: 'Sustentabilidad' }
]

function AdminAgregarProyecto() {

    const customSelectStyles = {
        control: (base, state) => ({
            ...base,
            border: "2px solid #cfcfc9",
            boxShadow: state.isFocused ? null : null,
            padding: "0.3rem 0rem",
            borderRadius: "1rem",
            fontSize: "1.8rem",
            color: "#F7F7F7",
            fontFamily: "Lato",
            textAlign: "start",
            backgroundColor: 'rgba(255, 255, 255, 0)',
            marginBottom: '2rem',
            "&:focus ": {
                outline: "none !important",
                border: "2px solid var(--p-400)"
              },
          }),
        placeholder: base =>({
            ...base,
            color: "#878778"
        }),
        menu: base => ({
            ...base,
            borderRadius: "1rem",
            background: "#FCFCFC",
            color: "#878778",
            fontSize: "1.8rem",
            textAlign: "start",
            fontFamily: "Lato",
            marginTop: '-1.4rem'
        
        }),
        menuList: base => ({
            ...base,
            borderRadius: "1rem",
        }),
        singleValue: base => ({
            ...base,
            color: "#1b1b18",
        }),
        input: base => ({
            ...base,
            color: "#1b1b18",
        }),
        dropdownIndicator: base => ({
            ...base,
            color: "#164453"
        }),
        option: (base,{data, isDisabled, isFocused,isSelected}) => ({
            ...base,
            color: "#1A1A1A",
            backgroundColor: isDisabled ? undefined: isSelected,
            "&:hover ": {
                background: "#164453",
                color:"#f0f0ee"
              },
        }),
        container: base => ({
            ...base,
            "@media only screen and (max-width: 576px)": {
                ...base["@media only screen and (max-width: 576px)"],
                width:"100%",
        },
        })
    }
  
    return (
        <body className="body-admin">
            <AdminNavbar activeTab='proyectos'></AdminNavbar>
            <main className='main-admin'>
                <section className="admin-form-content">
                    <div className="header-form">
                        <img src={ilustracionAgregarProyecto} alt="" className="ilustracion-form" />
                        <h2 className="titulo-admin-form negro">Agrega un <br/> proyecto nuevo</h2>
                    </div>
                    <div className="cont-formulario-agregar">
                        <form action="" className="formulario-registro">
                            <label htmlFor="" className='input-label'>Nombre del proyecto</label>
                            <input type="text"  placeholder="Nombre" name="" id="" className="input-gral" required/>
                            <label htmlFor="" className="input-label">Descripción breve</label>
                            <textarea name="" id="" cols="30" rows="4" className="input-gral" placeholder='90 caracteres máximo'></textarea>
                            <label htmlFor="" className="input-label">Descripción general</label>
                            <textarea name="" id="" cols="30" rows="8" className="input-gral" placeholder='Escribe aquí'></textarea>
                            
                            <label htmlFor="" className="input-label">Ejes de acción</label>
                            <Select styles={customSelectStyles} options={options} placeholder='Selecciona uno o más ejes'/>
                            
                            <label htmlFor="" className="input-label">Propósito</label>
                            <textarea name="" id="" cols="30" rows="4" className="input-gral" placeholder='Escribe aquí'></textarea>
                            <label htmlFor="" className="input-label">Procesos</label>
                            <textarea name="" id="" cols="30" rows="8" className="input-gral" placeholder='Escribe aquí'></textarea>
                            <button className="btn-enviar">
                                <p>Agregar proyecto</p>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </body>
        
    );
}

export default AdminAgregarProyecto;
