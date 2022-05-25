import React, {
  ReactNode,
} from 'react';

import { Ol } from '../Ol/Ol';
import { Ul } from '../Ul/Ul'; 

type Variant = 'ul' | 'ol';

type Props = {
  variant: Variant;
  children?: ReactNode;
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
