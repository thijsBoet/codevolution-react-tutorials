import React from 'react';
import CountUp, {useCountUp} from 'react-countup';
import './App.css';

function App() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 2,
    end: 10000
  })
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {countUp}
          <br/>
          <button onClick={start}>Start</button>
          <button onClick={reset}>Reset</button>
          <button onClick={pauseResume}>pauseResume</button>
          <button onClick={() => update(2000)}>Update to 2000</button>
        </div>
        <div>
          <CountUp end={200} />
        </div>
        <div>
          <CountUp end={200} duration={1} />
        </div>
        <div>
          <CountUp start={500} end={1000} duration={5} />
        </div>
        <div>
          <CountUp prefix="€ " decimals={2} start={0} end={1000} duration={5} />
        </div>
        <div>
          <CountUp suffix=" EUR" decimals={2} start={0} end={1000} duration={5} />
        </div>
        <div>
          <CountUp suffix=" EUR" decimals={2} start={0} end={1000} duration={5} />
        </div>
      </header>
    </div>
  );
}

export default App;
