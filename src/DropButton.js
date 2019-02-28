import React, { Component } from 'react';
import { Box, Button, DropButton, Heading, Text } from 'grommet';
import { Close } from 'grommet-icons';
import SandboxComponent from './SandboxComponent';

export default class extends Component {
  state = { open: false };

  render() {
    const { open } = this.state;
    return (
      <SandboxComponent>
        <DropButton
          label='Choose'
          open={open}
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
          dropContent={(
            <Box pad='small'>
              <Box direction='row' justify='between' align='center'>
                <Heading level={3} margin='small' >Heading</Heading>
                <Button
                  icon={<Close />}
                  onClick={() => this.setState({ open: false })}
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
