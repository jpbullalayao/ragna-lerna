import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import {
  Fieldset,
  Form,
  Input,
  Label,
  Legend,
  Textarea,
} from '..';

export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>;

export const Primary: ComponentStory<typeof Form> = () => (
  <Form>
    <Fieldset>
      <Legend>This is a form legend</Legend>
      <Label>This is a form label</Label>
      <br />
      <br />
      <Input
        placeholder="This is an input field"
      />
      <br />
      <br />
      <Textarea
        placeholder="This is a textarea"
      />
    </Fieldset>
  </Form>
);
