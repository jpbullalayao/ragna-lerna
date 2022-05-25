# List Styled Components

A collection of styled components for the list HTML tags utilized via a `<List>` component, which include:

- ol
- ul
- li

## Installation

```
$ npm i @professorragna/list
```

## Usage

```jsx
import {
  List,
  Li
} from '@professorragna/list';

// Unordered List (<ul>) Usage
<List
  variant="ul"
>
  <Li>List Item 1</Li>
  <Li>List Item 2</Li>
  <Li>List Item 3</Li>
</List>

// Ordered List (<ol>) Usage
<List
  variant="ol"
>
  <Li>List Item 1</Li>
  <Li>List Item 2</Li>
  <Li>List Item 3</Li>
</List>
```

Each of the list styled components in this package support the following categories of styled props:

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
