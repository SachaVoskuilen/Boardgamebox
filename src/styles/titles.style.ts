import styled, { css } from 'styled-components';
import { border, color, layout, space, typography } from 'styled-system';
import type { TypographyProps, ColorProps, LayoutProps, SpaceProps, BorderProps } from 'styled-system';

export interface TitleProps extends TypographyProps, ColorProps, LayoutProps, SpaceProps, BorderProps {
  $bold?: boolean;
  $line?: boolean;
}

export const H1Title = styled.h1<TitleProps>`
  width: fit-content;
  font-family: 'Dosis', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  padding-bottom: 5px;

  ${({ $bold }) =>
    $bold! &&
    css`
      font-weight: 600;
    `}

  ${({ $line, theme }) =>
    $line! &&
    css`
      border-bottom: 3px solid ${theme.colors.color5};
    `}


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
  font-weight: 400;
  font-size: 16px;
  margin: 0;

  ${({ $bold }) =>
    $bold! &&
    css`
      font-weight: 600;
    `}

  ${({ $line, theme }) =>
    $line! &&
    css`
      border-bottom: 3px solid ${theme.colors.color5};
    `}

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
  font-weight: 400;
  font-size: 14px;

  ${({ $bold }) =>
    $bold! &&
    css`
      font-weight: 600;
    `}

  ${({ $line, theme }) =>
    $line! &&
    css`
      border-bottom: 3px solid ${theme.colors.color5};
    `}

  ${typography};
  ${color};
  ${layout};
  ${space};
  ${border};
`;

export const GameTitle = styled.h2<TitleProps>`
  width: fit-content;
  font-family: 'Dosis', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  margin: 0 0 15px;

  ${({ $bold }) =>
    $bold! &&
    css`
      font-weight: 600;
    `}

  ${({ $line, theme }) =>
    $line! &&
    css`
      border-bottom: 3px solid ${theme.colors.color5};
    `}

  ${typography};
  ${color};
  ${layout};
  ${space};
  ${border};
`;
