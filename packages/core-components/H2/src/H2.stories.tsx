import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { H2 } from './H2';

export default {
  title: 'H2',
  component: H2,
} as ComponentMeta<typeof H2>;

export const Primary: ComponentStory<typeof H2> = () => (
  <H2>
    This is an H2
  </H2>
);
