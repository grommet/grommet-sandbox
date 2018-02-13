import React, { Component } from 'react';

import { Box, CheckBox } from 'grommet';

export default class extends Component {
  state = {}

  render() {
    const { checked } = this.state;
    return (
      <Box pad='large' align='center'>
        <CheckBox
          checked={checked}
          label='Acknowledge'
          onClick={() => this.setState({ checked: !checked })}
        />
      </Box>
    );
  }
}
