import React, { Component } from 'react';
import { Box, RadioButton } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default class extends Component {
  state = {}

  render() {
    const { selected } = this.state;
    return (
      <SandboxComponent>
        <Box align='start'>
          {['First', 'Second'].map(label => (
            <Box key={label} margin={{ vertical: 'small' }}>
              <RadioButton
                name='prop'
                checked={selected === label}
                label={label}
                onChange={() => this.setState({ selected: label })}
              />
            </Box>
          ))}
        </Box>
      </SandboxComponent>
    );
  }
}
