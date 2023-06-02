import { Grid, device } from '@/styles';
import styled from 'styled-components';

export const StyledDetailGame = styled(Grid)`
  grid-template-columns: 1fr;
  grid-template-rows: 300px 1fr;
  grid-template-areas: 'top' 'blocks';

  @media ${device.laptop} {
  }
`;
