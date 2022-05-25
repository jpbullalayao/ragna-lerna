import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { H5 } from './H5';

export default {
  title: 'H5',
  component: H5,
} as ComponentMeta<typeof H5>;

export const Primary: ComponentStory<typeof H5> = () => (
  <H5>
    This is an H5
  </H5>
);
