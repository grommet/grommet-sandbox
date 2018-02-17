import React, { Component } from 'react';
import { RangeInput } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default class extends Component {
  state = { value: 5 }

  render() {
    const { value } = this.state;
    return (
      <SandboxComponent>
        <RangeInput
          value={value}
          min={0}
          max={10}
          step={1}
          onChange={event => this.setState({ value: event.target.value })}
        />
      </SandboxComponent>
    );
  }
}
