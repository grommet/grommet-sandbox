import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Grommet } from 'grommet';
import Home from './Home';
import Anchor from './Anchor';
import Box from './Box';
import Button from './Button';
import Calendar from './Calendar';
import CheckBox from './CheckBox';
import Grid from './Grid';
import Heading from './Heading';
import Layer from './Layer';
import Markdown from './Markdown';
import Menu from './Menu';
import Paragraph from './Paragraph';
import RadioButton from './RadioButton';
import Stack from './Stack';
import Text from './Text';

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
            <Route exact={true} path='/layer' component={Layer} />
            <Route exact={true} path='/stack' component={Stack} />

            <Route exact={true} path='/heading' component={Heading} />
            <Route exact={true} path='/markdown' component={Markdown} />
            <Route exact={true} path='/paragraph' component={Paragraph} />
            <Route exact={true} path='/text' component={Text} />

            <Route exact={true} path='/anchor' component={Anchor} />
            <Route exact={true} path='/button' component={Button} />
            <Route exact={true} path='/menu' component={Menu} />

            <Route exact={true} path='/calendar' component={Calendar} />
            <Route exact={true} path='/checkbox' component={CheckBox} />
            <Route exact={true} path='/radiobutton' component={RadioButton} />
          </Switch>
        </Grommet>
      </Router>
    );
  }
}
