import React from 'react';
import gavullu from '../assets/gavullu.jpg';
import gavullu2 from '../assets/gavullu2.jpg';
import '../css/Total.css';

function Images_front({}) {
    let images = [];
    let countf = 0;
    let countb = 0;

    for (let i = 0; i < 4; i++) {
        const x = Math.floor(Math.random() * 100) + 1; 
        const num = x % 2; 

        if (num === 0) {
            countf++;
            images.push(
                <div className="images-container" key={i}>
                    <img src={gavullu} alt="png" width="80" height="100" />
                </div>
            );
        } else {
            countb++;
            images.push(
                <div className="images-container" key={i}>
                    <img src={gavullu2} alt="png" width="80" height="100" />
                </div>
            );
        }
    }

    return (
        <div className="image-container">
            <h2 className="count">The Number of front = {countf}</h2>
            <h2 className="count">The Number of back = {countb}</h2>
            <div className="images-container">{images}</div>
        </div>
    );
}

export default Images_front;
