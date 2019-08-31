import React, { Component } from 'react';
import { AnnounceContext, Box, Grommet, Heading, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import SandboxComponent from './SandboxComponent';

class Announcer extends Component {
  constructor(props) {
    super(props);
    const { message, role, politenessSetting } = this.props;
    this.state = {
      message:
        message || 'Here is a simple announcement. This will soon disappear',
      politenessSetting: politenessSetting || 'polite',
      role: role || 'log',
    };
  }

  componentDidMount() {
    const { announce } = this.props;
    const { message, politenessSetting } = this.state;
    const timeout = 3000;
    announce(message, politenessSetting, timeout);
  }

  render() {
    const { message, politenessSetting, role } = this.state;
    return (
      <Text align="center" role={role} aria-live={politenessSetting}>
        {message}
      </Text>
    );
  }
}

export default class extends Component {
  render() {
    return (
      <SandboxComponent>
        <Grommet theme={grommet}>
        <Box
          justify="center"
          align="center"
          pad="xlarge"
          background="brand"
          round="large"
          fill={true}
        >
            <Heading color="white">Welcome to announcement section</Heading>
            <AnnounceContext.Consumer>
              {announce => <Announcer announce={announce} />}
            </AnnounceContext.Consumer>
        </Box>
        </Grommet>
      </SandboxComponent>
    )
  }
}