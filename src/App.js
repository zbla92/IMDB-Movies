import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import home from './pages/home';
import tableView from './pages/tableView';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={home}/>
            <Route exact path='/tableView' component={tableView}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
