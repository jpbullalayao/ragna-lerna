import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { Nav } from './Nav';
import { List } from '../../List/src/List/List';
import { Li } from '../../List/src/Li/Li';

export default {
  title: 'Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>;

export const Primary: ComponentStory<typeof Nav> = () => (
  <Nav>
    <List
      variant="ul"
    >
      <Li>Nav Item 1</Li>
      <Li>Nav Item 2</Li>
      <Li>Nav Item 3</Li>
    </List>
  </Nav>
);
