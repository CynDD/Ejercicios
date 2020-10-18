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

const App = () => (
    
  <BrowserRouter>
  
    <main>
        <ul className='list'>
          <li className='element'>
            <NavLink exact to='/' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className='element'>
            <NavLink to='/counter' activeClassName='active'>
              Ejercicio 1
            </NavLink>
          </li>
          <li className='element'>
            <NavLink to='/curry' activeClassName='active'>
              Ejercicio 2
            </NavLink>
          </li>
          <li className='element'>
            <NavLink to='/breeds' activeClassName='active'>
              Ejercicio 3
            </NavLink>
          </li>
        </ul>
        

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
