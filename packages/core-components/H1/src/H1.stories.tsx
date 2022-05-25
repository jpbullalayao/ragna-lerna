import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { H1 } from './H1';

export default {
  title: 'H1',
  component: H1,
} as ComponentMeta<typeof H1>;

export const Primary: ComponentStory<typeof H1> = () => (
  <H1>
    This is an H1
  </H1>
);
