import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Conclusion from '../Conclusion/Conclusion';
import Home from '../Home/Home';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/feeling" exact>
          <Feeling />
        </Route>

        <Route path="/understanding" exact>
          <Understanding />
        </Route>

        <Route path="support" exact>
          <Support />
        </Route>

        <Route path="comments" exact>
          <Comments />
        </Route>

        <Route path="conclusion" exact>
          <Conclusion />
        </Route>

      </Router>
    </div>
  );
}

export default App;
