import React from "react";
import { Circle } from 'react-awesome-shapes/dist/shapes/circle';
function Redcircles(){
    return(
        <>
             <Circle
    color="linear-gradient(135deg, red, red)"
    size={['20px', '20px', '15px', '15px']}
    className="Circleu" 
    zIndex={2}
/>
<Circle
    color="linear-gradient(135deg, red, red)"
    size={['20px', '20px', '15px', '15px']}
    className="Circled" 
    zIndex={2}
/>
<Circle
    color="linear-gradient(135deg, red, red)"
    size={['20px', '20px', '15px', '15px']}
    className="Circlel" 
    zIndex={2}
/>
<Circle
    color="linear-gradient(135deg, red, red)"
    size={['20px', '20px', '15px', '15px']}
    className="Circler" 
    zIndex={2} />
        </>
    );
}
export default Redcircles;