import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import { Grid } from './Grid';

export default {
  title: 'Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

export const Primary: ComponentStory<typeof Grid> = () => (
  <Grid
    gridTemplateColumns="1fr 1fr"
  >
    <div>This is a column 1 of a grid</div>
    <div>This is a column 2 of a grid</div>
  </Grid>
);
