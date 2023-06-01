import { Flex } from '@/styles';
import styled from 'styled-components';

export const StyledGamesFlex = styled(Flex)`
  flex-direction: column;

  > :last-child {
    border-bottom: unset;
  }
`;
