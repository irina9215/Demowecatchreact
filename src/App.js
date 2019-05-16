import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './style/App.css';
import './style/overwrited.css';

import HomePage from './components/Home';
import Moments from './components/Moments'

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/moments" component={Moments} />
    </Switch>
  </Router>
)

export default App;
