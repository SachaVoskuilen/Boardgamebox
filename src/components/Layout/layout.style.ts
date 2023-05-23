import styled from 'styled-components';
import { type GridProps } from 'styled-system';
import { BoxProps, Grid } from '@/styles';

interface StyledLayoutProps extends BoxProps, GridProps {
  windowSize: Array<number>;
  variant: string;
}
export const StyledLayout = styled(Grid)<StyledLayoutProps>`
  height: ${({ windowSize }) => windowSize[1]}px;
  width: ${({ windowSize }) => windowSize[0]}px;
  grid-template-columns: minmax(300px, 500px) auto;
  grid-template-rows: 60px 1fr 60px;
  /* grid-template-areas:
    'navigation content'
    'navigation content'
    'header header'; */

  ${({ variant, theme }) =>
    ({
      default: `
        grid-template-areas:
          'hamburger content'
          'hamburger content'
          'navigation navigation';
      `,
      hamburger: `
        grid-template-areas:
          'content content'
          'content content'
          'navigation navigation';
    `,
    }[variant])}
`;
