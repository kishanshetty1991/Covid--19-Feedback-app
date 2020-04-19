import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Welcome to covid-19 Feedback form
        </p>
        <a
          href="/auth/google"
        >
          Sign In with Google
        </a>
      </header>
    </div>
  );
}

export default App;
