import React from 'react';

import { Box } from 'grommet';

export default () => (
  <Box pad='large' align='center'>
    <Box
      direction='row'
      border={{ color: 'accent-1', opacity: 'medium', size: 'large' }}
      pad='large'
    >
      <Box border={true} pad='medium'>First</Box>
      <Box border={true} pad='medium'>Second</Box>
    </Box>
  </Box>
);
