import React, { useState } from 'react';

function TextInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={() => alert(inputValue)}>Display Text</button>
    </div>
  );
}

export default TextInput;
