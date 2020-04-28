import React from 'react'

function Gifs(props) {
  let giffs = props.giffs.map((giff, i) => {
    return (
      <div>
        <img src={giff.image_url} alt='' />
      </div>
    )
  })

  return(
    <div className='container'>
      <div className='grid-3'>
        {giffs}
      </div>
    </div>
  )
}
export default Gifs
