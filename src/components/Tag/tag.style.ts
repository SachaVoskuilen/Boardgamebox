import { Box } from '@/styles';
import styled from 'styled-components';

export const StyledTag = styled(Box)<{ variant: string }>`
  padding: 5px;
  border-radius: 5px;

  ${({ variant, theme }) =>
    ({
      default: `
        background-color: ${theme.colors.color4}
      `,
    }[variant])}
`;
