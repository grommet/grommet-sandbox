import React from 'react';
import { Box, Text, ThemeContext } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent>
    <ThemeContext.Extend
      value={{
        global: { colors: { custom: '#ff99cc', custom1: '#800080' } },
            }}
    >
      <Box pad='large' border={{ side: 'all', color: 'custom1', size: 'medium' }} >
        <Text alignSelf='center' color='custom' weight='bold'>
        Hello World
        </Text>
      </Box>
    </ThemeContext.Extend>
  </SandboxComponent>
);
