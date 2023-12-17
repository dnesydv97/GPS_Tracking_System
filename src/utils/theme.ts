export type Sizes = {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    '1x': number;
    '2x': number;
    '3x': number;
    '4x': number;
    '5x': number;
  };
  
  export const fontSizes: Sizes = {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    '1x': 20,
    '2x': 24,
    '3x': 30,
    '4x': 40,
    '5x': 50,
  };
  
  export const spacing: Sizes = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    '1x': 20,
    '2x': 24,
    '3x': 30,
    '4x': 40,
    '5x': 50,
  };
  
  export const colors = {
    primary: '#167A8B',
    secondary: '',
    primaryTextColor: '#243D44',
    secondaryTextColor: '#576874',
    white: '#fff',
    lightGreyWhite: '#F5F5F5',
    greyWhite: '#E9E9E9',
    grey: '#6b6e77',
    red: '#ff0000',
    danger: '#FF5050',
    black: '#000',
    purple: '#D0A7E2',
    Requested: '#D0A7E2',
    Accepted: '#a5d6a7',
    Rejected: '#EE9A9A',
    greyLight: '#D3D3D3',
    orange: '#ff6c37',
  };
  
  export const createTheme = () => {
    const theme = {
      colors,
      fontSizes,
      spacing,
    };
  
    return theme;
  };
  
  const theme = createTheme();
  export type ThemeType = typeof theme;
  