import { Flex } from '@/styles';
import styled from 'styled-components';

export const NavigationLogo = styled(Flex)`
  width: ${({ theme }) => theme.size.hamburgerWidth};
  justify-content: center;
  align-items: center;
`;
