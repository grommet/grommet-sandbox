import React from 'react';
import { Box, Button, CheckBox, FormField, RadioButton, Select, TextArea, TextInput } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent pad='none'>
    <form onSubmit={event => event.preventDefault()}>
      <Box>
        <FormField label='Name'>
          <TextInput />
        </FormField>
        <FormField label='Continent'>
          <Select options={['North America', 'South America']} />
        </FormField>
        <FormField label='Address'>
          <TextArea />
        </FormField>
        <FormField>
          <Box pad='small'>
            <CheckBox label='acknowledge' />
          </Box>
        </FormField>
        <FormField>
          <Box pad='small' gap='xsmall'>
            <RadioButton name='size' id='small' label='small' />
            <RadioButton name='size' id='large' label='large' />
          </Box>
        </FormField>
        <Button type='submit' label='Submit' primary={true} />
      </Box>
    </form>
  </SandboxComponent>
);
