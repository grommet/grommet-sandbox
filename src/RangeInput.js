import React, { Component } from 'react';

import { Box, RangeInput } from 'grommet';

export default class extends Component {
  state = { value: 5 }

  render() {
    const { value } = this.state;
    return (
      <Box pad='large' align='center'>
        <RangeInput
          value={value}
          min={0}
          max={10}
          step={1}
          onChange={event => this.setState({ value: event.target.value })}
        />
      </Box>
    );
  }
}
