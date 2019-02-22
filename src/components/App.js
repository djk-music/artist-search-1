import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Artist from './artist/Artist';
import Song from './songs/Song';
import Search from './search/Search';

export default function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/artist/:id' component={Artist}/>
          <Route exact path='/song/:id' component={Song}/>
          <Route exact path='/' component={Search}/>
        </Switch>
      </Router>
    </Fragment>
  );


}