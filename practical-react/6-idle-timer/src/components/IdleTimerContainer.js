import React, { useState, useRef } from "react";
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const IdleTimerContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  const onIdle = () => {
    setmodalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
  }

  const stayActive = () => {
    setmodalIsOpen(false);
    clearTimeout(sessionTimeoutRef.current);
  }

  const logOut = () => {
    setmodalIsOpen(false);
    setIsLoggedIn(false);
    clearTimeout(sessionTimeoutRef.current);
  };
  
  return (
    <div>
      {
        isLoggedIn
          ? <h2>Hallo Matthijs</h2>
          : <><h2>Hello Guest</h2><p>Please Login</p></>
      }
      <Modal isOpen={modalIsOpen}>
        <h2>You have been idle for a while!</h2>
        <p>You will be logged out soon</p>
        <div>
          <button onClick={logOut}>Log me out</button>
          <button onClick={stayActive}>Keep me signed in</button>
        </div>
      </Modal>
      <IdleTimer
        ref={idleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
      >
        
      </IdleTimer>
    </div>
  );
}



export default IdleTimerContainer;
