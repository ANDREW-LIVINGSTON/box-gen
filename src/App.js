import React, { useState } from "react";
import logo from './logo.svg';
import BoxForm from "./components/BoxForm"
import './App.css';

function App() {
  const [state, setState] = useState({
    color: ""
  });
  
  return (

    <div className="App">
      <BoxForm></BoxForm>
    </div>
  );
}

export default App;
