import React from 'react';

import { Box, Grid, Heading, RoutedAnchor } from 'grommet';

export default () => (
  <Box pad='large'>
    <Grid columns='small' gap='small'>
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
        <RoutedAnchor path='/dropbutton' label='DropButton' />
        <RoutedAnchor path='/menu' label='Menu' />
        <RoutedAnchor path='/dropbutton-airlines' label='DropButton Airlines' />
        <RoutedAnchor path='/dropbutton-labels' label='DropButton Labels' />
      </Box>

      <Box>
        <Heading level={2}>Input</Heading>
        <RoutedAnchor path='/checkbox' label='CheckBox' />
        <RoutedAnchor path='/radiobutton' label='RadioButton' />
        <RoutedAnchor path='/rangeinput' label='RangeInput' />
        <RoutedAnchor path='/rangeselector' label='RangeSelector' />
        <RoutedAnchor path='/select' label='Select' />
        <RoutedAnchor path='/textarea' label='TextArea' />
        <RoutedAnchor path='/textinput' label='TextInput' />
        <RoutedAnchor path='/select-creditcard' label='Select CreditCard' />
        <RoutedAnchor path='/formfield' label='Form Field' />
      </Box>

      <Box>
        <Heading level={2}>Visuals</Heading>
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
        <Heading level={2}>Utilities</Heading>
        <RoutedAnchor path='/infinitescroll' label='InfiniteScroll' />
      </Box>

      <Box>
        <Heading level={2}>Examples</Heading>
        <RoutedAnchor path='/form' label='Form' />
        <RoutedAnchor path='/dateinput' label='Date Input' />
      </Box>

      <Box>
        <Heading level={2}>Old School</Heading>
        <RoutedAnchor path='/carousel' label='Carousel' />
        <RoutedAnchor path='/table' label='Table' />
        <RoutedAnchor path='/table-fancy' label='Fancy Table' />
      </Box>
    </Grid>
  </Box>
);
