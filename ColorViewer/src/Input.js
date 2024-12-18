import React from 'react'
import colorNames from 'colornames';

const Input = ({setColorName, setHexValue, isDarkText, setIsDarkText}) => {

  return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add Color Name or Hex Value:</label>
            <input
                autoFocus
                className='inputBox'
                type='text'
                placeholder='Add Color Name'
                required
                onChange={ (e) => {
                    setColorName(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
        </form>

  )
}

export default Input