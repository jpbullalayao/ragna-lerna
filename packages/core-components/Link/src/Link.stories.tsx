import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { Link } from './Link';

export default {
  title: 'Link',
  component: Link,
} as ComponentMeta<typeof Link>;

export const Primary: ComponentStory<typeof Link> = () => (
  <Link
    href="https://twitch.tv/professorragna"
  >
    This is a link
  </Link>
);
