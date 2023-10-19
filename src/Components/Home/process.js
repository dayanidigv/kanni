import React, { useState } from 'react';
import './styles.css'; // Import your CSS file for styling
import Conceptualize from "../../assets/img/idea.png"
import DesignThinking from "../../assets/img/DesignThinking.jpg"
const steps = [
    {
        id: 1,
        title: 'Conceptualize',
        description: 'Brainstorm and ideate to create a solid plan for both software and hardware design.',
        image : Conceptualize
    },
    {
        id: 2,
        title: 'Design',
        description: 'Create detailed designs, including user interfaces for software and prototypes for hardware.',
        image : DesignThinking
    },
    {   
        id: 3,
        title: 'Develop',
        description: 'Bring designs to life using advanced technologies and manufacturing processes.',
        image : DesignThinking
    },
    {
        id: 4,
        title: 'Test',
        description: 'Thoroughly test software, hardware components, and systems for functionality and reliability.',
        image : DesignThinking
    },
    {
        id: 5,
        title: 'Deploy/Assemble',
        description: 'Deploy software products for public or private use. Assemble and integrate hardware components into the final product.',
        image : DesignThinking
    },
    {
        id: 6,
        title: 'Optimize',
        description: 'Continuously optimize software performance, user experience, and hardware performance and efficiency.',
        image : DesignThinking
    },
];

const OurProcess = () => {
    const [hoveredStep, setHoveredStep] = useState(null);

    const handleMouseEnter = (stepId) => {
        setHoveredStep(stepId);
    };

    const handleMouseLeave = () => {
        setHoveredStep(null);
    };


    return (
        <div className="section_our_solution">
            <h2 className="strong mt-5">Project Evolution</h2>
            <div className="row">
                {steps.map((step) => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={step.id}>
                        <StepItem
                            title={step.title}
                            id={step.id}
                            img = {step.image}
                            description={step.description}
                            onMouseEnter={() => handleMouseEnter(step.id)}
                            onMouseLeave={handleMouseLeave}
                            highlighted={hoveredStep === step.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
const StepItem = ({ title, description, id,img, onMouseEnter, onMouseLeave, highlighted }) => {
    return (
        <div className={`solution_card solution_card${id}`}>
            
            <div className="hover_color_bubble"></div>
            <div className="so_top_icon">
                <img className="processlogo" src={img} alt="mparticle" />
            </div>
            <div className="solu_title">
                <h3>{title}</h3>
            </div>
            <div className="solu_description">
                <p>{description}</p>
            </div>
        </div>
    );
};


export default OurProcess;