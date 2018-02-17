import React, { Component } from 'react';
import { Box, Diagram, Stack } from 'grommet';
import SandboxComponent from './SandboxComponent';

const Node = ({ id, ...rest }) => (
  <Box
    id={id}
    basis='xxsmall'
    margin='small'
    pad='medium'
    round='small'
    background='neutral-1'
    {...rest}
  />
);

const connection = (fromId, toId, { color, ...rest } = {}) => ({
  fromId, toId, color: (color || 'accent-1'), thickness: 'xsmall', round: true, type: 'rectilinear', ...rest,
});

export default class extends Component {
  render() {
    return (
      <SandboxComponent>
        <Stack>
          <Box>
            <Box direction='row'>
              {[1, 2].map(id => (
                <Node key={id} id={id} />
              ))}
            </Box>
            <Box direction='row'>
              {[3, 4].map(id => (
                <Node key={id} id={id} background='neutral-2' />
              ))}
            </Box>
          </Box>
          <Diagram
            connections={[
              connection('1', '4', { color: 'accent-2' }),
            ]}
          />
        </Stack>
      </SandboxComponent>
    );
  }
}
