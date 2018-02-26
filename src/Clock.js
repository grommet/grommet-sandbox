import React, { Component } from 'react';
import { Box, Clock, Stack, Text } from 'grommet';
import SandboxComponent from './SandboxComponent';

const ANCHOR_MAP = {
  1: 'top-right',
  2: 'top-right',
  3: 'right',
  4: 'bottom-right',
  5: 'bottom-right',
  6: 'bottom',
  7: 'bottom-left',
  8: 'bottom-left',
  9: 'left',
  10: 'top-left',
  11: 'top-left',
  12: 'top',
};

class StackedClock extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { time: props.time };
  }

  render() {
    const { time } = this.state;
    let hour;
    if (time) {
      const match = time.match(/^T(\d+)/);
      if (match) {
        hour = match[1];
        if (hour > 12) {
          hour -= 12;
        } else if (hour === 0) {
          hour = 12;
        }
      }
    }
    return (
      <Stack anchor={ANCHOR_MAP[hour]}>
        <Box background='light-2' pad='medium'>
          <Clock
            size='large'
            time={time}
            onChange={nextTime => this.setState({ time: nextTime })}
          />
        </Box>
        <Box pad='small'>
          <Text size='xlarge'>{hour}</Text>
        </Box>
      </Stack>
    );
  }
}

export default () => (
  <SandboxComponent>
    <Box gap='large'>
      <Box align='center' gap='medium'>
        <Clock type='digital' time='T18:10:12' hourLimit={12} />
        <Box round='large' background='dark-3' pad='small'>
          <Clock type='digital' size='large' run='backward' time='PT18H10M48S' />
        </Box>
      </Box>
      <Box direction='row' gap='large' align='center'>
        <Box round='full' border={{ color: 'light-5', size: 'medium' }} pad='small'>
          <Clock size='large' time='T18:10:12' />
        </Box>
        <Box round='full' background='dark-3' pad='small'>
          <Clock size='large' time='T18:10:12' />
        </Box>
      </Box>
      <Box align='center' gap='large'>
        <StackedClock time='T18:10:12' />
      </Box>
    </Box>
  </SandboxComponent>
);
