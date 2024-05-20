import React, { useState, useRef } from 'react';
import greenPawn from '../assets/green pawn.png';
import bluePawn from '../assets/blue pawn.png';
import yellowPawn from '../assets/yellow pawn.png';
import redPawn from '../assets/red pawn.png';
import Strikes from './strike';
import Greencircle from './greencircles';
import Redcircles from './Redcircles';
import Bluecircles from './Bluecircles';
import "../App.css";
import Yellowcircles from './Yellowcircles';


function Board() {
  const vertical = ['1', '2', '3', '4', '5'];
  const horizontal = ['a', 'b', 'c', 'd', 'e'];
  const [marginLeft, setMarginLeft] = useState(0); // State to manage marginLeft
  const [marginTop, setMarginTop] = useState(0); // State to manage marginTop
  const [position, setPosition] = useState({ h: '0', v: '0' }); // State to track current position
  const imageRef = useRef(null); // Ref to the image element

  const moveImage = () => {
    let newH = position.h;
    let newV = position.v;

    // Check if we need to move horizontally
    if (newH !== '2') {
      newH = String.fromCharCode(newH.charCodeAt(0) + 1);
      setMarginLeft(marginLeft + 100); // Move right by 100px
      console.log(newH, newV);
    } else if (newV !== '4') {
      // Move down after reaching the end of the horizontal line
      newV = (parseInt(newV) + 1).toString();
      setMarginTop(marginTop + 100); 
      console.log(newH, newV); // Move down by 100px
    }

    // Update the position state
    setPosition({ h: newH, v: newV });

    // Apply the CSS transition effect
    setTimeout(() => {
      const g = document.getElementById('gpr');
      if (g) {
        g.style.transition = 'margin 0.5s';
      }
    }, 50);
  };

  return (
    <div>
      <div className='board'>
        {horizontal.map((h) =>
          vertical.map((v) => (
            <div className='tile' key={`${h}${v}`}>
              {h === 'c' && v === '3' && (
                <div className='HOME'>
                  <div className='triangleu'></div>
                  <div className='triangler'></div>
                  <div className='trianglel'></div>
                  <div className='triangled'></div>
                  <Strikes />
                </div>
              )}
              {h === 'a' && v === '3' && (
                <div className='Parent'>
                  <Strikes />
                  <Greencircle />
                  <img
                    ref={imageRef}
                    src={greenPawn}
                    alt='Green Pawn'
                    className='pu'
                    id='pu'
                    //style={{ marginLeft: `${marginLeft}px`, marginTop: `${marginTop}px` }}
                  />
                  <img
                    ref={imageRef}
                    src={greenPawn}
                    alt='Green Pawn'
                    className='pr'
                    id='pr'
              
                  />
                  <img
                    ref={imageRef}
                    src={greenPawn}
                    alt='Green Pawn'
                    className='pd'
                    id='pd'
                  />
                  <img
                    ref={imageRef}
                    src={greenPawn}
                    alt='Green Pawn'
                    className='pl'
                    id='pl'
                    //style={{ marginLeft: `${marginLeft}px`, marginTop: `${marginTop}px` }}
                  />
                </div>
              )}
              {h === 'e' && v === '3' && (
                <div className='Parent'>
                  <Bluecircles/>
                  <Strikes />
                  <img src={bluePawn} alt='Blue Pawn' className='pu' />
                  <img src={bluePawn} alt='Blue Pawn' className='pr' />
                  <img src={bluePawn} alt='Blue Pawn' className='pl' />
                  <img src={bluePawn} alt='Blue Pawn' className='pd' />
                </div>
              )}
              {h === 'c' && v === '1' && (
                <div className='Parent'>
                  <Redcircles/>
                  <Strikes />
                  <img src={redPawn} alt='Red Pawn' className='pu' />
                  <img src={redPawn} alt='Red Pawn' className='pr' />
                  <img src={redPawn} alt='Red Pawn' className='pl' />
                  <img src={redPawn} alt='Red Pawn' className='pd' />
                </div>
              )}
              {h === 'c' && v === '5' && (
                <div className='Parent'>
                  <Yellowcircles/>
                  <Strikes />
                  <img src={yellowPawn} alt='Yellow Pawn' className='pu' />
                  <img src={yellowPawn} alt='Yellow Pawn' className='pr' />
                  <img src={yellowPawn} alt='Yellow Pawn' className='pd' />
                  <img src={yellowPawn} alt='Yellow Pawn' className='pl' />
                </div>
              )}
            </div>
          ))
        )}
      </div>
      <button className='inputs' onClick={moveImage}>
        Click me
      </button>
    </div>
  );
}

export default Board;
