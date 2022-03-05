import React from 'react'

import '../../src/Components/Experience.css'

export const Experience = ({experience}) => {
  return (
  <>
      <div className='title-experience'>
        <h2>EXPERIENCE</h2>
      </div>
      <div className='container-experience'>
      {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name"> {item.name}</p>
              <p className="where">{item.where}</p>
              <p>{item.date}</p>
              <p className="description">{item.description}</p>
              <hr />
            </div>
          )}
          )}
      </div>     
  </>
  )
}

