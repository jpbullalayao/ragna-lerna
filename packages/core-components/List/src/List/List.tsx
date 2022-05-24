import styled from "styled-components";

import { Ol } from '../Ol/Ol';
import { Ul } from '../Ul/Ul'; 

type Variant = 'ul' | 'ol';

type Props = {
  variant: Variant;
};

export const List = ({
  variant,
  ...rest
}: Props) => {
  if (variant === 'ol') {
    return (
      <Ol
        {...rest}
      />
    )
  }

  if (variant === 'ul') {
    return (
      <Ul
        {...rest}
      />
    );
  }
};
