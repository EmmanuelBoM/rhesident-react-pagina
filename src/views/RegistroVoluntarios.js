import React from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import '../styles/base.css'
import '../styles/Formularios.css'
import imgRegistroVoluntario from '../assets/ilustracion_registro_voluntariado.svg'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function RegistroVoluntarios() {

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
        <main>
            <NavHeader></NavHeader>
            <div className="titulo-header">
                <h1 className="verde">Completa el registro para <br /> tu voluntariado</h1>
            </div>
           
            <section className="registro-contenido">
                <img src={imgRegistroVoluntario} alt="" className="img-registro" />
                <div className="cont-formulario-registro">
                    <form action="" className="formulario-registro">
                        <label htmlFor="" className='input-label'>Nombre Completo</label>
                        <input type="text"  placeholder="Nombre completo" name="" id="" className="input-gral" required/>
                        <label htmlFor="" className='input-label'>Correo electrónico</label>
                        <input type="email"  placeholder="Nombre completo" name="" id="" className="input-gral" required/>
                        <label htmlFor="" className='input-label'>Número de teléfono</label>
                        <input type="tel"  placeholder="10 dígitos" name="" id="" className="input-gral" required/>
                        <label htmlFor="" className='input-label'>Lugar de residencia</label>
                        <input type="text"  placeholder="Ciudad o comunidad" name="" id="" className="input-gral" required/>
                        <label htmlFor="" className="input-label">Modalidad de voluntariado</label>
                        <Select styles={customSelectStyles} options={options} placeholder='Selecciona una modalidad'/>
                        <label htmlFor="" className="input-label">¿Por qué te interesaría ser parte de la organización?</label>
                        <textarea name="" id="" cols="30" rows="8" className="input-gral" placeholder='Cuéntanos'></textarea>
                        <button className="btn-enviar">
                            <p>Enviar</p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </form>
                </div>
            </section>
            <Footer></Footer>
        </main>
  );
}

export default RegistroVoluntarios;
