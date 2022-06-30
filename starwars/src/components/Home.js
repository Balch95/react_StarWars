import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import PlanetList from "./PlanetList";

const Home = () =>{

    const [planet, setPlanet] = useState()


    let header = {
        "Content-Type" : "application/json",
        "vary": "Accept"
    }


    const downUniversePlanet = () =>{
        axios.get(
            "https://swapi.dev/api/planets/?page=1&format=json",
            header
        )
        .then((res)=>{
            setPlanet(res.data.results);
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        downUniversePlanet()
    },[])


console.log(planet)
    return(
        <div className="home">
            <h1>Star Wars App</h1>
            {planet&&<PlanetList planet={planet}/>}
        </div>
    )
}

export default Home;