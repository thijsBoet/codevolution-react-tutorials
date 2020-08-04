import React from 'react';
import { css } from '@emotion/core';
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners'

import './App.css';

const loaderCSS = css`
  margin-top: 25px;
  margin-bottom: 25px;
`

function App() {
  return (
    <div className="App">
        <BounceLoader css={loaderCSS} loading size={24} color='red'/>
        <BarLoader css={loaderCSS} loading size={48} color='orange'/>
        <BeatLoader css={loaderCSS} loading size={72} color='maroon'/>
    </div>
  );
}

export default App;
