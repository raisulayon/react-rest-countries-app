import { useEffect, useState } from "react";
import Country from "./Country";
import './countries.css'


const Countries = () => {
    const [countries, setCountries]=useState([]);
    const [visitedCountries, setVisitedCountries]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    const handleVisitedCountry = country => {
        console.log('Add this to visited Country');
        const newVisited=[...visitedCountries, country];
        setVisitedCountries(newVisited);
    }
    return (
        <div>
            <h2>Countries: {countries.length} </h2>
            <h3>Visited Countries: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className="grid">
            {countries.map(country=><Country 
                key={country.cca3} 
                country= {country}
                handleVisitedCountry={handleVisitedCountry}
                >
                </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;