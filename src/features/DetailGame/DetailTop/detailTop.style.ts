import { Flex, device } from '@/styles';
import styled from 'styled-components';

export const StyledDetailTop = styled(Flex)`
  flex-direction: column;

  > div {
    width: 100%;

    > img {
      width: 100%;
      max-height: 350px;
      object-fit: contain;
    }
  }

  @media ${device.laptop} {
    flex-direction: row;
  }
`;
