import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { Flex } from './Flex';

export default {
  title: 'Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

export const Primary: ComponentStory<typeof Flex> = () => (
  <Flex>
    This is a Flex with text in it
  </Flex>
);
