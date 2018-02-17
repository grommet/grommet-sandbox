import React from 'react';
import { Box, Stack, Paragraph, Text } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent>
    <Stack anchor='center'>
      <Box background='dark-4' align='center' justify='center' pad='large'>
        <Paragraph>
          {`You know, sometimes in life it seems like there's no way out. Like
          a sheep trapped in a maze designed by wolves.`}
        </Paragraph>
      </Box>
      <Box
        background={{ color: 'white', opacity: 'weak' }}
        pad='medium'
        round='medium'
      >
        <Text size='large'><strong>Hey!</strong></Text>
      </Box>
    </Stack>
  </SandboxComponent>
);
