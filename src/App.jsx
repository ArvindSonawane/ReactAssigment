import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    console.log('hello')
  }
  return (
    <main>
      React⚛️ + Vite⚡ + Replit🌀
      <button onClick={handleClick}>click me</button>
    </main>
  );
}

export default App;