import { WindowStateType } from '@/types';
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
    BorderProps {
  windowSize: WindowStateType;
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
