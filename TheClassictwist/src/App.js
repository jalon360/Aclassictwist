// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LaunchPage from './LaunchPage';
import HomePage from './HomePage';
import CateringPage from './CateringPage';
import AboutUsPage from './AboutUsPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={LaunchPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/catering" component={CateringPage} />
      <Route path="/about-us" component={AboutUsPage} />
    </Switch>
  </Router>
);

export default App;
