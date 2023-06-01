import styled from 'styled-components';
import { border, color, layout, space, typography } from 'styled-system';
import type { TypographyProps, ColorProps, LayoutProps, SpaceProps, BorderProps } from 'styled-system';

export interface TitleProps extends TypographyProps, ColorProps, LayoutProps, SpaceProps, BorderProps {}

export const H1Title = styled.h1<TitleProps>`
  width: fit-content;
  font-family: 'Dosis', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 5px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.color5};

  ${typography};
  ${color};
  ${layout};
  ${space};
  ${border};
`;

export const H2Title = styled.h2<TitleProps>`
  width: fit-content;
  font-family: 'Dosis', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  margin: 0 0 10px;

  ${typography};
  ${color};
  ${layout};
  ${space};
  ${border};
`;

export const H3Title = styled.h3<TitleProps>`
  width: fit-content;
  font-family: 'Dosis', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  ${typography};
  ${color};
  ${layout};
  ${space};
  ${border};
`;
