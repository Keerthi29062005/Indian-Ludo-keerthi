import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Board from './components/Board.jsx'
import './index.css';
import './components/main.css';

const RootComponent = () => (
  <div className="Entire">
    <Board className="Box"/>
    <App className="Box"/>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>,
);