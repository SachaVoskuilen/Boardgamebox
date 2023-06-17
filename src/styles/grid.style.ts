import styled from 'styled-components';
import { background, border, color, grid, layout, position, shadow, space, type GridProps } from 'styled-system';
import { type BoxProps, Box } from './box.style';

interface GridBoxProps extends BoxProps, GridProps {}

export const Grid = styled(Box)<GridBoxProps>`
  display: grid;

  ${color};
  ${space};
  ${layout};
  ${background};
  ${position};
  ${shadow};
  ${border};
  ${grid};
`;
