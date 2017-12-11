import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import BudSearch from './Components/BudSearch';
import Show from './Components/Show';
import { Link } from 'react-router-dom';

const Routes = (
  <Router>
    <div>
      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/bud_search">Search</Link>
      </nav>
      <Route exact path = "/" component = { Home } />
      <Route exact path = "/bud_search" component = { BudSearch } />
      <Route exact path = "/show" component = { Show } />
    </div>
  </Router>
)

export default Routes;
