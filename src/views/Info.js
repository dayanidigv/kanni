import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbars/navbars";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Intro from "./Intro";
import Footer from "../Components/Footer/footer";
import "../assets/css/info.css"
import about1img from "../assets/img/about/1.jpg"
import about2img from "../assets/img/about/2.jpg"
import about3img from "../assets/img/about/3.jpg"
import about4img from "../assets/img/about/4.jpg"
import about5img from "../assets/img/about/5.jpg"
import about6img from "../assets/img/about/6.jpg"
// import normalizeWheel from 'normalize-wheel';
// import * as THREE from "three";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
// import model from "../assets/3Dglb/web.glb";
import ButterflyComponent from "../Components/3D/butterfly";


gsap.registerPlugin(ScrollTrigger);


const AboutData = [
    {
        id: 1,
        title: "Who We Are",
        data: "INNAK is more than a team; we're a diverse community of tech enthusiasts, problem solvers, and visionaries. We combine technical expertise with boundless creativity to craft solutions that matter. From Web Development and IoT to AR/VR and bespoke problem-solving, our services are tailored to meet the unique needs of our clients.",
        img: about1img
    },
    {
        id: 2,
        title: "Our Vision",
        data: "Our vision is ambitious yet simple: to create a world where technology is a catalyst for positive change. We envision a future where digital experiences are inclusive, where solutions are accessible, and where every innovation serves a purpose.",
        img: about2img
    },
    {
        id: 3,
        title: "Our Mission",
        data: "Our mission is to design and develop cutting-edge solutions that address real-world challenges. Through our innovative products and services, including Operating Systems and Aids, we're committed to enhancing accessibility, enriching experiences, and redefining industry standards. We aim to empower individuals and businesses alike, fostering a tech-forward world.",
        img: about3img
    },
    {
        id: 4,
        title: "Our Commitment",
        data: "At INNAK, excellence is not an option; it's our standard. We are committed to delivering solutions that surpass expectations, ensuring every project reflects our passion for precision, creativity, and innovation. Our commitment is your guarantee of exceptional results.",
        img: about4img
    },
    {
        id: 5,
        title: "What Sets Us Apart",
        data: "INNAK stands out for its unwavering dedication to excellence. We go beyond conventional boundaries, embracing challenges as opportunities for growth. Our agility, creativity, and commitment to inclusivity make us trailblazers in the tech sphere. From groundbreaking AR/VR experiences to seamless Web Development solutions, we redefine the possibilities of technology.",
        img: about5img
    }
]




function Info() {
    const [showIntro, setShowIntro] = useState(true);

    const AbourTimeline = ({ key, id, title, data, image }) => {
        const style = {
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        };
        return (
            <li className={id % 2 === 0 ? "timeline-inverted" : ""}>
                <div className={`timeline-image timeline-image${id}`} style={style}></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4 className="thirdStrong">{title}</h4>
                    </div>
                    <div className="timeline-body">
                        <p className="text-muted">{data}</p>
                    </div>
                </div>
            </li>
        );
    }

    // const initAnimations = () => {
    //     gsap.from(".timeline-panel", {
    //       x: "-100px",
    //       opacity:0,
    //       duration: 1,
    //       stagger: 0.2,
    //       scrollTrigger: {
    //         trigger: ".timeline",
    //         start: "top 100%",
    //         end: "bottom 20%",
    //         scrub: true,
    //       },
    //     });

    //     gsap.from(".timeline-panel", {
    //         opacity: 0,
    //         x: -50,
    //         duration: 1,
    //         stagger: 0.2,
    //         scrollTrigger: {
    //             trigger: ".timeline",
    //             start: "top 80%",
    //             end: "bottom 20%",
    //             scrub: true,
    //         },
    //     });

    //     gsap.from(".thirdStrong", {
    //         opacity: 0,
    //         y: 20,
    //         duration: 1,
    //         scrollTrigger: {
    //             trigger: ".thirdStrong",
    //             start: "top 90%",
    //             end: "bottom 10%",
    //             scrub: true,
    //         },
    //     });
        
    //   };
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
            // setTimeout(() => {
            //     ThreeD();
            // }, 1500);
        };
    }, []);

        // const ThreeD = () => {
        //   // Set up scene
        //   const scene = new THREE.Scene();
      
        //   // Set up camera
        //   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        //   camera.position.z = 5;
      
        //   // Set up renderer
        //   const renderer = new THREE.WebGLRenderer();
        //   renderer.setSize(window.innerWidth, window.innerHeight);
        //   document.getElementById("canvas-container").appendChild(renderer.domElement);
        //     console.log("Done to Control..");
        //   // Load GLB model
        //   const loader = new GLTFLoader();
        //   loader.load(model , (gltf) => {
        //     scene.add(gltf.scene);
        //     console.log("Done to GLTF loaded");
        //   });
      
        //   // Set up animation
        //   const animate = () => {
        //     requestAnimationFrame(animate);
        //     renderer.render(scene, camera);
        //   };
      
        //   animate();
      
        //   // Handle window resize
        //   window.addEventListener("resize", () => {
        //     const width = 500;
        //     const height = 500;
        //     renderer.setSize(width, height);
        //     camera.aspect = width / height;
        //     camera.updateProjectionMatrix();
        //   });
      
        //   // Clean up on component unmount
        //   return () => {
        //     window.removeEventListener("resize");
        //   };
        // }
      

    return (
        <div>
            {showIntro && <Intro />}
            {!showIntro && (
               <div>
               <section class="about-page-section" id="about">
                   <Navbar />
                   <div class="container">
                       <div class="text-center">
                           <h2 class="strong text-uppercase mb-5 mt-5">About</h2>
                           <h3 class="section-subheading text-muted">At INNAK, we're not just a technology company; we're architects of change, pioneers of innovation, and creators of meaningful impact. Our journey revolves around one core belief: that technology, when wielded with purpose and creativity, can transform lives and businesses.</h3>
                       </div>
                       <ul class="timeline">

                           {AboutData.map((dataItem, index) => (
                               <AbourTimeline key={index} id={dataItem.id} title={dataItem.title} data={dataItem.data} image={dataItem.img} />
                           ))}
                           <li class="timeline-inverted">
                               <div class="timeline-image" style={{
                                   backgroundImage: `url(${about6img})`,
                                   backgroundPosition: "center",
                                   backgroundSize: "cover",
                                   backgroundRepeat: "no-repeat",
                               }} >
                               </div>
                           </li>

                       </ul>

                   </div>
                   <h4 className="thirdStrong text-center mt-5" >Join INNAK's innovation Journey! </h4>
               </section>
               <ButterflyComponent/>
               <Footer />
           </div>
          
            )}
 

        </div>
    );
}

export default Info;