import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Grommet } from 'grommet';
import Home from './Home';
import Button from './Button';

const history = createBrowserHistory();

export default class Sandbox extends Component {
  render() {
    return (
      <Router history={history}>
        <Grommet>
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/button' component={Button} />
          </Switch>
        </Grommet>
      </Router>
    );
  }
}
