import React, { useState } from 'react'
import Content from './Content';
import Input from './Input';


function App() {
  const [colorName, setColorName] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState('true');

  return (
    <div className='App'>
      <Content 
        colorName={colorName}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input 
        setColorName={setColorName}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
