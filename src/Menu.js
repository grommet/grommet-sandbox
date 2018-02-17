import React from 'react';
import { Menu } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent>
    <Menu
      label='Menu'
      items={[
        { label: 'First', href: '#' },
        { label: 'Second', href: '#' },
      ]}
    />
  </SandboxComponent>
);
