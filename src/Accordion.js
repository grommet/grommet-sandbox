import React from 'react';
import { Accordion, AccordionPanel, Box } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent>
    <Box width='100%'>
      <Accordion animate='true' multiple='true' margin='small'>
        <AccordionPanel label='Panel 1'>
          <Box background='light-1'>Panel 1 content</Box>
        </AccordionPanel>
        <AccordionPanel label='Panel 2'>
          <Box style={{ height: '200px' }} background='light-1'>Panel 2 content</Box>
        </AccordionPanel>
      </Accordion>
    </Box>
  </SandboxComponent>
);
