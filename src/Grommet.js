import React from 'react';
import { Box, Grommet, Text } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent>
    <Grommet
      full={true}
      theme={{
        global: { colors: { custom: '#ff99cc', custom1: '#800080', custom2: '#D3D3D3' } },
            }}
    >
      <Box pad='large' background='custom2' border={{ side: 'all', color: 'custom', size: 'medium' }} >
        <Text alignSelf='center' color='custom1' weight='bold'>
        Hello World
        </Text>
      </Box>
    </Grommet>
  </SandboxComponent>
);
