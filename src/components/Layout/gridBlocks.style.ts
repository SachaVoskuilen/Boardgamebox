import { Grid } from '@/styles';
import styled from 'styled-components';

export const GridNavigationStyle = styled(Grid)`
  grid-area: navigation;
`;

export const GridHamburgerStyle = styled(Grid)`
  grid-area: hamburger;
`;

export const GridContentStyle = styled(Grid)`
  grid-area: content;
  height: 100%;
  width: 80%;
  margin: 0 10%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
