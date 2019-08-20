import React from 'react';

import { Box, Grid } from 'grommet';
import { Apps } from 'grommet-icons';
import RoutedButton from './RoutedButton'

const SandboxComponent = props => (
  <Grid>
    <Box align='start'>
      <RoutedButton icon={<Apps />} path='/' hoverIndicator={true} />
    </Box>
    <Box {...props} />
  </Grid>
);

SandboxComponent.defaultProps = {
  align: 'center',
  pad: 'large',
};

export default SandboxComponent;
