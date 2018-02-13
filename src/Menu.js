import React from 'react';

import { Box, Menu } from 'grommet';

export default () => (
  <Box pad='large' align='center'>
    <Menu
      label='Menu'
      items={[
        { label: 'First', href: '#' },
        { label: 'Second', href: '#' },
      ]}
    />
  </Box>
);
