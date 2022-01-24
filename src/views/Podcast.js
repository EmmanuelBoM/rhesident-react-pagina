import React from 'react';
import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import '../styles/base.css'
import '../styles/Podcast.css'

function Podcast() {
  return (
    <main>
        <NavHeader></NavHeader>
        <div className="titulo-header">
            <h1 className="verde">Rhesident Podcast</h1>
            <p className="negro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a, labore optio distinctio perferendis laudantium?</p>
        </div>
        <section className="cont-podcast">
            <aside className="podcast-acciones">
                <h2 className="negro">Plataforma</h2>
                <div className="interruptor-podcast">
                    <div className="btn-youtube"><i class="fa-brands fa-youtube"></i></div>
                    <div className="btn-spotify"><i class="fa-brands fa-spotify"></i></div>
                </div>
                <div className="cont-siguenos">
                    <h2 className="negro">Síguenos</h2>
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
            <div className="podcast-spotify">
            <iframe src="https://open.spotify.com/embed/show/6wF969GfLUfypoKaicH5gr?utm_source=generator" width="80%" height="232" frameBorder="0" allowfullscreen="" title='Rhesident Podcast' allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
            <div className="podcast-yt"></div>
        </section>

        <Footer></Footer>
    </main>
  );
}

export default Podcast;
