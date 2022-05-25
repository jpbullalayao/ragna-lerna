import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { Box } from './Box';

export default {
  title: 'Box',
  component: Box,
} as ComponentMeta<typeof Box>;

export const Primary: ComponentStory<typeof Box> = () => (
  <Box>
    This is a box with text in it
  </Box>
);
