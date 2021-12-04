import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { PersonajesContext } from '../../Contexts/personajesContext';
import { BASE_URL } from '../../utils/endpoints';

const Filter = () => {

    const { personajes, setPersonajes } = useContext(PersonajesContext);
    const STATUS_OPTIONS = ['Alive', 'Dead','Unknown'];
    const load = async() => {
        const resp = await axios.get(`${BASE_URL}/character`)
        setPersonajes( resp.data.results );
    }

    //TODO: llamar api para filtrar
    const handleChange = (e)=> {
        console.log(e.target.value);
    }

    useEffect( () => {
        load();
    }, [])
    //TODO: implementar opciones del select
    return (
        <div>
            <select onChange={ handleChange } name="">

            </select>
        </div>
    )
}

export default Filter
