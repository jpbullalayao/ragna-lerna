import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import {
  List,
  Li
} from '..';

export default {
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

export const UnorderedList: ComponentStory<typeof List> = () => (
  <List
    variant="ul"
  >
    <Li>List Item 1</Li>
    <Li>List Item 2</Li>
    <Li>List Item 3</Li>
  </List>
);

export const OrderedList: ComponentStory<typeof List> = () => (
  <List
    variant="ol"
  >
    <Li>List Item 1</Li>
    <Li>List Item 2</Li>
    <Li>List Item 3</Li>
  </List>
);
