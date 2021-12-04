import React from 'react'

const Card = ({ name, status, image, species, gender}) => {
    return (
        <div>
            <h3>{ name }</h3>
            <img src={ image } alt="imagen del personaje" />
            <p>{ gender }</p>
            <span>{ status }</span>
        </div>
    )
}

export default Card
