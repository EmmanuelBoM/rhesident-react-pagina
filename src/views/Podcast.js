import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import NavMovil from '../components/NavMovil';
import ilustracionPodcast from '../assets/Rhe-acciona.png'
import '../styles/base.css'
import '../styles/Podcast.css'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

function Podcast() {
    const [plataforma, setPlataforma] = useState('spotify')
    const [navMovilVisibility, setNavMovilVisibility] = useState(false)
    const params = useParams()

    useEffect(()=>{
        if(params.plataforma) setPlataforma(params.plataforma)
    },[])

    function handleSpotify(){
        setPlataforma('spotify')
    }

    function handleYoutube(){
        setPlataforma('youtube')
    }
    return (
        <main>
            <Helmet>
                <title>Podcast | Rhesident</title>
            </Helmet>
            {navMovilVisibility ? (
                <NavMovil setNavMovilVisibility={setNavMovilVisibility}></NavMovil>
            ) : null}
            <NavHeader setNavMovilVisibility={setNavMovilVisibility}></NavHeader>
            
            <section className="header-podcast">
                <img src={ilustracionPodcast} alt="" className="img-podcast" />
                <div className="text-header-descargas">
                    
                    <p className="header-subt-podcast verde">Intentamos cuestionar, confrontar, interrogar, dialogar... <br/> Buscamos <span className='bold'>Rhe-Accionar</span>. <br/> <br/>
                                                    Este podcast es un no-lugar para Rhe-accionar ante temas actuales y diversos, para responder esas preguntas que de repente llegan a tu cabeza cuando vas escuchando las cumbias del chofer en la combi, en la fila del súper, cuando estás lavando los platos, cuando estás escogiendo tus aguacates en el mercado o cuando estás buscando figuritas en el techo de tu cuarto. Queremos conseguir inquietarte. Sin paniquearte.
                                                    <br/> <br/>Porque para Rhe-accionar, primero hay que cuestionar.</p>
                </div>
            </section>
            <section className="cont-podcast">
                <aside className="podcast-acciones">
                    <h3 className="negro">Plataforma</h3>
                    <div className="interruptor-podcast">
                        <div className={plataforma === 'youtube' ? "podcast-yt btn-youtube" : "btn-youtube"} onClick={handleYoutube}><i class={plataforma === 'youtube' ? "fa-brands fa-youtube yt-i" :"fa-brands fa-youtube"}></i></div>
                        <div className={plataforma === 'spotify' ? "podcast-spot btn-spotify" : "btn-spotify"} onClick={handleSpotify}><i class={plataforma === 'spotify' ? "fa-brands fa-spotify yt-i" :"fa-brands fa-spotify"}></i></div>
                    </div>
                    <div className="cont-siguenos">
                        <h3 className="negro">Síguenos</h3>
                        <a className="item-siguenos"  target="_blank" href='https://www.youtube.com/channel/UCTzEC-SbnoKXEtavo0MW6dQ'>
                            <i class="fa-brands fa-youtube"></i>
                            <p className="negro">YouTube</p>
                        </a>
                        <a className="item-siguenos" target="_blank" href='https://open.spotify.com/show/2Wqgl9N5XyxNNQ4BJg7OYz?si=e5485681b46f4226'>
                            <i class="fa-brands fa-spotify"></i>
                            <p className="negro">Spotify</p>
                        </a>
                        <a className="item-siguenos" target="_blank" href='https://www.facebook.com/rhesident.org'>
                            <i class="fa-brands fa-facebook"></i>
                            <p className="negro">Facebook</p>
                        </a>
                        <a className="item-siguenos"target="_blank" href='https://www.instagram.com/rhesident_org/'>
                            <i class="fa-brands fa-instagram"></i>
                            <p className="negro">Instagram</p>
                        </a>
                        
                            
                    </div>
                </aside>
                {plataforma ==='youtube' ?

                <div className="podcast-youtube">
                    <h2 className="verde bold">Episodios</h2>
                    <div className="scrolldown-cont">
                        <i class="fa-solid fa-microphone-lines scroll-down-link-green" ></i>
                    </div>
                    <div className="cont-frame"> 
                        <iframe  className='responsive-iframe yt-iframe' src="https://www.youtube.com/embed/videoseries?list=PLz0Y6nyd3NAuGbkztpR_XFR7HTKg4F_ti" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
                    </div>
                   
                </div> :

                <div className="podcast-spotify">
                    <h2 className="verde bold">Último episodio</h2>
                    <div className="scrolldown-cont">
                        <i class="fa-solid fa-microphone-lines scroll-down-link-green" ></i>
                    </div>
                    <iframe src="https://open.spotify.com/embed/show/2Wqgl9N5XyxNNQ4BJg7OYz?utm_source=generator" width="85%" height="232" frameBorder="0" allowfullscreen="" title='Rhesident Podcast' allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>

                }
                
            </section>

            <Footer></Footer>
        </main>
    );
}

export default Podcast;
