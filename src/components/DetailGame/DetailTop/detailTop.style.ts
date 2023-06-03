import { Flex } from '@/styles';
import styled from 'styled-components';

export const StyledDetailTop = styled(Flex)`
  flex-direction: column;

  > img {
    width: 100%;
    max-height: 350px;
    object-fit: contain;
  }
`;
