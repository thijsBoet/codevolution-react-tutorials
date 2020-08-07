import React from 'react';
import StyleSheet from "./components/StyleSheet";
import styles from './appStyles.module.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <StyleSheet primary={true} />
      {/* Module Stylesheet */}
      <h1 className={styles.error}>Module</h1>
      <h1 className={styles.success}>Module</h1>
    </div>
  );
}

export default App;
