import styled from 'styled-components';
import { background, border, color, flexbox, layout, position, shadow, space, type FlexboxProps } from 'styled-system';
import { type BoxProps, Box } from './box.style';

export interface FlexProps extends BoxProps, FlexboxProps {}

export const Flex = styled(Box)<FlexProps>`
  display: flex;

  ${color};
  ${space};
  ${layout};
  ${background};
  ${position};
  ${shadow};
  ${border};
  ${flexbox};
`;
