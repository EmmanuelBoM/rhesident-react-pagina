import React, {useState} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/base.css'
import '../styles/AdminLayout.css'
import ilustracionAgregarProyecto from '../assets/ilustracion_agregar_proyecto.svg'
import Select from 'react-select'
import CreatableSelect, { useCreatable } from 'react-select/creatable';

// Firebase Imports
import {db, storage} from '../firebaseConfig'
import {collection,addDoc} from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";



function AdminAgregarProyecto() {
    const [ejesValue, setEjesValue] = useState([])
    const [etiquetasValue, setEtiquetasValue] = useState([])
    const [objetivosValue, setObjetivosValue] = useState([])
    const [galeria, setGaleria] = useState([])
    const [imgPrincipalURL, setImgPrincipalURL] = useState('')
    const [modalidadValue, setModalidadValue] = useState('')
    const [estatusValue, setEstatusValue] = useState('')
    const [proyecto, setProyecto] = useState({})

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

    const components={DropdownIndicator: null}


    

    const handleEjesChange = selectedOptions =>{
        setEjesValue(selectedOptions);
    }

    const handleEtiquetasChange = selectedOptions =>{
        setEtiquetasValue(selectedOptions);
        console.log(etiquetasValue)
    }
    
    const handleObjetivosChange = selectedOptions =>{
        setObjetivosValue(selectedOptions);
    }

    const handleModalidadChange = selectedOption =>{
        setModalidadValue(selectedOption.value);
    }

    const handleEstatusChange = selectedOption =>{
        setEstatusValue(selectedOption.value);
    }

    const handleImgChange = async (e) =>{
        
        const file = e.target.files[0]
        const bucketPath =`images/proyectos/${proyecto.nombre}_imgPrincipal`
        
        const storageRef = ref(storage, bucketPath);
        
        await uploadBytes(storageRef, file)
        .then((snapshot) => {
            console.log('Imagen subida!');
        })
        .catch((error)=>{
            console.log(error)
        });

        setImgPrincipalURL(await getDownloadURL(storageRef))
    }

    const handleGaleriaChange = async (e) =>{
        setGaleria([])
        const files = [...e.target.files]

        const promises = files.map(async (file, i) => {
            
            const bucketPath =`images/proyectos/galeria/${proyecto.nombre}_img${i+1}`
            const storageRef = ref(storage, bucketPath);

            await uploadBytes(storageRef, file)
                .then((snapshot) => {
                    console.log('Imagen subida!');
                })
                .catch((error)=>{
                    console.log(error)
                });
            

            const downloadURL = await getDownloadURL(storageRef);
            setGaleria(prevGaleria => [...prevGaleria, downloadURL]); 
            console.log(galeria)
        });
       
    }


    function handleInputChange(e){
        let newProyecto = {
            ...proyecto,
            [e.target.name]: e.target.value,
        };

        setProyecto(newProyecto);
    }


    const proyectosCollectionRef = collection(db, "proyectos")

    const submitProyecto = async (e) => {
        e.preventDefault();
        let ejesArr = []
        let etiquetasArr=[]
        let objetivosArr = []
        ejesValue.map((eje)=>ejesArr.push(eje.value))
        etiquetasValue.map((etiqueta)=>etiquetasArr.push(etiqueta.value))
        objetivosValue.map((objetivo)=>objetivosArr.push(objetivo.value))

        console.log(proyecto)
        console.log(ejesArr)
        console.log(etiquetasArr)
        console.log(objetivosArr)
        console.log(modalidadValue)
        console.log(estatusValue)

        try{
            await addDoc(proyectosCollectionRef,
                {
                    nombre: proyecto.nombre,
                    descripcionBreve: proyecto.descripcionBreve,
                    descripcionGeneral: proyecto.descripcionGeneral,
                    estatus: estatusValue,
                    modalidad: modalidadValue,
                    proposito: proyecto.proposito,
                    procesos: proyecto.procesos,
                    ejesAccion: ejesArr,
                    etiquetas: etiquetasArr,
                    objetivos: objetivosArr,
                    imgPrincipalURL: imgPrincipalURL,
                    imgGaleria: galeria,
                    visible: true
                })
        }
        catch(error){
            console.log(error)
        }
        
       
    }

    return (
        <div className="body-admin">
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
                            <input type="text"  placeholder="Nombre" name="nombre" id="" className="input-gral" required onChange={handleInputChange}/>
                            
                            <label htmlFor="descripcionBreve" className="input-label">Descripción breve</label>
                            <textarea name="descripcionBreve" id="" cols="30" rows="4" className="input-gral" placeholder='90 caracteres máximo' onChange={handleInputChange}></textarea>
                            
                            <label htmlFor="descripcionGeneral" className="input-label">Descripción general</label>
                            <textarea name="descripcionGeneral" id="" cols="30" rows="8" className="input-gral" placeholder='Escribe aquí' onChange={handleInputChange}></textarea>
                            
                            <label htmlFor="imgPrincipalURL" className="input-label">Imagen principal</label>
                            <div className="file-preview">
                                <input type="file" name="imgPrincipalURL" id="" className="input-archivo" onChange={handleImgChange}/>
                                <img src={imgPrincipalURL} alt=""  className="preview-img" />
                            </div>

                            <label htmlFor="" className="input-label">Etiquetas</label>
                            <CreatableSelect
                                components={components}
                                isClearable
                                isMulti
                                styles={customSelectStyles}
                                placeholder="Escribe una o más etiquetas. Enter para agregar otra."
                                onChange={handleEtiquetasChange}
                            />

                            <label htmlFor="" className="input-label">Ejes de acción</label>
                            <Select styles={customSelectStyles} options={ejesAccion} placeholder='Selecciona uno o más ejes' isMulti onChange={handleEjesChange}/>

                            <label htmlFor="" className="input-label">Estatus</label>
                            <Select styles={customSelectStyles} options={estatusSelect} placeholder='Selecciona el estatus del proyecto' onChange={handleEstatusChange}/>

                            <label htmlFor="" className="input-label">Modalidad</label>
                            <Select styles={customSelectStyles} options={modalidadesSelect} placeholder='Selecciona la modalidad del proyecto' onChange={handleModalidadChange}/>
                            
                            <label htmlFor="proposito" className="input-label">Propósito</label>
                            <textarea name="proposito" id="" cols="30" rows="4" className="input-gral" placeholder='Escribe aquí' onChange={handleInputChange}></textarea>
                            
                            <label htmlFor="" className="input-label">Objetivos</label>
                            <CreatableSelect
                                components={components}
                                isClearable
                                isMulti
                                styles={customSelectStyles}
                                placeholder="Escribe los objetivos. Enter para agregar otro."
                                onChange={handleObjetivosChange}
                            />
                            
                            <label htmlFor="" className="input-label">Procesos</label>
                            <textarea name="procesos" id="" cols="30" rows="8" className="input-gral" placeholder='Escribe aquí' onChange={handleInputChange}></textarea>
                            
                            <label htmlFor="" className="input-label">Galería de imagenes</label>
                            <div className="file-preview-multi">
                                <input type="file" name="" id="" className="input-archivo" onChange={handleGaleriaChange} multiple/>
                                <div className="cont-galeria">
                                    {galeria.map((img) =>
                                        <img src={img} alt="" className="preview-img" />
                                    )}
                                </div>
                                
                            </div>

                            <button className="btn-enviar"  type="button" onClick={submitProyecto}>
                                <p>Agregar proyecto</p>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AdminAgregarProyecto;
