import React, { useState } from 'react';
import Images_front from './components/Total.jsx';
import './App.css'; 

function App() {
  const [imagesVisible, setImagesVisible] = useState(false); 

  const handleButtonClick = () => {
    setImagesVisible(!imagesVisible); 
  };

  return (
    <div className="container">
      <h1 className='Heading_app'>PLAY</h1>
      {imagesVisible && <Images_front />} {}
      <button onClick={handleButtonClick} className='Apnabutton'>LET'S ROLL</button>
    </div>
  );
}

export default App;
