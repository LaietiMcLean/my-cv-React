import React from 'react'

import '../../src/Components/More.css'

export const More = ({languages, habilities, volunteer}) => {
  return (
    <>

    <div className='title-more'>
      <h2>LANGUAGES</h2>
    </div>
    <div className='container-more'>
        {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="language">{item.language}</p>
              <p>✍🏼{item.wrlevel}</p>
              <p>🗨{item.splevel}</p>
              <hr />
            </div>
          )}
        )}
    </div>

    <div className='title-more'>
      <h2>HABILITIES</h2>
    </div>
    <div className='container-more'>
        {habilities.map((item) => {
          return (
            <div key={(item)}>
              <p>✅ {item}</p>  
            </div>
          )
        })}
    </div>

    <div className='title-more'>
      <h2>VOLUNTEER</h2>
    </div>
    <div className='container-more'>
        {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name"> {item.name}</p>
              <p className="where">{item.where}</p>
              <p className="description">{item.description}</p>
              <hr />
            </div>
          )}
        )}
    </div>
    
    </>
  )
}
