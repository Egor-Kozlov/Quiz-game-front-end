import Numbers from "./components/Number/Number";
import './App.scss'
import Form from './components/Form/Form'
import React, { useState } from 'react';



const App: React.FC = () => {
  return (
    <div className="container">
      <Form />
      {/* <div className="lobby-container">
        <div className="pin-game">
          <h1>Game PIN:</h1>
          <Numbers />
          <button className="start-button">Chuck</button>
        </div>
        
      </div> */}
    </div>
  )
}

export default App;
