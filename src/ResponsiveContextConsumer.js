import React, { Component } from 'react';
import { Box, ResponsiveContext, Text } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default class extends Component {
  render() {
    return (
      <SandboxComponent>
        <ResponsiveContext.Consumer>
          {size => (
            <Box>
              <Text>This size will change depending on your screen size {size}
              </Text>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </SandboxComponent>
    );
  }
}
