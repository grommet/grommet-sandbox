import React from 'react';

import { Box, Markdown } from 'grommet';

export default () => (
  <Box pad='large' align='center'>
    <Markdown
      content={`
        # Out of Breath

        You know, sometimes in life it seems like there's no way out. Like
        a sheep trapped in a maze designed by wolves.

        [reference](#)
      `}
    />
  </Box>
);
