import React from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import './App.css';

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong!
       <button onClick={closeToast}>Close</button>
    </div>
  )
}

toast.configure()
function App() {
  const notify = () => {
    toast('Basic notification')
  }

  const notifyPosition = () => {
    toast("Basic TOP_LEFT notification", { position: toast.POSITION.TOP_LEFT });
    toast('Basic TOP_CENTER notification', {position: toast.POSITION.TOP_CENTER})
    toast('Basic TOP_RIGHT notification', {position: toast.POSITION.TOP_RIGHT})
    toast('Basic BOTTOM_LEFT notification', {position: toast.POSITION.BOTTOM_LEFT})
    toast('Basic BOTTOM_CENTER notification', {position: toast.POSITION.BOTTOM_CENTER})
    toast('Basic BOTTOM_RIGHT notification', {position: toast.POSITION.BOTTOM_RIGHT})
  }

  const notifyTypes = () => {
    toast.success("Success notification", { position: toast.POSITION.TOP_LEFT });
    toast.info('Info TOP_CENTER notification', {position: toast.POSITION.TOP_CENTER})
    toast.warn('Warning TOP_RIGHT notification', {position: toast.POSITION.TOP_RIGHT})
    toast.error('Error BOTTOM_LEFT notification', { position: toast.POSITION.BOTTOM_LEFT })
    toast('Basic BOTTOM_CENTER notification', {position: toast.POSITION.BOTTOM_CENTER})
    toast('Basic BOTTOM_RIGHT notification', {position: toast.POSITION.BOTTOM_RIGHT})
  }

  const notifyAutoClose = () => {
    toast("10 secs TOP_LEFT notification", { position: toast.POSITION.TOP_LEFT, autoClose: 10000 });
    toast('8 secs TOP_CENTER notification', {position: toast.POSITION.TOP_CENTER, autoClose: 8000 })
    toast('6 secs TOP_RIGHT notification', {position: toast.POSITION.TOP_RIGHT, autoClose: 6000 })
    toast('4 secs BOTTOM_LEFT notification', {position: toast.POSITION.BOTTOM_LEFT, autoClose: 4000})
    toast('2 secs BOTTOM_LEFT notification', {position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000})
    toast('Don"t close BOTTOM_RIGHT notification', {position: toast.POSITION.BOTTOM_RIGHT, autoClose: false})
  }

  const customToast = () => {
    toast.warn(<CustomToast />, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
  }

  return (
    <header className="App">
      <div>
        <button onClick={notify}>Default Notify!</button>
      </div>
      <div>
        <button onClick={notifyPosition}>Notify Positions!</button>
      </div>
      <div>
        <button onClick={notifyTypes}>Notify Types!</button>
      </div>
      <div>
        <button onClick={notifyAutoClose}>Notify Auto Close!</button>
      </div>
      <div>
        <button onClick={customToast}>Custom Component!</button>
      </div>
    </header>
  );
}

export default App;
