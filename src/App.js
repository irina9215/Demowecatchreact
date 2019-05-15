import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './Style/App.css';
import './Style/overwrited.css';

import HomePage from './Components/Home';
import Moments from './Components/Moments'

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/moments" component={Moments} />
    </Switch>
  </Router>
)

export default App;
