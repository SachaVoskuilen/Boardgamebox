import styled from 'styled-components';
import { grid, type GridProps } from 'styled-system';
import { type BoxProps, Box } from './box.style';

interface GridBoxProps extends BoxProps, GridProps {}

export const Grid = styled(Box)<GridBoxProps>`
  display: grid;
  ${grid};
`;
