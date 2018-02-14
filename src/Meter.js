import React, { Component } from 'react';

import { Box, Meter } from 'grommet';

export default class extends Component {
  state = {}

  render() {
    const { active } = this.state;
    return (
      <Box pad='large' align='center'>
        <Meter
          type='bar'
          values={[
            {
              label: 'First',
              value: 60,
              highlight: (active === 'First'),
              onHover: over => this.setState({ active: over ? 'First' : undefined }),
            },
            {
              label: 'Second',
              value: 20,
              highlight: (active === 'Second'),
              onHover: over => this.setState({ active: over ? 'Second' : undefined }),
            },
          ]}
        />
      </Box>
    );
  }
}
