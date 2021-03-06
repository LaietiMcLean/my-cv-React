import React from 'react'

import '../../src/Components/Hero.css'


export const Hero = ({hero}) => {

    return (
      <>
        <div className='title-hero'>
          <h1>laia marco del prado</h1>
        </div>
   
        <div className = "container-hero">
          <p>π« {hero.adress}</p>
          <p>πΊ {hero.city}</p>
          <p>πΆπ» {hero.birthDate}</p>
          <p>π© <a href={"mailto:" + hero.email}>lmarcodelprado@gmail.com</a></p>
          <p>π± {hero.phone}</p>
          <p>ππΌ <a href={hero.gitHub}>GitHub</a></p>
        </div>
      </>
    )
    };

