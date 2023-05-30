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
import { windowSizeType } from './windowSize.type';

export interface MainProps
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    BackgroundProps,
    PositionProps,
    ShadowProps,
    BorderProps {
  windowSize: windowSizeType;
}

export const StyledMain = styled.main<MainProps>`
  min-height: 100%;
  min-width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};

  ${color};
  ${space};
  ${layout};
  ${background};
  ${position};
  ${shadow};
  ${border};
`;
