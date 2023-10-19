import React, { useEffect } from 'react';
import '../../assets/css/main.css'; // Import the generated CSS file

function ParticleText({ text, className}) {
  useEffect(() => {
    const createParticles = () => {
      const textContainer = document.querySelector('.particletext.lines');
      textContainer.textContent = text;

      const lineCount = (textContainer.offsetWidth / 50) * 10;

      for (let i = 0; i <= lineCount; i++) {
        const particle = document.createElement('span');
        particle.className = 'particle';
        particle.style.top = `${Math.floor(Math.random() * 61) - 30}%`;
        particle.style.left = `${Math.floor(Math.random() * 121) - 10}%`;
        particle.style.width = `${Math.floor(Math.random() * 3) + 1}px`;
        particle.style.height = `${Math.floor(Math.random() * 61) + 20}%`;
        particle.style.animationDelay = `-${(Math.random() * 3).toFixed(1)}s`;
        textContainer.appendChild(particle);
      }
    };

    createParticles();
  }, [text]); // Re-run the function when the text prop changes

  return (<span className={`textcontainer ${className}`}>
  <span className="particletext lines"></span>
</span>);
}

export default ParticleText;
