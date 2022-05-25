import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { H3 } from './H3';

export default {
  title: 'H3',
  component: H3,
} as ComponentMeta<typeof H3>;

export const Primary: ComponentStory<typeof H3> = () => (
  <H3>
    This is an H3
  </H3>
);
