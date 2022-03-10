import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import IndividualSchemas from "./IndividualSchemas";

let hexes = [];
const hexCount = 3;

function generateHex(){
    hexes = [];
    for(let i=0;i<=hexCount;i++){
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        hexes.push('#' + n.slice(0, 6));
    }
    console.log("Generating", hexes)
    return hexes;
}
function Schemas() {
    let hexArray = generateHex();
    //States
    let [hexCode0, setHexCode0] = useState(hexArray[0]);
    let [hexCode1, setHexCode1] = useState(hexArray[1]);
    let [hexCode2, setHexCode2] = useState(hexArray[2]);
    let [hexCode3, setHexCode3] = useState(hexArray[3]);

    return(
        <div className={"Page"}
        onKeyDown={(e) =>
        {if(e.keyCode === 32){
            console.log("Pressed 'Space'")
            setHexCode0( hexCode0 = hexArray[0]);
            setHexCode1( hexCode1 = hexArray[1]);
            setHexCode2( hexCode2 = hexArray[2]);
            setHexCode3( hexCode3 = hexArray[3]);
        }}}
        tabIndex={0}>
            <IndividualSchemas  hexCode0={hexCode0} hexCode1={hexCode1} hexCode2={hexCode2} hexCode3={hexCode3} hexArray={hexArray}/>
        </div>
    );
}
export default Schemas;
