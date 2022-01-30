import React, {useState} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/base.css'
import '../styles/AdminLayout.css'
import ilustracionAgregarProyecto from '../assets/ilustracion_agregar_proyecto.svg'
import Select from 'react-select'
import CreatableSelect, { useCreatable } from 'react-select/creatable';

const ejesAccion = [
  { value: 'Cultura', label: 'Cultura' },
  { value: 'Arte', label: 'Arte' },
  { value: 'Urbanismo', label: 'Urbanismo' },
  { value: 'Sustentabilidad', label: 'Sustentabilidad' }
]

const estatusSelect = [
    { value: 'Activo', label: 'Activo' },
    { value: 'Pasado', label: 'Pasado' },
    { value: 'Próximo', label: 'Próximo' }
  ]

const modalidadesSelect = [
{ value: 'Presencial', label: 'Presencial' },
{ value: 'Híbrido', label: 'Híbrido' },
{ value: 'Remoto', label: 'Remoto' }
]

function AdminAgregarProyecto() {
    const components={DropdownIndicator: null}

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
    
    const galeriaArr =[
        {url: 'https://images.unsplash.com/photo-1505820996465-b8bf9918eb60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxODg3MTUyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'},
        {url: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8MTg4NzE1Mnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'},
        {url: 'https://images.unsplash.com/photo-1464288550599-43d5a73451b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjV8MTg4NzE1Mnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'},
        {url: 'https://images.unsplash.com/photo-1566836610593-62a64888a216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDN8MTg4NzE1Mnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'}
    ]

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
                            
                            <label htmlFor="" className="input-label">Imagen principal</label>
                            <div className="file-preview">
                                <input type="file" name="" id="" className="input-archivo" />
                                <img src={''} alt="" className="preview-img" />
                            </div>

                            <label htmlFor="" className="input-label">Etiquetas</label>
                            <CreatableSelect
                                components={components}
                                isClearable
                                isMulti
                                styles={customSelectStyles}
                                placeholder="Escribe una o más etiquetas. Enter para agregar otra."
                            />

                            <label htmlFor="" className="input-label">Ejes de acción</label>
                            <Select styles={customSelectStyles} options={ejesAccion} placeholder='Selecciona uno o más ejes' isMulti/>

                            <label htmlFor="" className="input-label">Estatus</label>
                            <Select styles={customSelectStyles} options={estatusSelect} placeholder='Selecciona el estatus del proyecto'/>

                            <label htmlFor="" className="input-label">Modalidad</label>
                            <Select styles={customSelectStyles} options={modalidadesSelect} placeholder='Selecciona la modalidad del proyecto'/>
                            
                            <label htmlFor="" className="input-label">Propósito</label>
                            <textarea name="" id="" cols="30" rows="4" className="input-gral" placeholder='Escribe aquí'></textarea>
                            
                            <label htmlFor="" className="input-label">Objetivos</label>
                            <CreatableSelect
                                components={components}
                                isClearable
                                isMulti
                                styles={customSelectStyles}
                                placeholder="Escribe los objetivos. Enter para agregar otro."
                            />
                            
                            <label htmlFor="" className="input-label">Procesos</label>
                            <textarea name="" id="" cols="30" rows="8" className="input-gral" placeholder='Escribe aquí'></textarea>
                            
                            <label htmlFor="" className="input-label">Galería de imagenes</label>
                            <div className="file-preview-multi">
                                <input type="file" name="" id="" className="input-archivo" />
                                <div className="cont-galeria">
                                    {galeriaArr.map((img, i) =>
                                        <img src={img.url} alt="" className="preview-img" />
                                    )}
                                </div>
                                
                            </div>

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
