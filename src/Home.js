import React from 'react';

import { Box, Heading, RoutedAnchor } from 'grommet';

export default () => (
  <Box margin='large'>
    <Heading level={2}>Layout</Heading>
    <RoutedAnchor path='/box' label='Box' />
    <RoutedAnchor path='/grid' label='Grid' />
    <RoutedAnchor path='/layer' label='Layer' />
    <RoutedAnchor path='/stack' label='Stack' />
    <Heading level={2}>Type</Heading>
    <RoutedAnchor path='/heading' label='Heading' />
    <RoutedAnchor path='/markdown' label='Markdown' />
    <RoutedAnchor path='/paragraph' label='Paragraph' />
    <RoutedAnchor path='/text' label='Text' />
    <Heading level={2}>Controls</Heading>
    <RoutedAnchor path='/anchor' label='Anchor' />
    <RoutedAnchor path='/button' label='Button' />
    <RoutedAnchor path='/menu' label='Menu' />
    <Heading level={2}>Input</Heading>
    <RoutedAnchor path='/checkbox' label='CheckBox' />
    <RoutedAnchor path='/calendar' label='Calendar' />
    <RoutedAnchor path='/radiobutton' label='RadioButton' />
  </Box>
);
