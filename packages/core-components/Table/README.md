# Table Styled Components

A collection of styled component for the `<table>` HTML tag, and other table-related HTML tags including:

- tbody
- td
- tfoot
- th
- thead
- tr

## Installation

```
$ npm i @professorragna/table
```

## Usage

```jsx
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot
} from '@professorragna/table';

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
```

Each of the table styled components in this package support the following categories of styled props:

- background
- border
- color
- flexbox
- grid
- layout
- position
- shadow
- space
- typography

For more information on how to use styled props, see the [styled-system](https://styled-system.com/api/) docs
