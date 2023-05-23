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

export interface BoxProps
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    BackgroundProps,
    PositionProps,
    ShadowProps,
    BorderProps {}

export const Box = styled.div<BoxProps>`
  ${color};
  ${space};
  ${layout};
  ${background};
  ${position};
  ${shadow};
  ${border};
`;
