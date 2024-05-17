import React from "react";
import './App.css';
import { Circle } from 'react-awesome-shapes/dist/shapes/circle';
function Greencircle(){
    return(
        <>
             <Circle
    color="linear-gradient(135deg, green, green)"
    size={['20px', '20px', '15px', '15px']}
    className="GreenCircleu" 
    zIndex={2}
/>
<Circle
    color="linear-gradient(135deg, green, green)"
    size={['20px', '20px', '15px', '15px']}
    className="GreenCircled" 
    zIndex={2}
/>
<Circle
    color="linear-gradient(135deg, green, green)"
    size={['20px', '20px', '15px', '15px']}
    className="GreenCirclel" 
    zIndex={2}
/>
<Circle
    color="linear-gradient(135deg, green, green)"
    size={['20px', '20px', '15px', '15px']}
    className="GreenCircler" 
    zIndex={2} />
        </>
    );
}
export default Greencircle;