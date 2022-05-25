import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { Image } from './Image';

export default {
  title: 'Image',
  component: Image,
} as ComponentMeta<typeof Image>;

export const Primary: ComponentStory<typeof Image> = () => (
  <Image
    src="https://via.placeholder.com/500"
    height="500px"
    width="500px"
  />
);
