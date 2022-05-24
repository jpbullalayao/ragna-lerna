import styled from "styled-components";

import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system';

export const Flex = styled.div`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}
  ${typography}

  display: flex; // Default display
`;
