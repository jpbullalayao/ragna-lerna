import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { Main } from './Main';

export default {
  title: 'Main',
  component: Main,
} as ComponentMeta<typeof Main>;

export const Primary: ComponentStory<typeof Main> = () => (
  <Main>
    This is a Main component with text in it
  </Main>
);
