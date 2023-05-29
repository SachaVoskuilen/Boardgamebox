import styled from 'styled-components';
import { flexbox, type FlexboxProps } from 'styled-system';
import { type BoxProps, Flex } from '@/styles';

export interface NavigationProps extends BoxProps, FlexboxProps {
  variant: string;
}

export const NavigationStyle = styled(Flex)<NavigationProps>`
  display: flex;
  ${flexbox};
`;
