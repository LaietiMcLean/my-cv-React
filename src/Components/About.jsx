import React from 'react'

import '../../src/Components/About.css'

export const About = ({hero}) => {

  return (
    <>
          <div className="title-about">
        <h2>ABOUT ME</h2>
      </div>
    <div className = "container-about">
      {hero.aboutMe.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.info}</p>
            </div>
          );
      })}
      </div>
    </>
  )
};


