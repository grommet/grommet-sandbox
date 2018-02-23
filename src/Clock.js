import React from 'react';
import { Box, Clock } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent>
    <Box gap='large'>
      <Box align='center' gap='medium'>
        <Clock type='digital' time='T18:10:12' hourLimit={12} />
        <Box round='large' background='dark-3' pad='small'>
          <Clock type='digital' size='large' run='backward' time='PT18H10M48S' />
        </Box>
      </Box>
      <Box direction='row' gap='large' align='center'>
        <Box round='full' border={{ color: 'light-5', size: 'medium' }} pad='small'>
          <Clock size='large' time='T18:10:12' />
        </Box>
        <Box round='full' background='dark-3' pad='small'>
          <Clock size='large' time='T18:10:12' />
        </Box>
      </Box>
    </Box>
  </SandboxComponent>
);
