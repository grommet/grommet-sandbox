import React, { Component } from 'react';
import { Box, Button, Layer, Text } from 'grommet';
import { Close } from 'grommet-icons';
import SandboxComponent from './SandboxComponent';

const ToastLayer = ({ onClose }) => (
  <Layer modal={false} full='horizontal' position='top'>
    <Box
      background='light-3'
      pad='small'
      direction='row'
      justify='between'
      align='center'
    >
      <Text size='large'>I have a message for you.</Text>
      <Button icon={<Close />} onClick={onClose} />
    </Box>
  </Layer>
);

const ConfirmationLayer = ({ onClose }) => (
  <Layer position='top' onClickOutside={onClose}>
    <Box pad='large' gap='medium'>
      <Text>Are you sure?</Text>
      <Box direction='row' gap='medium' align='center'>
        <Button label='Yes' onClick={onClose} />
        <Button label='No' primary={true} onClick={onClose} />
      </Box>
    </Box>
  </Layer>
);

export default class extends Component {
  state = {}

  render() {
    const { layerType } = this.state;
    let layer;
    if (layerType === 'Toast') {
      layer = <ToastLayer onClose={() => this.setState({ layerType: undefined })} />;
    } else if (layerType === 'Confirmation') {
      layer = <ConfirmationLayer onClose={() => this.setState({ layerType: undefined })} />;
    }

    return (
      <SandboxComponent justify='center' align='center'>
        {['Toast', 'Confirmation'].map(label => (
          <Box key={label} margin='small'>
            <Button label={label} onClick={() => this.setState({ layerType: label })} />
          </Box>
        ))}
        {layer}
      </SandboxComponent>
    );
  }
}
