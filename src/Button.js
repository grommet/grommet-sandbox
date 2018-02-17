import React from 'react';
import { Button } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent>
    <Button active={true} label='Submit' onClick={() => {}} />
  </SandboxComponent>
);
