import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { Span } from './Span';

export default {
  title: 'Span',
  component: Span,
} as ComponentMeta<typeof Span>;

export const Primary: ComponentStory<typeof Span> = () => (
  <Span>
    This is a Span
  </Span>
);
