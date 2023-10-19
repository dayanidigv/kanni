import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../../assets/css/Home.css";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const animateTriggerElementForWhyChooseSection = () => {
    const horizontalContent = document.querySelector(".horizontal-content");
        const slides = gsap.utils.toArray(".slide"); 
        
const t = gsap.to(horizontalContent, {
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

const st = t.scrollTrigger;
const totalScroll = st.end - st.start;
const links = gsap.utils.toArray("nav .link");
const scrollPerLink = totalScroll / (links.length - 1);

links.forEach((link, i) => {
  link.addEventListener("click", () => {
    gsap.to(window, {
      scrollTo: {
        y: st.start + scrollPerLink * i
      },
      duration: 1,
      autoKill: false
    });
  });
});

};
const ForSection = () => {
    const horizontalContentRef = useRef(null);

    useEffect(() => {
           animateTriggerElementForWhyChooseSection();

    }, []);

    return (
        <section className="section content" id='For'>
            <div className="container">
                <h2 className="strong text-dark mt-5">For</h2>
                <div className="wrapper">
                    <div className="horizontal-content" ref={horizontalContentRef}>
                        <div className="slide">
                            <div className="content"><p><b className='secondaryStrong'>Innovation</b> is the transformative process of developing novel ideas, products, services, or methods that challenge existing norms, driving progress, and improving efficiency, creativity, and overall value in various fields.</p></div>
                        </div>
                        <div className="slide">
                            <div className="content"><p><b className='secondaryStrong'>Nurturing </b>  is the deliberate and supportive process of fostering growth, development, and well-being. It involves providing care, encouragement, and guidance to help individuals, ideas, or projects flourish and reach their full potential.</p></div>
                        </div>
                        <div className="slide">
                            <div className="content"><p><b className='secondaryStrong'>Next-generation </b>  refers to the latest and most advanced iteration of technology, products, or ideas that represent a significant leap forward from the current state of affairs. It embodies innovation, superior capabilities, and cutting-edge features that anticipate and meet the evolving needs and challenges of the future.</p></div>
                        </div>
                        <div className="slide">
                            <div className="content"><p><b className='secondaryStrong'>Applications</b>  refer to software programs or systems designed to perform specific tasks or functions on electronic devices such as computers, smartphones, or tablets. These applications, often referred to as apps, are created to streamline processes, entertain, educate, or provide various services to users, enhancing their digital experiences.</p></div>
                        </div>
                        <div className="slide">
                            <div className="content"> <p><b className='secondaryStrong'>Knowledge </b> refers to the understanding, skills, information, and expertise acquired through learning, experience, and education. It encompasses facts, concepts, theories, and practical insights that enable individuals or organizations to make informed decisions, solve problems, innovate, and progress in various fields.</p></div>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className="link">I</div>
                    <div className="link">N</div>
                    <div className="link">N</div>
                    <div className="link">A</div>
                    <div className="link">K</div>
                </nav>
            </div>
        </section>
    );
}

export default ForSection;
