import React, { useState } from 'react';


function UppercaseConverter() {
    const [input, setInput] = useState('');
    const [uppercase, setUppercase] = useState('');
  
    const handleInputChange = (event) => {
      const newInput = event.target.value;
      setInput(newInput);
      setUppercase(newInput.toUpperCase());
    };
  
    return (
      <div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
        <p>Uppercase: {uppercase}</p>
      </div>
    );
  }
  
  export default UppercaseConverter;