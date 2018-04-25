import React from 'react';
import { Box, Distribution, Text } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent align='stretch' pad={{ horizontal: 'large' }}>
    <Distribution
      basis='medium'
      values={[
        { value: 50, color: 'light-3' },
        { value: 30, color: 'neutral-1' },
        { value: 20, color: 'brand' },
        { value: 10, color: 'light-3' },
        { value: 5, color: 'neutral-1' },
      ]}
    >
      {value => (
        <Box pad='xsmall' background={value.color} fill={true}>
          <Text size='large'>{value.value}</Text>
        </Box>
      )}
    </Distribution>
  </SandboxComponent>
);
