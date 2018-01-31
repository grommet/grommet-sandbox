import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Grommet } from 'grommet';
import Home from './Home';
import Anchor from './Anchor';
import Box from './Box';
import Button from './Button';
import Grid from './Grid';

const history = createBrowserHistory();

export default class Sandbox extends Component {
  render() {
    return (
      <Router history={history}>
        <Grommet>
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/box' component={Box} />
            <Route exact={true} path='/grid' component={Grid} />
            <Route exact={true} path='/anchor' component={Anchor} />
            <Route exact={true} path='/button' component={Button} />
          </Switch>
        </Grommet>
      </Router>
    );
  }
}
