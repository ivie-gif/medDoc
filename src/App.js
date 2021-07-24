import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Landing from './components/Landing/index'
import Signup from './components/Signup/index'
import Login from './components/Login/index'
import Dashboard from './components/Dashboard/Landing/index'


function App() {
  return (
    <BrowserRouter>
    <Switch>
  <Route exact path='/'>
    <Landing/>
    </Route>
    <Route path ='/login'>
      <Login />
    </Route>
    <Route path ='/signup'>
      <Signup />
    </Route>
    <Route path ='/dashboard'>
      <Dashboard />
    </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
