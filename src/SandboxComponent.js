import React from 'react';

import { Box, RoutedButton } from 'grommet';
import { Apps } from 'grommet-icons';

const SandboxComponent = props => (
  <Box>
    <Box align='start'>
      <RoutedButton icon={<Apps />} path='/' hoverIndicator={true} />
    </Box>
    <Box {...props} />
  </Box>
);

SandboxComponent.defaultProps = {
  align: 'center',
  pad: 'large',
};

export default SandboxComponent;
