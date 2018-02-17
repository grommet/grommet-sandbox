import React from 'react';

import { Box, Heading, RoutedAnchor } from 'grommet';

export default () => (
  <Box margin='large' align='start' direction='row' wrap={true} gap='large'>
    <Box>
      <Heading level={2}>Layout</Heading>
      <RoutedAnchor path='/box' label='Box' />
      <RoutedAnchor path='/grid' label='Grid' />
      <RoutedAnchor path='/layer' label='Layer' />
      <RoutedAnchor path='/stack' label='Stack' />
    </Box>

    <Box>
      <Heading level={2}>Type</Heading>
      <RoutedAnchor path='/heading' label='Heading' />
      <RoutedAnchor path='/markdown' label='Markdown' />
      <RoutedAnchor path='/paragraph' label='Paragraph' />
      <RoutedAnchor path='/text' label='Text' />
    </Box>

    <Box>
      <Heading level={2}>Controls</Heading>
      <RoutedAnchor path='/anchor' label='Anchor' />
      <RoutedAnchor path='/button' label='Button' />
      <RoutedAnchor path='/menu' label='Menu' />
    </Box>

    <Box>
      <Heading level={2}>Input</Heading>
      <RoutedAnchor path='/checkbox' label='CheckBox' />
      <RoutedAnchor path='/radiobutton' label='RadioButton' />
      <RoutedAnchor path='/rangeinput' label='RangeInput' />
      <RoutedAnchor path='/select' label='Select' />
      <RoutedAnchor path='/textarea' label='TextArea' />
      <RoutedAnchor path='/textinput' label='TextInput' />
    </Box>

    <Box>
      <Heading level={2}>Visualizations</Heading>
      <RoutedAnchor path='/calendar' label='Calendar' />
      <RoutedAnchor path='/chart' label='Chart' />
      <RoutedAnchor path='/clock' label='Clock' />
      <RoutedAnchor path='/diagram' label='Diagram' />
      <RoutedAnchor path='/distribution' label='Distribution' />
      <RoutedAnchor path='/meter' label='Meter' />
      <RoutedAnchor path='/worldmap' label='WorldMap' />
    </Box>

    <Box>
      <Heading level={2}>Media</Heading>
      <RoutedAnchor path='/image' label='Image' />
      <RoutedAnchor path='/video' label='Video' />
    </Box>

    <Box>
      <Heading level={2}>Examples</Heading>
      <RoutedAnchor path='/formfield' label='Form Field' />
    </Box>

    <Box>
      <Heading level={2}>Old School</Heading>
      <RoutedAnchor path='/table' label='Table' />
      <RoutedAnchor path='/table-fancy' label='Fancy Table' />
    </Box>
  </Box>
);
