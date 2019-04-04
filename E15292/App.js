import React, { Component } from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import UserManagement from './pages/UserManagement'
import {BrowserRouter, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';
import Show from './pages/Show';
import Create from './pages/Create';
import Edit from './pages/Edit';

class App extends Component {
  



  render() {
    return (
      <BrowserRouter>
        <div>


          <Route exact={true} path='/' render={() => (
              <Admin />
          )}/>

          <Route exact={true} path='/signup' render={() => (
              <Test />
          )}/>

          <Route exact={true} path='/user' render={() => (
              <UserManagement />
          )}/>

           <Route exact={true} path='/logout' render={() => (
              <Home />
          )}/>

           <Route exact={true} path='/dashboard' render={() => (
              <Dashboard />
          )}/>

          <Route exact={true} path='/show' render={() => (
              <Show />
          )}/>
           
           <Route exact={true} path='/create' render={() => (
              <Create />
          )}/>

          <Route exact={true} path='/edit' render={() => (
              <Edit />
          )}/>
           
          
        </div>
      </BrowserRouter>
    );
  }
}
export default App;