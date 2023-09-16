import { useState } from 'react';
import './countries.css'

const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, area, population}= country;
    //console.log(country);

    const [visited, setVisited]=useState(false);

    const handleVisited =()=>{
        setVisited(!visited)
    }

   

    return (
        <div className='box'>
            <h4>Name: {name?.common}</h4>
            <img src={flags.png}></img>
            <p>Area: {area} Square km</p>
            <p>Langauge: {population}</p>
            <button onClick={()=>{handleVisitedCountry(country)}}>Mark Visited</button>
            <br/>
            <button onClick={handleVisited}>{visited?  'visited': 'Going'} </button>
            {visited? 'Visited': 'I will Go'}
        </div>
    );
};

export default Country;