import React, { Component } from 'react';

import { Box, Button, Layer } from 'grommet';
import { Close } from 'grommet-icons';

export default class extends Component {
  state = {}

  render() {
    const { show } = this.state;
    return (
      <Box pad='xlarge' justify='center' align='center'>
        <Button label='Show Layer' onClick={() => this.setState({ show: !show })} />
        {show ? (
          <Layer position='top' onClickOverlay={() => this.setState({ show: false })}>
            <Box border={{ color: 'brand', size: 'medium' }} pad='small'>
              <Button icon={<Close />} onClick={() => this.setState({ show: false })} />
            </Box>
          </Layer>
        ) : null}
      </Box>
    );
  }
}
