import React, {useState} from 'react'
import '../styles/base.css'
import '../styles/LandingPage.css'
import NavHeader from '../components/NavHeader'
import Footer from '../components/Footer'
import img from '../assets/img.jpg'
import iconoHuella from '../assets/huella1.svg'
import iconoCausa from '../assets/icono_causa.svg'
import iconoMas from '../assets/icono_mas.svg'
import downArrow from '../assets/down_arrow.svg'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {Link} from 'react-router-dom'
import CustomMailchimpForm from '../components/CustomMailchimpForm'

function LandingPage() {

    const [isVideoVisible, setIsVideoVisible] = useState(false);
   
    function autoPlayVideo(){
      if (window.scrollY>=500){
        setIsVideoVisible(true)
      }
      else{
        setIsVideoVisible(false)
      }
    }


  window.addEventListener('scroll', autoPlayVideo)
    
    return (
        <main>
            <NavHeader textColor='blanco'></NavHeader>
            <section className="hero-landing">
                <svg className="main-svg" width="1925" height="1422" viewBox="0 0 1925 1422" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id='img1' patternUnits='userSpaceOnUse' x="0" y="0" width="1925" height="1422">
                            <image href={img} width="2000" height="1500" />             
                        </pattern>
                    </defs>
                    <path opacity="1" d="M1917.74 278.382L1915.92 269.839C1880.87 101.402 1723.16 -14.0913 1550.69 1.73517C1515.37 4.95632 1480.76 9.03925 1448.92 14.1142C1284.29 40.4939 -245.865 72.4527 34.5075 445.915C314.88 819.377 837.031 1433.22 945.024 1420.84C1053.02 1408.46 1264.65 1347.64 1313.41 1211.56C1332.55 1158.14 1342.02 1072.37 1346.46 987.841C1354.53 834.396 1467.52 707.071 1619.78 678.919L1650.75 673.196C1835.62 638.892 1955.67 461.405 1917.74 278.382Z" fill="url(#img1)"/>
                    <path opacity="0.7" d="M1917.74 278.382L1915.92 269.839C1880.87 101.402 1723.16 -14.0913 1550.69 1.73517C1515.37 4.95632 1480.76 9.03925 1448.92 14.1142C1284.29 40.4939 -245.865 72.4527 34.5075 445.915C314.88 819.377 837.031 1433.22 945.024 1420.84C1053.02 1408.46 1264.65 1347.64 1313.41 1211.56C1332.55 1158.14 1342.02 1072.37 1346.46 987.841C1354.53 834.396 1467.52 707.071 1619.78 678.919L1650.75 673.196C1835.62 638.892 1955.67 461.405 1917.74 278.382Z" fill="#164453"/>
                </svg>
                <h1 className="titulo-landing blanco">
                    Rhesident <span className="amarillo">Org.</span>
                </h1>
                <h3  className="subtitulo-landing blanco">
                    Somos una organización de Regeneración Comunitaria Multidisciplinaria.
                </h3>
                <p className="descripcion-hero blanco">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                    animi hic tempore officia deserunt nulla. At perferendis, sunt
                    maiores amet aliquam eveniet architecto nostrum nobis fugit cum
                    consequatur officiis voluptate eaque doloremque! 
                </p>
                <div className="hero-ctas">
                    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut='animate__fadeOutLeft' offset={190}>
                      <div className="cta">
                          <img src={iconoHuella} alt="" className="icono-cta" />
                          <p className='texto-cta negro'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                              maxime, facilis iste delectus autem alias.
                          </p>
                          <Link to='/voluntariado'>
                            <button className="btn-cta">Conviértete en voluntario</button>
                          </Link>
                          
                      </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInRight" animateOut='animate__fadeOutRight' offset={190}>
                      <div className="cta">
                          <img src={iconoCausa} alt="" className="icono-cta" />
                          <p className='texto-cta megro'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                              maxime, facilis iste delectus autem alias.
                          </p>
                          <Link to='/como-apoyar'>
                             <button className="btn-cta">Apoya nuestra causa </button>
                          </Link>
                         
                      </div>
                    </AnimationOnScroll>
                </div>
        </section>
        
        <div className="scrolldown-cont">
          <img src={downArrow} alt="" className="scroll-down-link scroll-down-arrow" />
        </div>

        <section className="video-principal">
            <h2 className='negro'>Lorem ipsum dolor sit.</h2>
            <p className='negro descripcion-seccion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tenetur doloribus, cupiditate vel tempore reprehenderit?</p>
          <iframe
            className='yt-iframe'
            src={isVideoVisible ? `https://www.youtube.com/embed/gR3q8YMGh8A?autoplay=1&mute=1&loop=1`: `https://www.youtube.com/embed/gR3q8YMGh8A`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>

        <div className="scrolldown-cont">
          <img src={downArrow} alt="" className="scroll-down-link scroll-down-arrow" />
        </div>

        <section className="nuestra-causa">
          <div className="color-overlay">
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOut='animate__fadeOutUp' offset={190}>
              <h2>Nuestra Causa</h2>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOut='animate__fadeOutUp' delay={1}>
              <p className='causa-descripcion'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
                quia praesentium iste explicabo ad ipsum ex eius neque, dolor error
                commodi accusamus. Quod dolor ex ea, consequatur harum eum magni
                nesciunt ipsum error sapiente repellendus cupiditate alias suscipit
                cumque! Quasi a veritatis omnis libero labore eum similique
                delectus? Consequuntur, recusandae.
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOut='animate__fadeOutUp' delay={1}>
              <p className='causa-descripcion'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic similique eos molestias consequuntur distinctio eaque omnis illo, adipisci deleniti, earum impedit recusandae cumque magni perferendis expedita, quisquam autem enim. Eos quae dolores blanditiis facere modi facilis? Beatae culpa fugiat amet!
              </p>
            </AnimationOnScroll>
          </div>
        </section>

        <div className="scrolldown-cont">
          <img src={downArrow} alt="" className="scroll-down-link scroll-down-arrow" />
        </div>
        
        <section className="conoce">
          <h2 className="negro">¡Conócenos!</h2>
          <p className='descripcion-seccion'><span className="bold">Desliza hacia abajo</span>  para conocer<br /> los aspectos  que definen a <span className="bold">Rhesident Org.</span> </p>
          
          <AnimationOnScroll animateIn="animate__fadeIn"  offset={100} >
            <div className="elemento-conoce"></div>
          </AnimationOnScroll>
          <div className="nodes-cont">
          </div>
        </section>

        <section className="round-ctas">
          <div className="round-cta-cont">
            <h3 className='negro'>Voluntariado en Rhesident Org.</h3>
            <Link to='/voluntariado'>
              <div className="btn-round">
                <img src={iconoMas} alt="" />
              </div>
            </Link>
            
            <p className='negro'>Conocer más</p>
          </div>

          <div className="round-cta-cont">
            <h3 className='negro'>Ayúdanos a lograr nuestro propósito</h3>
            <Link to='/como-apoyar'>
              <div className="btn-round">
                <img src={iconoMas} alt="" />
              </div>
            </Link>
            <p className='negro'>Descubre cómo</p>
          </div>
        </section>

        <section className="contacto">
          <div className="newsletter-cont">
            <h2 className="blanco">Suscribete al newsletter</h2>
            <p className="blanco">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facilis eligendi tempora. Cum voluptatem magnam blanditiis animi temporibus, explicabo rem repudiandae ex sed maiores optio est delectus dolorem eligendi repellat.</p>
            <CustomMailchimpForm></CustomMailchimpForm>
          </div>
          <div className="separador">
            <div className="circulo-separador"></div>
            <div className="linea-separador"></div>
            <div className="circulo-separador"></div>
          </div>
          <div className="info-contacto">
            <h2 className="blanco">Contáctanos</h2>
            <p className="blanco">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur officia obcaecati provident exercitationem. Quam necessitatibus molestiae quo tempore vel quis aspernatur rerum. Culpa sit magni voluptates.</p>
            <div className="redes">
              <a href="https://www.facebook.com/rhesident.org">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/rhesident_org/">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com/rhesident_org">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/rhesident-org/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="mailto:contacto@rhesident.org">
                <i class="fa-solid fa-envelope"></i>
              </a>
              
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    );
}

export default LandingPage