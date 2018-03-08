import React from 'react';
import { FormField, TextInput } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent pad='none'>
    <FormField label='Name'>
      <TextInput />
    </FormField>
  </SandboxComponent>
);
