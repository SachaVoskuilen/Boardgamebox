import { Grid } from '@/styles';
import styled from 'styled-components';

export const StyledGamesGrid = styled(Grid)`
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  grid-template-rows: 1fr;
  margin: 0 0 40px;

  > * {
    height: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;
