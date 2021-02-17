import React from 'react';
import './App.css'
import {Switch, Route} from 'react-router-dom';
import Breakfast from '../components/pages/Breakfast';
import Lunch from '../components/pages/Lunch';
import {Nav} from '../components/navbar/Navbar';
import Brunch from '../components/pages/Brunch';
import Dinner from '../components/pages/Dinner';
import Login from './pages/Login';
import Singup from './pages/Singup';

export class App extends React.Component {

  render() {
    return(
      <div id="app">
        <Nav />

        <Switch>
          <Route path="/breakfast" component={Breakfast} />
          <Route path="/brunch" component={Brunch} />
          <Route path="/lunch" component={Lunch} />
          <Route path="/dinner" component={Dinner} />
          <Route path="/login" component={Login} />
          <Route path="/sing-up" component={Singup} />
        </Switch>
      </div>
    )
  }
}

export default App;
