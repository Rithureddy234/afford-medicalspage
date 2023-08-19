import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={AllTrainsPage} />
          <Route path="/train/:trainId" component={SingleTrainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
