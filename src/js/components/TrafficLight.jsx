import React, { useState, useEffect } from "react";

const TrafficLight = () => {
   
    const [color, setColor] = useState("red");

    
    useEffect(() => {
    
        const colors = ["red", "yellow", "green"];
        let currentColorIndex = colors.indexOf(color);

        // temporizador que se ejecuta cada 3 segundos.
        const timer = setInterval(() => {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            setColor(colors[currentColorIndex]);
        }, 3000);

      
        return () => clearInterval(timer);
    }, [color]); 

    
    const changeColorManual = () => {
        const colors = ["red", "yellow", "green"];
        const currentColorIndex = colors.indexOf(color);
        const nextColorIndex = (currentColorIndex + 1) % colors.length;
        setColor(colors[nextColorIndex]);
    };

    return (
        <div className="traffic-light-container">
            <div className="traffic-light-pole"></div>
            <div className="traffic-light-box">
 
                <div
                    className={`light red-light ${color === "red" ? "glow" : ""}`}
                ></div>
    
                <div
                    className={`light yellow-light ${color === "yellow" ? "glow" : ""}`}
                ></div>
    
                <div
                    className={`light green-light ${color === "green" ? "glow" : ""}`}
                ></div>
            </div>

            <button className="change-color-button" onClick={changeColorManual}>
                Cambia el color
            </button>
        </div>
    );
};

export default TrafficLight;