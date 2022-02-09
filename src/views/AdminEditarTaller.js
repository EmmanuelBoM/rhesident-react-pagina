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
import {collection, doc, updateDoc, getDoc} from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { useNavigate, useParams } from 'react-router-dom';

function AdminEditarTaller() {
    const [modalExitoVisibility, setModalExitoVisibility] = useState(false)
    const [modalConfVisibility, setModalConfVisibility] = useState(false)
    const [ejesValue, setEjesValue] = useState([])
    const [fechasValue, setFechasValue] = useState([])
    const [etiquetasValue, setEtiquetasValue] = useState([])
    const [ejesChange, setEjesChange] = useState(false)
    const [etiquetasChange, setEtiquetasChange] = useState(false)
    const [fechasChange, setFechasChange] = useState(false)
    const [imgURL, setImgURL] = useState('')
    const [modalidadValue, setModalidadValue] = useState('')
    const [estatusValue, setEstatusValue] = useState('')
    const [taller, setTaller] = useState({})
    const [newTaller, setNewTaller] = useState({})
    let params = useParams();
    const weekDays = ["D", "L", "M", "X", "J", "V", "S"]
    const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

    const tallerRef = doc(db, "talleres", params.id)

    let navigate = useNavigate();

    useEffect(()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate(`/editar-taller/${params.id}`)
        }

        if (!authToken) {
            navigate('/login')
        }

        const getTaller = async () => {
            const tallerDoc = await getDoc(tallerRef);
            setTaller(tallerDoc.data())
            setEjesValue(tallerDoc.data().ejesAccion)
            setEtiquetasValue(tallerDoc.data().etiquetas)
            setFechasValue(tallerDoc.data().fechasInicio)
            setModalidadValue(tallerDoc.data().modalidad)
            setEstatusValue(tallerDoc.data().estatus)
            setImgURL(tallerDoc.data().imgURL)
          }
      
          getTaller();
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
        setEjesChange(true)
        setEjesValue(selectedOptions);
    }

    const handleEtiquetasChange = selectedOptions =>{
        setEtiquetasChange(true)
        setEtiquetasValue(selectedOptions)
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
        let nuevoTaller = {
            ...newTaller,
            [e.target.name]: e.target.value,
        };

        setNewTaller(nuevoTaller);
    }

    const handleFechasChange = fecha =>{
        setFechasChange(true)
        setFechasValue(fecha)
    }

    const talleresCollectionRef = collection(db, "talleres")

    

    const updateTaller = async() => {

        let ejesArr = []
        let etiquetasArr=[]
        let fechasArr = []
        
        if (ejesChange) ejesValue.map((eje)=>ejesArr.push(eje.value)) 
        else ejesArr = ejesValue
        if(etiquetasChange) etiquetasValue.map((etiqueta)=>etiquetasArr.push(etiqueta.value))
        else etiquetasArr = etiquetasValue
        if(fechasChange) fechasValue.map((fecha)=>fechasArr.push(fecha.toString()))
        else fechasArr = fechasValue
       

        const tallerFB ={
            ...newTaller, 
            imgURL: imgURL,
            estatus: estatusValue,
            modalidad: modalidadValue,
            ejesAccion: ejesArr,
            etiquetas: etiquetasArr,
            fechasInicio: fechasArr
        }

        console.log(tallerFB)
        try{
            await updateDoc(tallerRef, tallerFB);
        }
        catch(error){
            console.log(error)
        }
        setModalConfVisibility(false)
        setModalExitoVisibility(true)
        
    }
    

    return (
        <div className="body-admin">
            {modalExitoVisibility ? <ModalAdminExito setModalVisibility={setModalExitoVisibility} rutaContinuar='/admin_talleres' accion='editado' recurso= 'Taller' nombreRecurso={taller.nombre}></ModalAdminExito> : null }
            {modalConfVisibility ? <ModalAdminConfirmar setModalVisibility={setModalConfVisibility} runFunction={updateTaller} accion='editar' recurso= 'el Taller' nombreRecurso={taller.nombre}></ModalAdminConfirmar> : null }
            
            <AdminNavbar activeTab='talleres'></AdminNavbar>
            <main className='main-admin'>
                <section className="admin-form-content">
                    <div className="header-form">
                        <img src={ilustracionAgregarTaller} alt="" className="ilustracion-form" />
                        <h2 className="titulo-admin-form negro">{`Editar taller ${taller.nombre} `}</h2>
                    </div>
                    <div className="cont-formulario-agregar">
                        <form action="" className="formulario-registro">
                            <label htmlFor="nombre" className='input-label'>Nombre del taller</label>
                            <input type="text"  placeholder="Nombre" name="nombre" className="input-gral" required onChange={handleInputChange} defaultValue={taller.nombre}/>
                            
                            <label htmlFor="descripcion" className="input-label">Descripción</label>
                            <textarea name="descripcion"  cols="30" rows="6" className="input-gral" placeholder='200 caracteres máximo' onChange={handleInputChange} maxLength={200} defaultValue={taller.descripcion}></textarea>
                           
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
                                placeholder={taller.etiquetas}
                                onChange={handleEtiquetasChange}
                            />

                            <label htmlFor="" className="input-label">Ejes de acción</label>
                            <Select styles={customSelectStyles} options={ejesAccion} placeholder={taller.ejesAccion} isMulti onChange={handleEjesChange}/>

                            <label htmlFor="" className="input-label">Estatus</label>
                            <Select styles={customSelectStyles} options={estatusSelect} placeholder={taller.estatus} onChange={handleEstatusChange}/>

                            <label htmlFor="" className="input-label">Modalidad</label>
                            <Select styles={customSelectStyles} options={modalidadesSelect} placeholder={taller.modalidad} onChange={handleModalidadChange}/>
                            
                            <label htmlFor="duracion" className="input-label">Duración</label>
                            <input type='number' name="duracion" id=""className="input-gral" placeholder={taller.duracion} onChange={handleInputChange}/>
                            
                            <label htmlFor="duracion" className="input-label">Fechas de inicio</label>
                            <DatePicker inputClass='input-gral'  
                                        multiple 
                                        className='green' 
                                        placeholder={taller.fechasInicio}
                                        format={ "DD/MM/YYYY" }
                                        weekDays={weekDays}
                                        months={months}
                                        onChange={handleFechasChange}
                                        plugins={[
                                            <DatePanel />
                                           ]}/>;
                            

                            <button className="btn-enviar"  type="button" onClick={showModalConfirmar}>
                                <p>Editar taller</p>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AdminEditarTaller;
