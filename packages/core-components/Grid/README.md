# Grid Styled Component

Styled component for the `<div>` HTML tag, using grid properties

## Installation

```
$ npm i @professorragna/grid
```

## Usage

```jsx
import { Grid } from '@professorragna/grid';

<Grid
  gridTemplateColumns="1fr 1fr"
>
  <div>This is the first grid item</div>
  <div>This is the second grid item</div>
</Grid>
```

The `<Grid>` styled component supports the following categories of styled props:

- background
- border
- color
- grid
- layout
- position
- shadow
- space
- typography

For more information on how to use styled props, see the [styled-system](https://styled-system.com/api/) docs
