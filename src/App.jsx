import React, { useState } from 'react';
import './App.css'

function App() {
  // State to handle hover status
  const [isHovered, setIsHovered] = useState(false);

  // Inline styles for the button's default and hovered states
  const defaultStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundImage: 'linear-gradient(to right, #ff7e5f, #feb47b)',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-image 0.5s ease-in-out',
  };

  const hoverStyle = {
    ...defaultStyle,
    backgroundImage: 'linear-gradient(to right, #6a11cb, #2575fc)',
  };

  return (
    <button
      style={isHovered ? hoverStyle : defaultStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Hover Over Me
    </button>
  );
}

export default App;
