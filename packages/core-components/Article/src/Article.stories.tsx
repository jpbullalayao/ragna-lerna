import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { Article } from './Article';

export default {
  title: 'Article',
  component: Article,
} as ComponentMeta<typeof Article>;

export const Primary: ComponentStory<typeof Article> = () => (
  <Article>
    This is a Article
  </Article>
);
