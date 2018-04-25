import React from 'react';
import { Box, InfiniteScroll, Text } from 'grommet';
import SandboxComponent from './SandboxComponent';

const ITEMS = [];
while (ITEMS.length < 100) ITEMS.push(ITEMS.length);

export default () => (
  <SandboxComponent align='stretch' pad={{ horizontal: 'large' }}>
    <Box>
      <InfiniteScroll items={ITEMS} step={10} onMore={() => console.log('!!! onMore')}>
        {(item, index) => (
          <Box
            key={index}
            pad='medium'
            background={`neutral-${(index % 4) + 1}`}
            align='center'
          >
            <Text size='large' weight='bold' color='white'>{index}</Text>
          </Box>
        )}
      </InfiniteScroll>
    </Box>
  </SandboxComponent>
);
