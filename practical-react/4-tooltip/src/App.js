import React, {forwardRef} from 'react';
import Tippy from '@tippy.js/react';

import 'tippy.js/dist/tippy.css';
import './App.css';

const ColoredTooltip = () => {
  return <span style={{ color: 'yellow' }}>Colored Component</span>
}

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>
        First Line
      </div>
      <div>
        Second Line
      </div>
    </div>
  )
})

function App() {
  return (
    <div className="App">
      <div style={{ paddingBottom: "20px" }}>
        <Tippy arrow={false} content="Basic ToolTip">
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy
          delay={1000}
          content={<span style={{ color: "orange" }}>Colored</span>}
        >
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy placement="right" content={<ColoredTooltip></ColoredTooltip>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy placement="top-end" content={<ColoredTooltip></ColoredTooltip>}>
          <CustomChild></CustomChild>
        </Tippy>
      </div>
    </div>
  );
}

export default App;
