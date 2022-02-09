import React, {useState, useEffect} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/base.css'
import '../styles/AdminLayout.css'
import ilustracionAgregarTaller from '../assets/ilustracion_agregar_taller.svg'
import Select from 'react-select'
import CreatableSelect, { useCreatable } from 'react-select/creatable';
import ModalAdminExito from '../components/ModalAdminExito';
import ModalAdminConfirmar from '../components/ModalAdminConfirmar';
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import "react-multi-date-picker/styles/colors/green.css"

// Firebase Imports
import {db, storage} from '../firebaseConfig'
import {collection,addDoc} from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { useNavigate } from 'react-router-dom';

function AdminAgregarTaller() {
    const [modalExitoVisibility, setModalExitoVisibility] = useState(false)
    const [modalConfVisibility, setModalConfVisibility] = useState(false)
    const [ejesValue, setEjesValue] = useState([])
    const [fechasValue, setFechasValue] = useState([])
    const [etiquetasValue, setEtiquetasValue] = useState([])
    const [objetivosValue, setObjetivosValue] = useState([])
    const [imgURL, setImgURL] = useState('')
    const [modalidadValue, setModalidadValue] = useState('')
    const [estatusValue, setEstatusValue] = useState('')
    const [taller, setTaller] = useState({})
    const weekDays = ["D", "L", "M", "X", "J", "V", "S"]
    const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

    let navigate = useNavigate();
    useEffect(()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/admin_proyectos')
        }

        if (!authToken) {
            navigate('/login')
        }
    },[])

    const ejesAccion = [
        { value: 'Cultura', label: 'Cultura' },
        { value: 'Arte', label: 'Arte' },
        { value: 'Urbanismo', label: 'Urbanismo' },
        { value: 'Sustentabilidad', label: 'Sustentabilidad' }
    ]
    
    const estatusSelect = [
        { value: 'Abierto', label: 'Abierto' },
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

    function showModalConfirmar(){
        setModalConfVisibility(true);
    }

    
    const handleEjesChange = selectedOptions =>{
        setEjesValue(selectedOptions);
    }

    const handleEtiquetasChange = selectedOptions =>{
        setEtiquetasValue(selectedOptions);
        console.log(etiquetasValue)
    }
    
    const handleModalidadChange = selectedOption =>{
        setModalidadValue(selectedOption.value);
    }

    const handleEstatusChange = selectedOption =>{
        setEstatusValue(selectedOption.value);
    }

    const handleImgChange = async (e) =>{
        
        const file = e.target.files[0]
        const bucketPath =`images/talleres/${taller.nombre}_img`
        
        const storageRef = ref(storage, bucketPath);
        
        await uploadBytes(storageRef, file)
        .then((snapshot) => {
            console.log('Imagen subida!');
        })
        .catch((error)=>{
            console.log(error)
        });

        setImgURL(await getDownloadURL(storageRef))
    }

   

    function handleInputChange(e){
        let newTaller = {
            ...taller,
            [e.target.name]: e.target.value,
        };

        setTaller(newTaller);
    }

    const handleFechasChange = fecha =>{
        setFechasValue(fecha)
    }

    const talleresCollectionRef = collection(db, "talleres")

    const submitTaller = async (e) => {
        e.preventDefault();
        let ejesArr = []
        let etiquetasArr=[]
        let objetivosArr = []
        let fechasArr =[]
        ejesValue.map((eje)=>ejesArr.push(eje.value))
        etiquetasValue.map((etiqueta)=>etiquetasArr.push(etiqueta.value))
        fechasValue.map((fecha)=>fechasArr.push(fecha.toString()))


        try{
            await addDoc(talleresCollectionRef,
                {
                    nombre: taller.nombre,
                    descripcion: taller.descripcion,
                    duracion: taller.duracion,
                    estatus: estatusValue,
                    modalidad: modalidadValue,
                    ejesAccion: ejesArr,
                    etiquetas: etiquetasArr,
                    fechasInicio: fechasArr,
                    imgURL: imgURL,
                    visible: true
                })
        }
        catch(error){
            console.log(error)
        }
        setModalConfVisibility(false)
        setModalExitoVisibility(true)
    }
    

    return (
        <div className="body-admin">
            {modalExitoVisibility ? <ModalAdminExito setModalVisibility={setModalExitoVisibility} rutaContinuar='/admin_talleres' accion='agregado' recurso= 'Taller' nombreRecurso={taller.nombre}></ModalAdminExito> : null }
            {modalConfVisibility ? <ModalAdminConfirmar setModalVisibility={setModalConfVisibility} runFunction={submitTaller} accion='agregar' recurso= 'el Taller' nombreRecurso={taller.nombre}></ModalAdminConfirmar> : null }
            
            <AdminNavbar activeTab='talleres'></AdminNavbar>
            <main className='main-admin'>
                <section className="admin-form-content">
                    <div className="header-form">
                        <img src={ilustracionAgregarTaller} alt="" className="ilustracion-form" />
                        <h2 className="titulo-admin-form negro">Agrega un <br/> taller nuevo</h2>
                    </div>
                    <div className="cont-formulario-agregar">
                        <form action="" className="formulario-registro">
                            <label htmlFor="nombre" className='input-label'>Nombre del taller</label>
                            <input type="text"  placeholder="Nombre" name="nombre" className="input-gral" required onChange={handleInputChange}/>
                            
                            <label htmlFor="descripcion" className="input-label">Descripción</label>
                            <textarea name="descripcion"  cols="30" rows="6" className="input-gral" placeholder='200 caracteres máximo' onChange={handleInputChange} maxLength={200}></textarea>
                           
                            <label htmlFor="imgURL" className="input-label">Imagen</label>
                            <div className="file-preview">
                                <input type="file" name="imgURL"  className="input-archivo" onChange={handleImgChange}/>
                                <img src={imgURL} alt=""  className="preview-img" />
                            </div>
                            <div className="warning-img">
                                <i class="fa-solid fa-circle-exclamation"></i>
                                <p className="txt-warning">Recuerda comprimir el tamaño de la imagen <a href="https://compressor.io/">aquí</a></p>
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
                            <Select styles={customSelectStyles} options={estatusSelect} placeholder='Selecciona el estatus del taller' onChange={handleEstatusChange}/>

                            <label htmlFor="" className="input-label">Modalidad</label>
                            <Select styles={customSelectStyles} options={modalidadesSelect} placeholder='Selecciona la modalidad del taller' onChange={handleModalidadChange}/>
                            
                            <label htmlFor="duracion" className="input-label">Duración</label>
                            <input type='number' name="duracion" id=""className="input-gral" placeholder='Escribe la duración en horas del taller.' onChange={handleInputChange}/>
                            
                            <label htmlFor="duracion" className="input-label">Fechas de inicio</label>
                            <DatePicker inputClass='input-gral'  
                                        multiple 
                                        className='green' 
                                        placeholder='Clic para seleccionar'
                                        format={ "DD/MM/YYYY" }
                                        weekDays={weekDays}
                                        months={months}
                                        onChange={handleFechasChange}
                                        plugins={[
                                            <DatePanel />
                                           ]}/>;
                            

                            <button className="btn-enviar"  type="button" onClick={showModalConfirmar}>
                                <p>Agregar taller</p>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AdminAgregarTaller;
