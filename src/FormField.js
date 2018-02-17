import React from 'react';
import { Box, Heading, Paragraph, TextInput, Text } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent pad='none'>
    <Box pad={{ horizontal: 'large', vertical: 'medium' }}>
      <Paragraph>
        Some options for styling form fields
      </Paragraph>
    </Box>

    <Box alignSelf='stretch'>
      <Box border={{ side: 'horizontal' }} pad='large'>
        <Heading level={3} margin='none'>Minimal</Heading>
        <Box margin={{ vertical: 'small' }}>
          <Box margin={{ vertical: 'xsmall', horizontal: 'small' }} gap='xsmall'>
            <Text><strong>Label</strong></Text>
          </Box>
          <Box border='bottom'>
            <TextInput placeholder='placeholder' plain={true} />
          </Box>
        </Box>
        <Box margin={{ vertical: 'small' }}>
          <Box direction='row' justify='between' margin={{ vertical: 'xsmall', horizontal: 'small' }} gap='xsmall'>
            <Text><strong>Label</strong></Text>
            <Text>help</Text>
          </Box>
          <Box border={{ side: 'bottom', color: 'status-critical' }}>
            <TextInput defaultValue='invalid' plain={true} />
          </Box>
          <Box justify='between' margin={{ vertical: 'xsmall', horizontal: 'small' }}>
            <Text color='status-critical'>error</Text>
          </Box>
        </Box>
      </Box>

      <Box border={{ side: 'bottom' }} pad='large'>
        <Heading level={3} margin='none'>Minimal Compact</Heading>
        <Box border='bottom'>
          <Box direction='row' justify='between' margin={{ vertical: 'xsmall', horizontal: 'small' }}>
            <Text>Label</Text>
            <Text>help</Text>
          </Box>
          <TextInput plain={true} placeholder='placeholder' />
        </Box>
        <Box border={{ side: 'bottom', color: 'status-critical' }}>
          <Box direction='row' justify='between' margin={{ vertical: 'xsmall', horizontal: 'small' }}>
            <Text>Label</Text>
            <Text color='status-critical'>error</Text>
          </Box>
          <TextInput plain={true} defaultValue='invalid' />
        </Box>
      </Box>

      <Box border={{ side: 'bottom' }} pad='large'>
        <Heading level={3} margin={{ bottom: 'medium', top: 'none' }}>Boxy</Heading>
        <Box border={true}>
          <Box direction='row' justify='between' margin={{ vertical: 'xsmall', horizontal: 'small' }}>
            <Text>Label</Text>
            <Text>help</Text>
          </Box>
          <TextInput plain={true} placeholder='placeholder' />
        </Box>
        <Box border={{ color: 'status-critical' }}>
          <Box direction='row' justify='between' margin={{ vertical: 'xsmall', horizontal: 'small' }}>
            <Text>Label</Text>
            <Text color='status-critical'>error</Text>
          </Box>
          <TextInput plain={true} defaultValue='invalid' />
        </Box>
      </Box>

      <Box border={{ side: 'bottom' }} pad='large'>
        <Heading level={3} margin='none'>Old School</Heading>
        <Box margin={{ vertical: 'small' }}>
          <Box margin={{ vertical: 'xsmall', horizontal: 'small' }} gap='xsmall'>
            <Text><strong>Label</strong></Text>
          </Box>
          <Box border={true}>
            <TextInput placeholder='placeholder' plain={true} />
          </Box>
        </Box>
        <Box margin={{ vertical: 'small' }}>
          <Box margin={{ vertical: 'xsmall', horizontal: 'small' }} gap='xsmall'>
            <Text><strong>Label</strong></Text>
            <Text>help</Text>
          </Box>
          <Box border={{ color: 'status-critical' }}>
            <TextInput defaultValue='invalid' plain={true} />
          </Box>
          <Box justify='between' margin={{ vertical: 'xsmall', horizontal: 'small' }}>
            <Text color='status-critical'>error</Text>
          </Box>
        </Box>
      </Box>

    </Box>
  </SandboxComponent>
);
