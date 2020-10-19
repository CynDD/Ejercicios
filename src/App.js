import React from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
} from 'react-router-dom';
import Counter from './components/Counter.js';
import Curry from './components/Curry.js';
import './App.css';
import Breeds from './components/Breeds.js';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => (
    
  <BrowserRouter>
    <main>
    <NavBar />
      <Switch>
        <Route exact path='/' render={() => <h1>Ejercicios Complementarios</h1>} />
        <Route exact path='/counter' component={Counter} />
        <Route exact path='/curry' component={Curry} />
        <Route exact path='/breeds' component={Breeds} />
        <Redirect to='/' />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
