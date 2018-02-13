import React, { Component } from 'react';

import { Box, RadioButton } from 'grommet';

export default class extends Component {
  state = {}

  render() {
    const { selected } = this.state;
    return (
      <Box pad='large' align='center'>
        <Box align='start'>
          {['First', 'Second'].map(label => (
            <Box key={label} margin={{ vertical: 'small' }}>
              <RadioButton
                name='prop'
                checked={selected === label}
                label={label}
                onClick={() => this.setState({ selected: label })}
              />
            </Box>
          ))}
        </Box>
      </Box>
    );
  }
}
