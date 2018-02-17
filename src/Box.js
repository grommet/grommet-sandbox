import React from 'react';
import { Box } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent>
    <Box border={{ color: 'brand', size: 'large' }} pad='xlarge' />
  </SandboxComponent>
);
