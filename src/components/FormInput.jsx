import React, { useState } from 'react';

const FormInput = () => {
  const [inData, setinData] = useState('');
  const [finalData, setfinalData] = useState([]);
  const AddClick = () => {
    { { (inData.trim() !== '') ? setfinalData((val) => [...val, inData.trim()]) : alert('Data cannot be empty') } }
    setinData('');
  };
  return (

    <div className="App">
      <input type="text" value={inData} onChange={(e) => setinData(e.target.value)} autoComplete='off' placeholder="Enter here" />
      <button onClick={AddClick} >Add</button>
      <p id="displayPara">{finalData.map((data, currentIndex) => (
        <span key={currentIndex} style={{ backgroundColor: (currentIndex + 1) % 5 === 0 ? 'blue' : 'inherit' }}>{data + ' '}</span>
      ))}
      </p>
    </div>
  );
}

export default FormInput;