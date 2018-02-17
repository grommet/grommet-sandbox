import React, { Component } from 'react';
import { TextInput } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default class extends Component {
  state = { text: '' }

  render() {
    const { text } = this.state;
    return (
      <SandboxComponent>
        <TextInput
          value={text}
          onChange={event => this.setState({ text: event.target.value })}
        />
      </SandboxComponent>
    );
  }
}
