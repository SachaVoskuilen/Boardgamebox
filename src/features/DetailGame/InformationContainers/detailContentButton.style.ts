import styled, { css } from 'styled-components';

export const StyledDetailContentButton = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 15px;

  ${({ active, theme }) =>
    active == true &&
    css`
      border-radius: 10px;
      background-color: ${theme.colors.lightGray};
    `}
`;
