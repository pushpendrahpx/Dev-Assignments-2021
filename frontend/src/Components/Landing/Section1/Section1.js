import React from "react";
import "./Section1.css"
import Section1BG from "./../../../Assets/section1bg.png";
import Pokeball from "./../../../Assets/Pokeball.png"
import Pikachu from "./../../../Assets/pikachu.png"
import Bulbasor from "./../../../Assets/Bulbasor.png"
import Charmander from "./../../../Assets/Charmander.png"
import Pokemon1 from "./../../../Assets/pokemon1.png"
let Section1 = ()=>{
    return <div className="Section1">
        <img draggable="false" src={Pokeball} className="Section1Pokeball user-select-none" />
        <img draggable="false" src={Pikachu} className="Pikachu user-select-none" />
        <img draggable="false" src={Bulbasor} className="Bulbasor user-select-none" />
        <img draggable="false" src={Charmander} className="Charmander user-select-none"  />
        <img draggable="false" src={Pokemon1} className="Pokemon1 user-select-none" />


        <div className="Section1Title">
            <div className="Section1TitleT1">Search your Favourite </div>
            <div className="Section1TitleT1B1">Pokemon</div>
        </div>
    </div>
}
export default Section1;
