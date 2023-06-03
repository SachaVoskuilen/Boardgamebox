import styled from 'styled-components';

export const StyledTopButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 10px 15px;
  border-radius: 5px;
`;
