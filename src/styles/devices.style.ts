import { defaultBreakingPoints } from './breakpoints.style';

export const device = {
  mobileS: `(min-width: ${defaultBreakingPoints.mobileS}px)`,
  mobileM: `(min-width: ${defaultBreakingPoints.mobileM}px)`,
  mobileL: `(min-width: ${defaultBreakingPoints.mobileL}px)`,
  tablet: `(min-width: ${defaultBreakingPoints.tablet}px)`,
  laptop: `(min-width: ${defaultBreakingPoints.laptop}px)`,
  laptopL: `(min-width: ${defaultBreakingPoints.laptopL}px)`,
  desktop: `(min-width: ${defaultBreakingPoints.desktop}px)`,
  desktopL: `(min-width: ${defaultBreakingPoints.desktop}px)`,
};
