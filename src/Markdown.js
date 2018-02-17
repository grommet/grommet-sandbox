import React from 'react';
import { Markdown } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent>
    <Markdown
      content={`
        # Out of Breath

        You know, sometimes in life it seems like there's no way out. Like
        a sheep trapped in a maze designed by wolves.

        [reference](#)
      `}
    />
  </SandboxComponent>
);
