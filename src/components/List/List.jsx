import React, { useContext } from 'react'
import { PersonajesContext } from '../../Contexts/personajesContext'
import Card from '../Card/Card';

const List = () => {

    const { personajes } = useContext(PersonajesContext);
    return (
        <div>
            { personajes.map( personaje => {
                return( <Card key={ personaje.id } name={personaje.name} status={personaje.status} image={personaje.image} species={personajes.species} /> )
            }) }
        </div>
    )
}

export default List
