import React, { Component } from 'react';
import { Box, Chart } from 'grommet';
import SandboxComponent from './SandboxComponent';

const DATA = [60, 20, 40, 50, 10, 60, 20, 40, 50, 10, 60, 20, 40, 50, 10];

export default class extends Component {
  render() {
    return (
      <SandboxComponent>
        <Box gap='small'>
          <Chart
            type='bar'
            thickness='small'
            values={DATA.map((value, index) =>
              ({ label: `${value}`, value: [index, value] }))}
          />
          <Chart
            type='area'
            size={{ height: 'xxsmall', width: 'full' }}
            thickness='none'
            values={DATA.map((value, index) =>
              ({ label: `${value}`, value: [index, value] }))}
          />
        </Box>
      </SandboxComponent>
    );
  }
}
