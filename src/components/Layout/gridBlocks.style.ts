import { Grid } from '@/styles';
import styled from 'styled-components';

export const GridNavigationStyle = styled(Grid)`
  grid-area: navigation;
`;

export const GridHamburgerStyle = styled(Grid)`
  grid-area: hamburger;
  background-color: lightcoral;
`;

export const GridContentStyle = styled(Grid)`
  grid-area: content;
  height: 100%;
  overflow-y: scroll;
`;
