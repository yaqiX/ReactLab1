// Create a component that changes its background color when a button is clicked.
// • Create a new functional component called Color Changer.
// • Add a state property called backgroundColor to the component using the useState hook and set it to an initial color.
// • Add a button to the component that, when clicked, generates a random color and sets the backgroundColor state property to that color.
// • Use the backgroundColor state property to set the background color of the component.


import React, { useState } from 'react';

function ColorChanger() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const getRandomColor = () => {
    const letters = 'ABCDEF1234567890';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()*16)];
    }
    console.log(color)
    // let color = 'red'
    return color;
  };

  const changeBackgroundColor = () => {
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
  };

  return (
    <div
      className="color-changer"
      style={{backgroundColor }}
    >
      <button onClick={changeBackgroundColor}>Change Color</button>
      <p>color changed to {backgroundColor}</p>
    </div>
  );
}

export default ColorChanger;
