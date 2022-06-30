import React from "react";
import { useState } from "react";

import '../styles/PlanetList.css'


const PlanetList = (props) =>{


    let LiPlanet = props.planet.map((objPlanet)=>{
        return(
        <li key={objPlanet.name}>
            <h3>{objPlanet.name}</h3> 
            <span>Gravity: {objPlanet.gravity}</span>
            <span>Climate: {objPlanet.climate}</span>
            <span>Diameter: {objPlanet.diameter}</span>
            <span>Population: {objPlanet.population}</span>
            <span>Rotation Period: {objPlanet.rotation_period}</span>
            <span>Surface: {objPlanet.surface_water}</span>
        </li>
        );
    });


    return(
        <div className="planet-list">
            <ul>
                {LiPlanet}
            </ul>
        </div>
    )
}

export default PlanetList;