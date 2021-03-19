import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Formview from './components/form'
import List from './components/list'
import './App.css';
import Details from './components/details';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to='/'>Form</Link>
            </li>
            <li>
            <Link to='/list'>List</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Formview}></Route>
          <Route exact path='/list' component={List}></Route>
          <Route exact path='/list/:id' component={Details}></Route>
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
