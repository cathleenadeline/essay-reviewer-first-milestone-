import logo from './logo.svg';
import './App.css';
import React from 'react';

function EssayForm() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('Cathleen');

  return (
    <div className="App">
      <header className="App-header">
        <div>count: <input type="text" value={count}></input></div>
        <div>first name: <input value={first_name} onChange={(e) => {setName(e.target.value);}}></input></div>
        <div>last name: <input value={last_name} onChange={(e) => {setName(e.target.value);}}></input></div>
        <p>Current state: {name}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </header>
    </div>
  );
}

export default EssayForm;
