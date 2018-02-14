import React from 'react';

import { Box, Video } from 'grommet';

export default () => (
  <Box pad='large'>
    <Video fit='cover' controls='over'>
      <source key='video' src='//v2.grommet.io/assets/small.mp4' type='video/mp4' />
      <track
        key='cc'
        label='English'
        kind='subtitles'
        srcLang='en'
        src='//v2.grommet.io/assets/small-en.vtt'
        default={true}
      />
    </Video>
  </Box>
);
