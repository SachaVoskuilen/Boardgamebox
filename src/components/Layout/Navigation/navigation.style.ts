import styled from 'styled-components';
import { Flex } from '@/styles';

interface NavigationStyleType {
  variant: string;
}

export const NavigationStyle = styled(Flex)<NavigationStyleType>`
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  height: ${({ theme }) => theme.sizes.navHeight};
  width: 100%;
  flex-direction: row;

  ${({ variant }) =>
    ({
      mobile: `
        justify-content: space-between;
        align-items: center;

        
        > * {
          display: flex;
          height: 100%;
          width: 100%;
          flex: 1;
          justify-content: center;
          align-items: center;
          box-shadow: inset 0 0 1px 0;
        }
      `,
      web: `
        justify-content: space-between;
        align-items: center;

        box-shadow: inset 0 0 1px 0;

        > div {
          display: flex;
          height: 100%;
          justify-content: space-between;
          align-items: center;

          > * {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100px;
          }
        }

        > a, button {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100px;
        }
    `,
    }[variant])}
`;
