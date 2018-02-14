import React, { Component } from 'react';

import { Box, Select } from 'grommet';

export default class extends Component {
  state = { value: '' }

  render() {
    const { value } = this.state;
    return (
      <Box pad='large' align='center'>
        <Select
          value={value}
          onChange={event => this.setState({ value: event.option })}
          options={['First', 'Second', 'Third']}
        />
      </Box>
    );
  }
}
