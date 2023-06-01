import { Grid } from '@/styles';
import styled from 'styled-components';

export const StyledSimpleGame = styled(Grid)`
  grid-template-columns: 120px 1fr;
  padding: 25px 0 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
