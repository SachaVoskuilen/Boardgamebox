import { defaultBreakingPoints } from '.';

interface StartTheme {
  breakingPoints: object;
  sizes: {
    navHeight: string;
  };
  fontSizes: {
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
  breakingPoints: defaultBreakingPoints,
  sizes: defaultSizes,
  fontSizes: defaultFontSizes,
  colors: {
    black: '#000000',
    gray: '#666666',
    lightGray: '#E7E7E7',
    white: '#ffffff',

    color10: '#FF7B00',
    color9: '#FF8800',
    color8: '#FF9500',
    color7: '#FFA200',
    color6: '#FFAA00',
    color5: '#FFB700',
    color4: '#FFC300',
    color3: '#FFD000',
    color2: '#FFDD00',
    color1: '#FFEA00',

    primaryBackgroundColor: '#ffffff',
    secondaryBackgroundColor: '#ffffff',
  },
};

export const SecondaryTheme: StartTheme = {
  breakingPoints: defaultBreakingPoints,
  sizes: defaultSizes,
  fontSizes: defaultFontSizes,
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
