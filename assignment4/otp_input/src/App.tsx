import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Otpinput } from './components/Otpinput';

const handleChange=(otp:string)=>{
  console.log("Received",otp);
  
}

function App() {
  return (
    <div className="App">
      <Otpinput totalInputs={5} onChange={handleChange}/>
    </div>
  );
}

export default App;
