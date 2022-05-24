import React from 'react';

import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';

import {
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '..';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

export const Primary: ComponentStory<typeof Table> = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>Table Header 1</Th>
        <Th>Table Header 2</Th>
        <Th>Table Header 3</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Table Cell 1</Td>
        <Td>Table Cell 2</Td>
        <Td>Table Cell 3</Td>
      </Tr>
      <Tr>
        <Td>Table Cell 4</Td>
        <Td>Table Cell 5</Td>
        <Td>Table Cell 6</Td>
      </Tr>
      <Tr>
        <Td>Table Cell 7</Td>
        <Td>Table Cell 8</Td>
        <Td>Table Cell 9</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Td>Table footer</Td>
      </Tr>
    </Tfoot>
  </Table>
);
