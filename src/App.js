import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Present} from './pages';

// import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Present} />
    </Switch>
  </Router>
);

export default App;
