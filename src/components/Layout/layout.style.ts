import styled from 'styled-components';
import { type GridProps } from 'styled-system';
import { BoxProps, Grid, device } from '@/styles';

interface StyledLayoutProps extends BoxProps, GridProps {
  variant: string;
}

export const StyledLayout = styled(Grid)<StyledLayoutProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${({ variant, theme }) =>
    ({
      default: `
        grid-template-columns: 1fr;
        grid-template-rows: 1fr ${theme.size.navHeight};
        grid-template-areas: 'content' 'navigation';
      `,
      hamburger: `
        grid-template-columns: 1fr;
        grid-template-rows: 1fr ${theme.size.navHeight};
        grid-template-areas: 'hamburger' 'navigation';
    `,
    }[variant])}

  @media ${device.laptop} {
    ${({ variant, theme }) =>
      ({
        default: `
          grid-template-columns: 1fr;
          grid-template-rows: ${theme.size.navHeight} 1fr;
          grid-template-areas:
            'navigation'
            'content';
      `,
        hamburger: `
          grid-template-columns: ${theme.size.hamburgerWidth} 1fr;
          grid-template-rows: ${theme.size.navHeight} 1fr;
          grid-template-areas:
            'navigation navigation'
            'hamburger content';
    `,
      }[variant])}
  }
`;
