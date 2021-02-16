import React from 'react'

const Location = ({city}) => {
    return (
        <div className="location-box">

        <div className="location">{city}</div>
        <div className="date">15/02/2021</div>
      </div>
    )
}

export default Location
