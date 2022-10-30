import React from 'react';
import axios from 'axios';
import './App.css';
import { Router } from 'express';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Conclusion from '../Conclusion/Conclusion';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>

        <Route>
          <Feeling />
        </Route>

        <Route>
          <Understanding />
        </Route>

        <Route>
          <Support />
        </Route>

        <Route>
          <Comments />
        </Route>

        <Route>
          <Conclusion />
        </Route>

      </Router>
    </div>
  );
}

export default App;
