import Link from 'next/link';
import styled, { css } from 'styled-components';

export const StyledNavLink = styled(Link)<{ $isActive: boolean }>`
  ${({ $isActive, theme }) =>
    $isActive
      ? css`
          color: ${theme.colors.color6};
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 0 10px;
        `
      : css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 0 10px;
        `}
`;
