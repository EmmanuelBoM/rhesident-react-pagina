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
    const [text1, setText1] = useState(' ')
    const [node1, setNode1] = useState(' ')
   
    function autoPlayVideo(){
      if (window.scrollY>=500){
        setIsVideoVisible(true)
      }
      else{
        setIsVideoVisible(false)
      }
    }


    // function afterL1(visible) {
    //   if (visible.inViewport) {
    //     setLine1('path-l')
    //     setTimeout(() => {
    //      setText1('path-text-active')
    //      setNode1('path-node-active')
    //   }, 1800)
    //   }
    // }

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
                          <button className="btn-cta">
                              Conviértete en voluntario
                          </button>
                      </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInRight" animateOut='animate__fadeOutRight' offset={190}>
                      <div className="cta">
                          <img src={iconoCausa} alt="" className="icono-cta" />
                          <p className='texto-cta megro'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                              maxime, facilis iste delectus autem alias.
                          </p>
                          <button className="btn-cta">
                              Apoya nuestra causa
                          </button>
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
            <Link to='/donaciones'>
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
                <svg  className='svg-red' width="50" height="50" viewBox="0 0 79 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 40.2233C0 60.11 14.2628 76.6467 32.9167 80V51.11H23.0417V40H32.9167V31.11C32.9167 21.11 39.2795 15.5567 48.2789 15.5567C51.1295 15.5567 54.2039 16 57.0545 16.4433V26.6667H52.0083C47.1795 26.6667 46.0833 29.11 46.0833 32.2233V40H56.6167L54.8622 51.11H46.0833V80C64.7372 76.6467 79 60.1133 79 40.2233C79 18.1 61.225 0 39.5 0C17.775 0 0 18.1 0 40.2233Z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/rhesident_org/">
              <svg  className='svg-red' width="65" height="65" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M85.5334 33.9115C85.4922 30.8189 84.9133 27.757 83.8225 24.8629C82.8766 22.4217 81.4318 20.2046 79.5806 18.3534C77.7293 16.5021 75.5123 15.0574 73.0711 14.1115C70.2141 13.039 67.1959 12.4591 64.1449 12.3965C60.2167 12.2209 58.9713 12.1719 48.9998 12.1719C39.0283 12.1719 37.7502 12.1719 33.8506 12.3965C30.801 12.4596 27.7842 13.0395 24.9285 14.1115C22.487 15.0567 20.2696 16.5012 18.4182 18.3525C16.5669 20.2039 15.1224 22.4213 14.1771 24.8629C13.1025 27.7177 12.5239 30.7352 12.4662 33.785C12.2906 37.7172 12.2375 38.9626 12.2375 48.9341C12.2375 58.9056 12.2375 60.1796 12.4662 64.0833C12.5275 67.1376 13.1032 70.1511 14.1771 73.0136C15.124 75.4544 16.5695 77.6709 18.4215 79.5215C20.2735 81.372 22.4911 82.8159 24.9326 83.7609C27.7805 84.8764 30.7978 85.4979 33.8547 85.5984C37.787 85.774 39.0324 85.827 49.0039 85.827C58.9754 85.827 60.2535 85.827 64.1531 85.5984C67.2039 85.5383 70.2224 84.9598 73.0792 83.8875C75.5198 82.9405 77.7363 81.4954 79.5874 79.6442C81.4385 77.7931 82.8836 75.5766 83.8306 73.136C84.9046 70.2777 85.4803 67.2642 85.5415 64.2058C85.7171 60.2776 85.7702 59.0322 85.7702 49.0566C85.762 39.0851 85.7621 37.8193 85.5334 33.9115ZM48.9753 67.791C38.5465 67.791 30.098 59.3425 30.098 48.9137C30.098 38.4849 38.5465 30.0365 48.9753 30.0365C53.9819 30.0365 58.7834 32.0253 62.3235 35.5655C65.8637 39.1057 67.8526 43.9072 67.8526 48.9137C67.8526 53.9203 65.8637 58.7218 62.3235 62.2619C58.7834 65.8021 53.9819 67.791 48.9753 67.791ZM68.6039 33.74C68.0257 33.7406 67.453 33.6271 66.9187 33.4061C66.3844 33.185 65.899 32.8608 65.4901 32.452C65.0813 32.0431 64.757 31.5577 64.536 31.0234C64.315 30.4891 64.2015 29.9164 64.202 29.3382C64.202 28.7604 64.3159 28.1883 64.537 27.6545C64.7581 27.1207 65.0822 26.6356 65.4907 26.2271C65.8993 25.8185 66.3843 25.4944 66.9181 25.2733C67.4519 25.0522 68.0241 24.9384 68.6018 24.9384C69.1796 24.9384 69.7518 25.0522 70.2856 25.2733C70.8194 25.4944 71.3044 25.8185 71.713 26.2271C72.1215 26.6356 72.4456 27.1207 72.6667 27.6545C72.8878 28.1883 73.0016 28.7604 73.0016 29.3382C73.0016 31.7719 71.0335 33.74 68.6039 33.74Z"/>
                <path d="M48.9754 61.1769C55.7476 61.1769 61.2376 55.6869 61.2376 48.9146C61.2376 42.1423 55.7476 36.6523 48.9754 36.6523C42.2031 36.6523 36.7131 42.1423 36.7131 48.9146C36.7131 55.6869 42.2031 61.1769 48.9754 61.1769Z"/>
              </svg>
              </a>
              <a href="https://twitter.com/rhesident_org">
                <svg  className='svg-red' width="55" height="55" viewBox="0 0 77 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M75.8548 16.0456C73.1758 17.2481 70.2979 18.0606 67.2725 18.4279C70.3942 16.5357 72.7297 13.5576 73.8431 10.0494C70.9102 11.8141 67.7003 13.0563 64.3529 13.7219C62.1019 11.2872 59.1203 9.67343 55.8711 9.13116C52.6219 8.58889 49.2869 9.14844 46.3838 10.7229C43.4807 12.2974 41.172 14.7988 39.816 17.8387C38.4601 20.8785 38.1329 24.2868 38.8851 27.5344C32.9423 27.2321 27.1286 25.6674 21.8214 22.9418C16.5141 20.2162 11.832 16.3906 8.07872 11.7134C6.79539 13.9559 6.05747 16.5559 6.05747 19.3249C6.05604 21.8176 6.66203 24.2722 7.82167 26.4708C8.98131 28.6693 10.6587 30.544 12.7051 31.9284C10.3319 31.8519 8.01094 31.2023 5.93556 30.0336V30.2286C5.93532 33.7248 7.12916 37.1134 9.31452 39.8194C11.4999 42.5254 14.5421 44.3821 17.9251 45.0746C15.7235 45.6782 13.4153 45.7671 11.1748 45.3346C12.1292 48.3429 13.9885 50.9735 16.4922 52.8581C18.9958 54.7428 22.0187 55.7872 25.1374 55.8451C19.8431 60.0552 13.3047 62.3389 6.57401 62.3289C5.38174 62.3292 4.19047 62.2587 3.00635 62.1176C9.83842 66.5674 17.7914 68.929 25.9138 68.9199C53.4093 68.9199 68.4403 45.8514 68.4403 25.8444C68.4403 25.1944 68.4243 24.5379 68.3954 23.8879C71.3191 21.746 73.8428 19.0938 75.8484 16.0554L75.8548 16.0456Z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/rhesident-org/">
                <svg className='svg-red'  width="50" height="50" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.04175 8.63258C3.04175 7.14987 3.63076 5.72788 4.67919 4.67944C5.72763 3.63101 7.14962 3.042 8.63233 3.042H64.3618C65.0965 3.0408 65.8244 3.18454 66.5035 3.46499C67.1827 3.74545 67.7999 4.1571 68.3197 4.6764C68.8396 5.19569 69.2519 5.81242 69.5331 6.49128C69.8143 7.17014 69.9588 7.89779 69.9584 8.63258V64.362C69.9592 65.0969 69.8151 65.8248 69.5343 66.504C69.2535 67.1832 68.8416 67.8003 68.3221 68.3202C67.8025 68.84 67.1856 69.2523 66.5066 69.5334C65.8275 69.8146 65.0997 69.9591 64.3648 69.9587H8.63233C7.89791 69.9587 7.17069 69.814 6.49221 69.5328C5.81373 69.2517 5.19729 68.8396 4.67812 68.3202C4.15894 67.8007 3.74721 67.184 3.46643 66.5054C3.18566 65.8268 3.04135 65.0995 3.04175 64.365V8.63258ZM29.5286 28.5555H38.5897V33.1058C39.8976 30.49 43.2435 28.1358 48.2713 28.1358C57.9104 28.1358 60.1947 33.3461 60.1947 42.9061V60.6147H50.44V45.0839C50.44 39.6393 49.1321 36.5673 45.8106 36.5673C41.2025 36.5673 39.2863 39.8796 39.2863 45.0839V60.6147H29.5286V28.5555ZM12.7994 60.198H22.5571V28.1358H12.7994V60.1949V60.198ZM23.9532 17.6785C23.9716 18.514 23.8229 19.3447 23.5159 20.1219C23.2089 20.8991 22.7498 21.6072 22.1654 22.2046C21.581 22.802 20.8833 23.2766 20.113 23.6006C19.3427 23.9247 18.5154 24.0916 17.6798 24.0916C16.8441 24.0916 16.0169 23.9247 15.2466 23.6006C14.4763 23.2766 13.7785 22.802 13.1941 22.2046C12.6098 21.6072 12.1506 20.8991 11.8436 20.1219C11.5366 19.3447 11.3879 18.514 11.4063 17.6785C11.4424 16.0386 12.1193 14.478 13.2918 13.331C14.4644 12.184 16.0395 11.5417 17.6798 11.5417C19.3201 11.5417 20.8952 12.184 22.0677 13.331C23.2403 14.478 23.9171 16.0386 23.9532 17.6785Z" />
                </svg>
              </a>
              <a href="mailto:contacto@rhesident.org">
                <svg className='svg-red'  width="65" height="65" viewBox="0 0 96 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M86.3998 34.6529V68.1498C86.3998 71.2661 85.1356 74.2548 82.8851 76.4583C80.6347 78.6619 77.5824 79.8998 74.3998 79.8998H21.5999C18.4173 79.8998 15.365 78.6619 13.1146 76.4583C10.8641 74.2548 9.59985 71.2661 9.59985 68.1498V34.6529L46.7806 56.0755C47.15 56.2888 47.571 56.4013 47.9998 56.4013C48.4287 56.4013 48.8497 56.2888 49.219 56.0755L86.3998 34.6529ZM74.3998 18.7998C77.3525 18.7994 80.2018 19.8649 82.4024 21.7925C84.6031 23.7201 86.0007 26.3745 86.3278 29.2479L47.9998 51.3238L9.67185 29.2479C9.99901 26.3745 11.3966 23.7201 13.5973 21.7925C15.7979 19.8649 18.6472 18.7994 21.5999 18.7998H74.3998Z" />
                </svg>
              </a>
              
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    );
}

export default LandingPage