import React, { useState } from 'react';
import Info from './components/Info';
import FormInput from './components/FormInput';
import './App.css';

const App = () => {
  const [Show, setShow] = useState(false);
  const setDisplay = () => {
    setShow(!Show);
  }

  return (
    <>
      <div className="display-content">
        <h1 className="heading">React-Assignment-01</h1>
        <Info visible={Show} setvisible={setDisplay} />
        <FormInput />
      </div>
    </>
  )
}

export default App;