import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Primary: ComponentStory<typeof Header> = () => (
  <Header>
    This is a Header
  </Header>
);
