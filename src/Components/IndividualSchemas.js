import React from "react";
import {Helmet} from "react-helmet";

let rgbArray = [];

function hexToRgb(hexElement) {
    const normal = hexElement.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (normal) rgbArray.push( normal.slice(1).map(e => parseInt(e, 16)));
    const shorthand = hexElement.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (shorthand) rgbArray.push( shorthand.slice(1).map(e => 0x11 * parseInt(e, 16)));
    return null;
}

const IndividualSchemas = ({hexCode0, hexCode1, hexCode2, hexCode3, hexArray}) => {
    for(let i=0;i<=hexArray.length-1;i++){
        hexToRgb(hexArray[i]);
    }
    return(
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
    );
}
export default IndividualSchemas;