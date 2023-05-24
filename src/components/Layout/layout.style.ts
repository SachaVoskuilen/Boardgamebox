import styled from 'styled-components';
import { type GridProps } from 'styled-system';
import { BoxProps, Grid } from '@/styles';
import { windowSizeType } from '.';

interface StyledLayoutProps extends BoxProps, GridProps {
  windowSize: windowSizeType;
  variant: string;
}
export const StyledLayout = styled(Grid)<StyledLayoutProps>`
  min-height: ${({ windowSize }) => windowSize.height}px;
  min-width: ${({ windowSize }) => windowSize.width}px;

  @media only screen and (min-width: ${({ theme }) => theme.breakingPoint.tablet}) {
    ${({ variant, windowSize, theme }) =>
      ({
        default: `
        grid-template-columns: 1fr;
        grid-template-rows: ${theme.size.navHeight} 1fr;
        grid-template-areas:
          'navigation'
          'content';
      `,
        hamburger: `
        grid-template-columns: 250px 1fr;
        grid-template-rows: ${theme.size.navHeight} 1fr;
        grid-template-areas:
          'navigation navigation'
          'hamburger content';
    `,
      }[variant])}
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakingPoint.tablet}) {
    ${({ variant, windowSize, theme }) =>
      ({
        default: `
        grid-template-columns: ${theme.size.navHeight} 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
          'navigation content';
      `,
        hamburger: `
        grid-template-columns: ${theme.size.navHeight} 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
          'navigation hamburger';
    `,
      }[variant])}
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakingPoint.phone}) {
    ${({ variant, windowSize, theme }) =>
      ({
        default: `
        grid-template-columns: 1fr;
        grid-template-rows: 1fr ${theme.size.navHeight};
        grid-template-areas:
          'navigation content';
      `,
        hamburger: `
        grid-template-columns: 1fr;
        grid-template-rows: 1fr ${theme.size.navHeight};
        grid-template-areas:
          'navigation hamburger';
    `,
      }[variant])}
  }
`;
