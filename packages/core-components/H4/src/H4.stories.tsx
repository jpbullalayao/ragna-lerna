import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { H4 } from './H4';

export default {
  title: 'H4',
  component: H4,
} as ComponentMeta<typeof H4>;

export const Primary: ComponentStory<typeof H4> = () => (
  <H4>
    This is an H4
  </H4>
);
