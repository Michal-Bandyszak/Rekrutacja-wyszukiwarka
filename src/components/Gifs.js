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
    <div>
      {giffs}
    </div>
  )
}
export default Gifs
