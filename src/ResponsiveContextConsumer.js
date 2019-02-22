import React, { Component } from 'react';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';
import { Box, Grommet, Heading, ResponsiveContext } from 'grommet';
import SandboxComponent from './SandboxComponent';

const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      xsmall: {
        value: 500,
      },
      small: {
        value: 900,
      },
      medium: undefined,
      middle: {
        value: 2000,
      },
    },
  },
});
export default class extends Component {
  render() {
    return (
      <SandboxComponent>
        <Grommet theme={customBreakpoints}>
          <ResponsiveContext.Consumer>
            {size => (
              <Box>
                <Heading>{`This size will change depending on your screen size ${size}`}
                </Heading>
              </Box>
          )}
          </ResponsiveContext.Consumer>
        </Grommet>
      </SandboxComponent>
    );
  }
}
