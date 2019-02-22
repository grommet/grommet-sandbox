import React from 'react';
import { Box, Tab, Tabs, Text, Image } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent>
    <Tabs height='medium' flex='grow' alignSelf='center'>
      <Tab title='Tab 1'>
        <Box
          margin='small'
          pad='small'
        >
          <Text>Content for the First Tab</Text>
        </Box>
      </Tab>
      <Tab title='Tab 2'>
        <Box
          margin='small'
          pad='small'
        >
          <Text>Content for the Second Tab</Text>

        </Box>
      </Tab>
      <Tab title='Tab 3'>
        <Box
          flex='grow'
          margin='small'
          pad='small'
        >
          <Image src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
        </Box>
      </Tab>
    </Tabs>
  </SandboxComponent>
);
