import React from 'react'
import { useState } from "react";

import { About } from './Components/About';
import { Education } from './Components/Education';
import { Experience } from './Components/Experience';
import { Hero } from './Components/Hero';
import { More } from './Components/More';
import { CV } from "./CV/CV";

import './index'
import './index.css'
import './normalize.css'

const { hero, education, experience, languages, habilities, volunteer } = CV;

export const MiCV = () => {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <>
    <img src="https://bit.ly/370GDTK" alt="FotoCV"></img>

    <div className='container-title'>
    Frontend Developer Resume 👩🏻‍💻
    </div>
   
    <Hero hero={hero} />

    <About hero={hero} />

    <nav>
      <div className='container-btn'>
        <button
          className="custom-btn"
          onClick={() => setShowEducation(true)}
        > Education </button>

        <button
          className="custom-btn"
          onClick={() => setShowEducation(false)}
        > Experience </button>
      </div>
    </nav>

    <div>
        {showEducation ? 
        (<Education education={education} />) : 
        (<Experience experience={experience} />)}
    </div>

    <More
      languages={languages}
      habilities={habilities}
      volunteer={volunteer}
     />
    </>
  )
}
