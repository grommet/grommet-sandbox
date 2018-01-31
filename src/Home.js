import React from 'react';

import { Box, RoutedAnchor } from 'grommet';

export default () => (
  <Box margin='large'>
    <RoutedAnchor path='/box' label='Box' />
    <RoutedAnchor path='/grid' label='Grid' />
    <RoutedAnchor path='/anchor' label='Anchor' />
    <RoutedAnchor path='/button' label='Button' />
  </Box>
);
