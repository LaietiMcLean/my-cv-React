import React from 'react'

import '../../src/Components/Hero.css'


export const Hero = ({hero}) => {

    return (
      <>
        <div className='title-hero'>
          <h1>laia marco del prado</h1>
        </div>
   
        <div className = "container-hero">
          <p>📫 {hero.adress}</p>
          <p>🗺 {hero.city}</p>
          <p>👶🏻 {hero.birthDate}</p>
          <p>📩 <a href={"mailto:" + hero.email}>lmarcodelprado@gmail.com</a></p>
          <p>📱 {hero.phone}</p>
          <p>👉🏼 <a href={hero.gitHub}>GitHub</a></p>
        </div>
      </>
    )
    };

