import { Box, Grid } from '@/styles';
import styled from 'styled-components';

export const GridContentBlockStyle = styled(Grid)`
  grid-area: 'content';
  background-color: cyan;
  height: 100%;
  overflow-y: scroll;
`;
