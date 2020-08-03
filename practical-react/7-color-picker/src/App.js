import React, {useState} from 'react';
import {ChromePicker} from 'react-color'
import './App.css';

function App() {
  const [color, setColor] = useState('#fff');
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{ color: color}}>You picked {color}</h2>
        <button
          onClick={() =>
            setShowColorPicker((showColorPicker) => !showColorPicker)
          }
        >
          {showColorPicker ? "Close color picker" : " Pick a color"}
        </button>
        <hr style={{ borderTop: `5px solid ${color}`}}/>
        <main>
          {showColorPicker && (
            <ChromePicker
              color={color}
              onChange={(updatedColor) => setColor(updatedColor.hex)}
            />
          )}
        </main>
      </header>
    </div>
  );
}

export default App;
