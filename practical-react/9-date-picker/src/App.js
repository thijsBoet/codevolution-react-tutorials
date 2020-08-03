import React, {useState} from 'react';
import DatePicker from 'react-datepicker';

import './App.css';
import 'react-datepicker/dist/react-datepicker.css';


function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">Select Date</h1>
        <DatePicker
          className="datepicker"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          // previous dates disabled
          minDate={new Date()}

          // future dates disabled
          // maxDate={new Date()}

          // no weekend dates
          filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}

          // clear button
          isClearable={true}

          showYearDropdown

          scrollableMonthYearDropdown
        />
      </header>
    </div>
  );
}

export default App;
