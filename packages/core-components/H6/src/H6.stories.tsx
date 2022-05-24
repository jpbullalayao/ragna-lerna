import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { H6 } from './H6';

export default {
  title: 'H6',
  component: H6,
} as ComponentMeta<typeof H6>;

export const Primary: ComponentStory<typeof H6> = () => (
  <H6>
    This is an H6
  </H6>
);
