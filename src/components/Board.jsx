import React, { useState, useRef } from 'react';
import './App.css';
import greenPawn from './green pawn.png';
import bluePawn from './blue pawn.png';
import yellowPawn from './yellow pawn.png';
import redPawn from './red pawn.png';
import Strikes from './strike';
import Greencircle from './greencircles';

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
                <div>
                  <div className='triangleu'></div>
                  <div className='triangler'></div>
                  <div className='trianglel'></div>
                  <div className='triangled'></div>
                  <Strikes />
                </div>
              )}
              {h === 'a' && v === '3' && (
                <div>
                  <Strikes />
                  <Greencircle />
                  <img
                    ref={imageRef}
                    src={greenPawn}
                    alt='Green Pawn'
                    className='gpr'
                    id='gpr'
                    style={{ marginLeft: `${marginLeft}px`, marginTop: `${marginTop}px` }}
                  />
                </div>
              )}
              {h === 'e' && v === '3' && (
                <div>
                  <Strikes />
                  <img src={bluePawn} alt='Blue Pawn' className='gpu' />
                </div>
              )}
              {h === 'c' && v === '1' && (
                <div>
                  <Strikes />
                  <img src={redPawn} alt='Red Pawn' className='gpu' />
                </div>
              )}
              {h === 'c' && v === '5' && (
                <div>
                  <Strikes />
                  <img src={yellowPawn} alt='Yellow Pawn' className='gpu' />
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
