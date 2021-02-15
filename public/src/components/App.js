import React from 'react';
import './App.css'
import {Switch, Route} from 'react-router-dom';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import {Navigation} from './Navigation';
import Brunch from './Brunch';
import Dinner from './Dinner';

export class App extends React.Component {

  render() {
    return(
      <div id="app">
        <Navigation />

        <Switch>
          <Route path="/breakfast" component={Breakfast} />
          <Route path="/lunch" component={Brunch} />
          <Route path="/lunch" component={Lunch} />
          <Route path="/dinner" component={Dinner} />
        </Switch>
      </div>
    )
  }
}

export default App;
