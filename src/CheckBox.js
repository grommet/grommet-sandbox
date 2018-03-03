import React, { Component } from 'react';
import { CheckBox } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default class extends Component {
  state = {}

  render() {
    const { checked } = this.state;
    return (
      <SandboxComponent>
        <CheckBox
          checked={checked}
          label='Acknowledge'
          onChange={event => this.setState({ checked: event.target.checked })}
        />
      </SandboxComponent>
    );
  }
}
