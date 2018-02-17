import React, { Component } from 'react';
import { Select } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default class extends Component {
  state = { value: '' }

  render() {
    const { value } = this.state;
    return (
      <SandboxComponent>
        <Select
          value={value}
          onChange={event => this.setState({ value: event.option })}
          options={['First', 'Second', 'Third']}
        />
      </SandboxComponent>
    );
  }
}
