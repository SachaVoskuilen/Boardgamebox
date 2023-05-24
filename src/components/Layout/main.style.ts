import styled from 'styled-components';
import type {
  BorderProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
  BackgroundProps,
  PositionProps,
  ShadowProps,
} from 'styled-system';
import { border, color, space, layout, background, position, shadow } from 'styled-system';

export interface MainProps
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    BackgroundProps,
    PositionProps,
    ShadowProps,
    BorderProps {}

export const StyledMain = styled.main<MainProps>`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  ${color};
  ${space};
  ${layout};
  ${background};
  ${position};
  ${shadow};
  ${border};
`;
