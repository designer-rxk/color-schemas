import React from "react";
import {Helmet} from "react-helmet";

let hexes = [];
let hexCount = 4;

function getHexCode(){
    for(let i=0;i<=hexCount;i++){
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        hexes.push('#' + n.slice(0, 6));
    }
}

function Schemas() {
    getHexCode();
    return(
            <div className={"Page"}>
            <div className={"Schema"}></div>
            <div className={"Schema1"}></div>
            <div className={"Schema2"}></div>
            <div className={"Schema3"}></div>


           <Helmet><style>{`.Schema{background-color: ${hexes[0]};width:25%;height:100%;`}</style></Helmet>
           <Helmet><style>{`.Schema1{background-color: ${hexes[1]};width:25%;height:100%;`}</style></Helmet>
           <Helmet><style>{`.Schema2{background-color: ${hexes[2]};width:25%;height:100%;`}</style></Helmet>
           <Helmet><style>{`.Schema3{background-color: ${hexes[3]};width:25%;height:100%;`}</style></Helmet>

</div>

    );
}
export default Schemas;
