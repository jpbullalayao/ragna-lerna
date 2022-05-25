import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { Footer } from './Footer';

export default {
  title: 'Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Primary: ComponentStory<typeof Footer> = () => (
  <Footer>
    This is a Footer
  </Footer>
);
