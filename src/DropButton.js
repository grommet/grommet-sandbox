import React, { Component } from 'react';
import { Box, Button, DropButton, Heading, Text } from 'grommet';
import { Close } from 'grommet-icons';
import SandboxComponent from './SandboxComponent';

export default class extends Component {
  state = {}

  render() {
    const { open } = this.state;
    return (
      <SandboxComponent>
        <DropButton
          label='Choose'
          open={open}
          onClose={() => this.setState({ open: undefined })}
          dropContent={(
            <Box pad='small'>
              <Box direction='row' justify='between' align='center'>
                <Heading level={3} margin='small' >Heading</Heading>
                <Button
                  icon={<Close />}
                  onClick={() => this.setState({ open: undefined })}
                />
              </Box>
              <Text>Content</Text>
            </Box>
          )}
        />
      </SandboxComponent>
    );
  }
}
