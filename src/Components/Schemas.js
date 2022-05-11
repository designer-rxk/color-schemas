import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";

let hexes = []; let rgbArray = [];
const hexCount = 3;

function generateHex(){
    hexes = [];
    for(let i=0;i<=hexCount;i++){
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        hexes.push('#' + n.slice(0, 6));
    }
    console.log("Generated", hexes)
    return hexes;
}
function hexToRgb(hexElement) {
    const normal = hexElement.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (normal) rgbArray.push( normal.slice(1).map(e => parseInt(e, 16)));
    const shorthand = hexElement.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (shorthand) rgbArray.push( shorthand.slice(1).map(e => 0x11 * parseInt(e, 16)));
    console.log("RGB = ",rgbArray)
    return null;
}
function Schemas() {
    let hexArray = generateHex();
        for(let i=0;i<=hexArray.length-1;i++){
        hexToRgb(hexArray[i]);
    }
    //States
    let [hexCode0, setHexCode0] = useState(hexArray[0]);
    let [hexCode1, setHexCode1] = useState(hexArray[1]);
    let [hexCode2, setHexCode2] = useState(hexArray[2]);
    let [hexCode3, setHexCode3] = useState(hexArray[3]);

    useEffect(()=>{
        console.log("changed")

    },[hexCode0,hexCode1,hexCode2,hexCode3])

    return(
        <div className={"Page"}
        onKeyDown={(e) =>
        {if(e.keyCode === 32){
            console.log("Pressed 'Space'")
            generateHex();
            setHexCode0( hexCode0 = hexArray[0]);
            setHexCode1( hexCode1 = hexArray[1]);
            setHexCode2( hexCode2 = hexArray[2]);
            setHexCode3( hexCode3 = hexArray[3]);

            console.log("States",hexCode0,hexCode1,hexCode2,hexCode3);
        }}}
        tabIndex={0}>
        <div className={"Grid"}>
            <div className={"Schema"}><div>{hexCode0}</div><div>{"R: "+rgbArray[0][0]+" G: "+rgbArray[0][1]+"B: "+rgbArray[0][2]}</div></div>
            <div className={"Schema-One"}><div>{hexCode1}</div><div>{"R: "+rgbArray[1][0]+" G: "+rgbArray[1][1]+"B: "+rgbArray[1][2]}</div></div>
            <div className={"Schema-Two"}><div>{hexCode2}</div><div>{"R: "+rgbArray[2][0]+" G: "+rgbArray[2][1]+"B: "+rgbArray[2][2]}</div></div>
            <div className={"Schema-Three"}><div>{hexCode3}</div><div>{"R: "+rgbArray[3][0]+" G: "+rgbArray[3][1]+"B: "+rgbArray[3][2]}</div></div>
       <Helmet>
           <style>{`.Schema{background-color: ${hexCode0};`}</style>
           <style>{`.Schema-One{background-color: ${hexCode1};`}</style>
           <style>{`.Schema-Two{background-color: ${hexCode2};`}</style>
           <style>{`.Schema-Three{background-color: ${hexCode3};`}</style>
       </Helmet>
        </div>
        </div>
    );
}
export default Schemas;
