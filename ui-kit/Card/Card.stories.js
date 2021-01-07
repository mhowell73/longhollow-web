import React from 'react';

import Card from './';
import Box from '../Box';

export default {
  title: 'ui-kit/Card',
  component: Card,
};

export const Default = () => (
  <Card>
    <h1>Shared Card Wrapper Component</h1>
  </Card>
);
export const CardWithBackground = () => (
  <Card
    display="flex"
    alignItems={'center'}
    justifyContent={'center'}
    p={'l'}
    flexDirection={'column'}
    backgroundImage={"url('https://source.unsplash.com/random/300x200')"}
    backgroundSize={'cover'}
    color={'white'}
    maxWidth={'300px'}
  >
    <Box as={'h1'} display={'flex'}>
      Crew
    </Box>
    <Box as={'p'} display={'flex'}>
      A movement of guys of every generation that stand of the Kingdom of God
      and for each other.
    </Box>
  </Card>
);
