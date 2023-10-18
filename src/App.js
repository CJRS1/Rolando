import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Game from './components/games';

import './fonts/Hansip.ttf'
import './fonts/SCRUBLAND.ttf'

function App() {
  return (
    // <div className="App">
    //   <Game />
    // </div>
    <div className="App">
      <Router>
        <Link to="/">
          <Game />
        </Link>
      </Router>
    </div>
  );
}

export default App;
