import './App.css';
import React, {useEffect, useState} from "react";

function App() {
    const [hex1, setHex1] = useState('');
    const [hex2, setHex2] = useState('');
    const [hex3, setHex3] = useState('');
    let hexes = [];
    const hexCount = 2;

    useEffect(() => {
        generateHex();
    }, []);

    const generateHex = () => {
        hexes = [];
        for(let i=0;i<=hexCount;i++){
            let n = (Math.random() * 0xfffff * 1000000).toString(16);
            hexes.push('#' + n.slice(0, 6));
        }
        console.log("Generated", hexes)
        setHex1(hexes[0]);
        setHex2(hexes[1]);
        setHex3(hexes[2]);
        return hexes;
    }

    document.body.onkeyup = function(e) {
        if (e.key === " " || e.code === "Space" || e.keyCode === 32
        ) {
            generateHex();
        }
    }

  return (
    <div className={"page"}>
        <div className={"third"} style={{background:hex1}}>
            <div className={"middle-txt"}>
                <div className={"txt"}>
                    <button className={"txt-btn"} onClick={() => {navigator.clipboard.writeText(hex1)}}>
                        {hex1}
                    </button>
                </div>
            </div>
        </div>
        <div className={"third"} style={{background:hex2}}>
            <div className={"middle-txt"}>
                <div className={"txt"}>
                    <button className={"txt-btn"} onClick={() => {navigator.clipboard.writeText(hex2)}}>
                        {hex2}
                    </button>
                </div>
            </div>
        </div>
        <div className={"third"} style={{background:hex3}}>
            <div className={"middle-txt"}>
                <div className={"txt"}>
                    <button className={"txt-btn"} onClick={() => {navigator.clipboard.writeText(hex3)}}>
                        {hex3}
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
