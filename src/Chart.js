import React, { Component } from 'react';

import { Box, Chart } from 'grommet';

export default class extends Component {
  render() {
    return (
      <Box pad='large' align='center'>
        <Chart
          type='bar'
          values={[
            { label: 'First', value: [0, 60] },
            { label: 'Second', value: [1, 20] },
            { label: 'Third', value: [2, 40] },
            { label: 'Fourth', value: [3, 50] },
            { label: 'Fifth', value: [4, 10] },
          ]}
        />
      </Box>
    );
  }
}
