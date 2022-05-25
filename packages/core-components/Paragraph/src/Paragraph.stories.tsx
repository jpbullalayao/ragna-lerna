import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { Paragraph } from './Paragraph';

export default {
  title: 'Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

export const Primary: ComponentStory<typeof Paragraph> = () => (
  <Paragraph>
    This is a Paragraph
  </Paragraph>
);
