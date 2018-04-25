import React from 'react';
import { Box, Grid } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent align='stretch' pad={{ horizontal: 'large' }}>
    <Grid
      areas={[
        { name: 'nav', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [1, 0], end: [1, 0] },
        { name: 'side', start: [2, 0], end: [2, 0] },
        { name: 'foot', start: [0, 1], end: [2, 1] },
      ]}
      columns={['small', 'flex', 'medium']}
      rows={['medium', 'small']}
      gap='small'
    >
      <Box gridArea='nav' background='brand' />
      <Box gridArea='main' background='brand' />
      <Box gridArea='side' background='brand' />
      <Box gridArea='foot' background='accent-1' />
    </Grid>
  </SandboxComponent>
);
