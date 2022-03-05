import React from 'react'

import '../../src/Components/Education.css'

export const Education = ({education}) => {
  return (
    <>
      <div className='title-education'>
        <h2>EDUCATION</h2>
      </div>
      <div className='container-education'>
      {education.map((item) => {
          return (

            <div key={JSON.stringify(item)}>
              <p className="name"> {item.name}</p>
              <p className="where">{item.where}</p>
              <p>{item.date}</p>
              <hr />
            </div>
          )}
          )}
      </div>     
    </>
  )
}
