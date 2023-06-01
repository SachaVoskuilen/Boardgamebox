import styled from 'styled-components';
import { border, color, layout, space, typography } from 'styled-system';
import type { TypographyProps, ColorProps, LayoutProps, SpaceProps, BorderProps } from 'styled-system';

export interface TextProps extends TypographyProps, ColorProps, LayoutProps, SpaceProps, BorderProps {}

export const StyledText = styled.p<TextProps>`
  width: fit-content;
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin: 0;

  ${typography};
  ${color};
  ${layout};
  ${space};
  ${border};
`;
