# Form Styled Components

A collection of styled components for the `<form>` HTML tag, and other form-related HTML tags including:

- fieldset
- input
- label
- legend
- textarea

## Installation

```
$ npm i @professorragna/form
```

## Usage

```jsx
import {
  Fieldset,
  Form,
  Input,
  Label,
  Legend,
  Textarea,
} from '@professorragna/form';

<Form>
  <Fieldset>
    <Legend>This is a form legend</Legend>
    <Label>This is a form label</Label>
    <Input
      placeholder="This is an input field"
    />
    <Textarea
      placeholder="This is a textarea"
    />
  </Fieldset>
</Form>
```

Each of the form styled components in this package support the following categories of styled props:

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

## Additional Packages

Are you looking for additional styled components for other HTML tags? Feel free to check out the root project [here](https://github.com/jpbullalayao/ragna-lerna) for other packages that are available!
