import { Flex } from '@/styles';
import styled from 'styled-components';

export const StyledHamburger = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  flex-direction: column;
  height: 100%;
  width: 100%;

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ theme }) => theme.sizes.navHeight};
    box-shadow: inset -1px -1px 5px 0;
  }
`;
