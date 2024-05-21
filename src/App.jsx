import React, { useState } from 'react';
import Images_front from './components/Total.jsx';
import './App.css'; 

function App() {
  const [imagesVisible, setImagesVisible] = useState(false); 

  const handleButtonClick = () => {
    setImagesVisible(!imagesVisible); 
  };
  const handleCounts = (countf, countb) => {
    console.log("after change!");
    console.log("Front Gavullu Count:", countf.countf);
    console.log("Back Gavullu Count:", countf.countb);
  }; 

  return (
    <div className="container">
      <h1 className='Heading_app'>PLAY</h1>
      {imagesVisible && <Images_front onCounts= {handleCounts} />} {}
      <button onClick={handleButtonClick} className='Apnabutton'>LET'S ROLL</button>
    </div>
  );
}

export default App;
