import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { Section } from './Section';

export default {
  title: 'Section',
  component: Section,
} as ComponentMeta<typeof Section>;

export const Primary: ComponentStory<typeof Section> = () => (
  <Section>
    This is a Section with text in it
  </Section>
);
