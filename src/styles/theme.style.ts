import { defaultBreakingPoints } from '.';

interface StartTheme {
  breakingPoint: object;
  size: {
    navHeight: string;
  };
  fontSize: {
    normal: string;
  };
  colors: object;
}

const defaultSizes = {
  navHeight: '60px',
  hamburgerWidth: '250px',
};

const defaultFontSizes = {
  normal: '20px',
};

export const DefaultTheme: StartTheme = {
  breakingPoint: defaultBreakingPoints,
  size: defaultSizes,
  fontSize: defaultFontSizes,
  colors: {
    black: '#000000',
    gray: '#666666',
    lightGray: '#E7E7E7',
    white: '#ffffff',

    primaryColor: '#FFAA00',
    secondaryColor: '#FF7B00',

    primaryBackgroundColor: '#ffffff',
    secondaryBackgroundColor: '#ffffff',
  },
};

export const SecondaryTheme: StartTheme = {
  breakingPoint: defaultBreakingPoints,
  size: defaultSizes,
  fontSize: defaultFontSizes,
  colors: {
    black: '#000e1a',
    white: '#ffffff',
    gray: '#444444',
    mediumGray: '#888888',
    lightGray: '#E1E1E1',
    primaryColor: '#00b4d8',
    secondaryColor: '#0077b6',
  },
};
