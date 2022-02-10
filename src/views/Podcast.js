import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import ilustracionPodcast from '../assets/ilustracion_podcast.svg'
import '../styles/base.css'
import '../styles/Podcast.css'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

function Podcast() {
    const [plataforma, setPlataforma] = useState('youtube')
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
            <NavHeader></NavHeader>
            <Helmet>
                <title>Podcast | Rhesident</title>
            </Helmet>
            <section className="header-descargas">
                <img src={ilustracionPodcast} alt="" className="img-descargas" />
                <div className="text-header-descargas">
                    <h1 className="negro">Podcast Rhesident</h1>
                    <p className="header-subt verde">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit maiores commodi, error praesentium placeat eius.</p>
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
                        <div className="item-siguenos">
                            <i class="fa-brands fa-youtube"></i>
                            <p className="negro">YouTube</p>
                        </div>
                        <div className="item-siguenos">
                            <i class="fa-brands fa-spotify"></i>
                            <p className="negro">Spotify</p>
                        </div>
                        <div className="item-siguenos">
                            <i class="fa-brands fa-facebook"></i>
                            <p className="negro">Facebook</p>
                        </div>
                        <div className="item-siguenos">
                            <i class="fa-brands fa-instagram"></i>
                            <p className="negro">Instagram</p>
                        </div>
                        
                            
                    </div>
                </aside>
                {plataforma ==='youtube' ?

                <div className="podcast-youtube">
                    <h2 className="verde bold">Último episodio</h2>
                    <div className="scrolldown-cont">
                        <i class="fa-solid fa-microphone-lines scroll-down-link-green" ></i>
                    </div>
                    <iframe width="700" height="400" src="https://www.youtube.com/embed/videoseries?list=PLO5PywciZTL_4Ol2haPSRbDPCCfpEc3Y-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> :

                <div className="podcast-spotify">
                    <h2 className="verde bold">Último episodio</h2>
                    <div className="scrolldown-cont">
                        <i class="fa-solid fa-microphone-lines scroll-down-link-green" ></i>
                    </div>
                    <iframe src="https://open.spotify.com/embed/show/6wF969GfLUfypoKaicH5gr?utm_source=generator" width="80%" height="232" frameBorder="0" allowfullscreen="" title='Rhesident Podcast' allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>

                }
                
            </section>

            <Footer></Footer>
        </main>
    );
}

export default Podcast;
