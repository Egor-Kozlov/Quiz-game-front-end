import Numbers from "./components/Number/Number";
import './App.scss'
import React, { useState } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Button } from "@mui/material";



const App: React.FC = () => {
  return (
    <div className="container">

      {/* <div className="lobby-container">
        <div className="pin-game">
          <h1>Game PIN:</h1>
          <Numbers />
          <button className="start-button">Chuck</button>
        </div>
        
      </div> */}
      <div>
        <FormGroup className='form'>
          <FormControl>
            <InputLabel>Full Name</InputLabel>
            <Input />
          </FormControl>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input />
          </FormControl>
          <FormControl>
            <InputLabel>Password</InputLabel>
            <Input />
          </FormControl>
          <Button variant="contained" color='secondary' className="button">Send</Button>
        </FormGroup>
      </div>
    </div>
  )
}

export default App;
