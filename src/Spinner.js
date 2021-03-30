import React from "react";
import { grommet, Box, Grommet, Spinner, Text } from "grommet";
import SandboxComponent from "./SandboxComponent";

export default () => (
  <SandboxComponent>
    <Grommet theme={grommet}>
      <Box justify='center' direction='row' gap='small' pad='small'>
        <Spinner size='medium' />
        <Text alignSelf='center'>Loading...</Text>
      </Box>
    </Grommet>
  </SandboxComponent>
);