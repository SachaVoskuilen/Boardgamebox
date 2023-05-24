import styled from 'styled-components';
import { type GridProps } from 'styled-system';
import { BoxProps, Grid, device } from '@/styles';
import { windowSizeType } from '.';

interface StyledLayoutProps extends BoxProps, GridProps {
  windowSize: windowSizeType;
  variant: string;
}

export const StyledLayout = styled(Grid)<StyledLayoutProps>`
  height: 100vh;
  max-height: -webkit-fill-available;

  width: 100vw;
  max-width: -webkit-fill-available;

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
          grid-template-columns: 250px 1fr;
          grid-template-rows: ${theme.size.navHeight} 1fr;
          grid-template-areas:
            'navigation navigation'
            'hamburger content';
    `,
      }[variant])}
  }
`;

// @media ${device.tablet} {
//   ${({ variant, theme }) =>
//     ({
//       default: `
//         grid-template-columns: ${theme.size.navHeight} 1fr;
//         grid-template-rows: 1fr;
//         grid-template-areas: 'navigation content';
//     `,
//       hamburger: `
//         grid-template-columns: ${theme.size.navHeight} 1fr;
//         grid-template-rows: 1fr;
//         grid-template-areas: 'navigation hamburger';
//   `,
//     }[variant])}
// }
