import React from 'react';
import './App.css'
import {Switch, Route} from 'react-router-dom';
import Breakfast from '../components/pages/Breakfast';
import Lunch from '../components/pages/Lunch';
import {Nav} from '../components/navbar/Navbar';
import Footer, {} from '../components/footer/Footer';
import Brunch from '../components/pages/Brunch';
import Dinner from '../components/pages/Dinner';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

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
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
        </Switch>

        <Footer />
      </div>
    )
  }
}

export default App;
