import React from 'react';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="chart">
        <LineChart />
        <BarChart />
        <DoughnutChart/>
      </div>
    </div>
  );
}

export default App;
