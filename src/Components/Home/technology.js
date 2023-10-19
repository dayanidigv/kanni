import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact, faUnity, faNode , faBootstrap,faHtml5, faCss3 , faJs, faGit, faDocker, faEnvira} from '@fortawesome/free-brands-svg-icons';
import './styles.css'; // Import your CSS file for styling

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const BoxItem = ({ icon, text, className, color, onMouseEnter }) => {
  const isSvg = typeof icon === 'string' && icon.startsWith('<svg');

  return (
    <div className={`box__item ${className} mt-2`} onMouseEnter={onMouseEnter}>
      {isSvg ? (
        <div dangerouslySetInnerHTML={{ __html: icon.replace('<svg', `<svg fill="${color}"`) }} className='techicon' />
      ) : (
        <FontAwesomeIcon icon={icon} className='techicon' size="3x" style={{ color: color }} />
      )}
      <span className={isSvg ? "pb-5" : ""}>{text}</span>
    </div>
  );
};






const technologyData = [
    { id: 1, icon: faPython, text: 'Python', className: 'box__item--py', color: '#4B8BBE' },
    { id: 2, icon: faReact, text: 'React js', className: 'box__item--react', color: '#61DAFB' },
    { id: 3, icon: faNode, text: 'Node js', className: 'box__item--node', color: '#68A063' },
    { id: 4, icon: faUnity, text: 'Unity', className: 'box__item--unity', color: '#000000' },
    { id: 5, icon: faBootstrap, text: 'Bootstrap', className: 'box__item--bootstrap', color: '#7952B3' },
    { id: 6, icon: faHtml5, text: 'HTML5', className: 'box__item--html5', color: '#E34F26' },
    { id: 7, icon: `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>`, text: 'MySql', className: 'box__item--mysql', color: '#00758f' },
    { id: 8, icon: faJs, text: 'JavaScript', className: 'box__item--js', color: '#F7DF1E' },
    { id: 9, icon: faGit, text: 'Git', className: 'box__item--git', color: '#6e5494' },
    { id: 10, icon: faDocker, text: 'Docker', className: 'box__item--docker', color: '#2496ED' },
    { id: 11, icon: `<svg xmlns="http://www.w3.org/2000/svg" height="4rem" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M576 64H64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H184.4c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4H576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM96 240a64 64 0 1 1 128 0A64 64 0 1 1 96 240zm384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`, text: 'AR/VR', className: 'box__item', color: '#82c0ef' },
];



const  OurTechnology = () => {
  const [hoveredTechnology, setHoveredTechnology] = useState(null);
  const [TechnologyColor, setTechnologyColor] = useState("#000000");
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    setShuffledData(shuffleArray(technologyData));
  }, []);

  const handleMouseEnter = (technology) => {
    setHoveredTechnology(technology);
    if (technology === "#000000"){
        setTechnologyColor("#ffffff");
    }else{
        setTechnologyColor("#000000");
    }
  };

  const handleMouseLeave = () => {
    setHoveredTechnology(null);
  };

  return (
    <section className='out-technology' style={{ backgroundColor: hoveredTechnology }}>
      <br /><br />
      <div class="custom-shape-divider-top-1697355162">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      <h2 className='strong' style={{ color: TechnologyColor }}>Cutting-Edge Tech</h2>
      <div className='container'>
        <div className=''>
          <div className='row tech-container'>
            {shuffledData.map((tech) => (
              <div className='col-6 col-sm-4 col-md-3 tech-center' key={tech.id}>
                <BoxItem
                  icon={tech.icon}
                  text={tech.text}
                  className={tech.className}
                  color={tech.color}
                  onMouseEnter={() => handleMouseEnter(tech.color)}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default  OurTechnology;
