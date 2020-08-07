import React from 'react'
import './myStyles.css';

const heading = {
  fontSize: '72px',
  color: 'blue'
}

function StyleSheet(props) {
  let className = props.primary ? 'primary' : '';

  return (
    <div>
      {/* Stylesheet */}
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
      {/* Inline styles */}
      <h1 style={heading}>Inline</h1>
    </div>
  );
}

export default StyleSheet
