import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import GridView from '../pages/GridView';
import Header from './Header';
import Footer from '../components/Footer';
import TableView from '../pages/TableView';

// TEst shit

//

function App() {
  return (
    <div className='App'>
      <Router>
        <Header logo='/images/logo.png' />
        <Switch>
          <Route exact path='/tableView/:page?' component={TableView} />
          <Route exact path='/gridView/:page?' component={GridView} />
          <Redirect to='/gridView/1' />
        </Switch>
        <Footer />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
