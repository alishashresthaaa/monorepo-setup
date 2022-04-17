import { Button } from "@yoapp/components";
import { getJustAmount } from "@yoapp/utils";
import React from 'react';
import './App.css';

function App() {
  console.log("get amount", getJustAmount("NPR. 200"))
  return (
    <div className="App">
      Client
      <Button name='Submit' size='sm' type='button' />
    </div>
  );
}

export default App;
