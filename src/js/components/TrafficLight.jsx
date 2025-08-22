import React, { useState } from "react";

const TrafficLight = () => {
 
  const [color, setColor] = useState("red");

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
          onClick={() => setColor("red")}
        ></div>
        
       
        <div
          className={`light yellow-light ${color === "yellow" ? "glow" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>
        
    
        <div
          className={`light green-light ${color === "green" ? "glow" : ""}`}
          onClick={() => setColor("green")}
        ></div>
      </div>

      <button className="change-color-button" onClick={changeColorManual}>
        Cambia el color
      </button>
    </div>
  );
};

export default TrafficLight;