import styled from 'styled-components';
import { flexbox, type FlexboxProps } from 'styled-system';
import { type BoxProps, Box } from './box.style';

export interface FlexProps extends BoxProps, FlexboxProps {}

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox};
`;
