import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbars/navbars';
import Intro from './Intro';
import ParticlesBg from 'particles-bg';
import anime from 'animejs/lib/anime.es.js';
import Why_Choose_Us from "../assets/img/Why-Choose-Us.jpeg"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import "../assets/css/Home.css"
import WhyChooseSection, { fetchForSectionData, fetchHomeSectionData } from "../Variable/Home"
import OurTechnology from '../Components/Home/technology';
import OurProcess from '../Components/Home/process';
// import Board from "../Components/BoardApp/BoardApp";

import Footer from "../Components/Footer/footer";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const animateTriggerElementForWhyChooseSection = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.trigger-element',
            start: 'top 100%',
            end: 'bottom 100%',
            scrub: true
        },
    });


    tl.from('.trigger-element,.why-choose-description,.why-choose-image', {

        y: 100,
        duration: 0.2,
        ease: 'power2.out',
    });

    const t2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.Timeline',
            start: 'top',
            end: 'bottom',
            scrub: true
        },
    });

    t2.fromTo(
        '.timeline-container',
        { height: '0%' }, // Start with 0% height
        {
            height: '100%', // Expand to 100% height
            duration: 0.5,
            ease: 'power2.out',
        }
    );

    const horizontalContent = document.querySelector(".horizontal-content");
    const slides = gsap.utils.toArray(".slide");

     gsap.to(horizontalContent, {
        x: () => window.innerWidth - horizontalContent.scrollWidth,
        ease: "none",
        scrollTrigger: {
            trigger: ".section.content",
            start: "top top",
            end: "+=" + slides.length * 100 + "%",
            pin: true,
            scrub: true,
            invalidateOnRefresh: true
        }
    });

    return tl + t2;
};


function Home() {
    const [showIntro, setShowIntro] = useState(true);
    const [showParticles, setShowParticles] = useState(false);
    const [showNavBar, setShowNavBar] = useState(false);
    const [forData, setForData] = useState([]);
    const [homeData, setHomeData] = useState([]);
    const [theme, setTheme] = useState('cobweb');


    const runIntroAnimation = () => {
        anime({
            targets: ".pagecontent",
            opacity: [1],
            duration: 100,
            loop: false,
            complete: () => {
                anime.timeline({ loop: false }).add({
                    targets: '.word',
                    scale: [0, 1],
                    opacity: [0, 1],
                    easing: 'easeOutCirc',
                    duration: 800,
                    delay: (el, i) => 200 * i,
                    complete: () => {
                        setShowNavBar(true);
                        setTimeout(() => {
                            const triggerElementAnimation = animateTriggerElementForWhyChooseSection();
                            return () => {
                                triggerElementAnimation.kill();
                                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
                            };
                        }, 1000);
                    }
                });
            }
        })
    };

    useEffect(() => {
        const themes = ['cobweb', 'square', 'polygon']; // Add more themes as needed
        const randomTheme = themes[Math.floor(Math.random() * themes.length)];

        const fetchData = async () => {
            const homedata = await fetchHomeSectionData();
            const data = await fetchForSectionData();
            if (homedata) {
                setHomeData(homedata);

                setTimeout(() => {
                    setShowParticles(true);
                    setShowIntro(false);
                }, 2000);
                if (!showIntro) {
                    runIntroAnimation();
                }
            }
            if (data) {
                setForData(data);
            } else {
                fetchData();
            }

        };
        if (forData) {
            fetchData();
        }

        setTheme(randomTheme);



    }, [showIntro]);



    const InnakForData = ({ data }) => (
        <div className="slide">
            <div class="circle">
                <span>{data.title[0]}</span>
            </div>

            <div className="content"><p><b className='secondaryStrong'>{data.title}</b>{data.data}</p></div>
        </div>
    );

    const quotes = () => {
        const quote = homeData[0].quote.split(" ");
        return (
            quote.map((dataItem, index) => (
                <div className="word" key={index}>
                    <span className="letter">{dataItem[0]}</span>{dataItem.slice(1)}
                </div>
            ))
        );
    };



    return (
        <div className="home-container">
            {showIntro && <Intro />}
            {showParticles && (
                <div className="particles-container">
                    <ParticlesBg type={theme} bg={true} />
                    <div className="content-container">
                        <section className="Home-Main">
                            <div className='pagecontent'>
                                <div className="home-text col-6">
                                    <h1 className="welcomemsg word text-center">{homeData[0].msg}</h1><br />
                                    {quotes()}
                                </div>
                            </div>
                        </section>
                        {showNavBar && (<div>
                            <section className="section content" id='For'>

                                <div className="container">
                                    <h2 className="strong mt-5">Decoding</h2>
                                    <div className="wrapper mt-5">
                                        <div className="horizontal-content">
                                            {forData.map((dataItem, index) => (
                                                <InnakForData key={index} data={dataItem} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="trigger-element" id='why_choose_us'>
                                <div className="container">
                                    <h2 className="strong mt-5 animated-element">Why Us?</h2>
                                    <div className="row">
                                        <div className="col-md-4 order-md-2">
                                            <img src={Why_Choose_Us} alt="Why Choose Us" className="why-choose-image" />
                                        </div>
                                        <div className="col-md-8 mt-3 order-md-1 mt-2">
                                            <p className="why-choose-description">
                                                <b className="highlight-text text-center">Innovative Solutions, Exceptional Results.</b>
                                                <br />
                                                Innak provides tailored solutions crafted to match your distinct business requirements.
                                                <br />Why settle for ordinary when your business deserves exceptional?
                                            </p>
                                        </div>
                                    </div>
                                    <div className='Timeline'>
                                        <WhyChooseSection />
                                    </div>
                                </div>
                            </section>
                            <OurTechnology />
                            <OurProcess />
                            {/* <Board/> */}
                            <Footer/>
                        </div>)}

                    </div>
                   
                </div>
             
            )}
           
            {showNavBar && <Navbar />}
        </div>
    );
}

export default Home;
