const baseColors = {
  primary: {
    darkBlue: '#2d314d',
    limeGreen: '#31d35c',
    darkLimeGreen: '#1d9b4d',
    brightCyan: '#2bb7da',
  },
  neutral: {
    grayishBlue: '#9698a6',
    lightGrayishBlue: '#f3f4f6',
    lightestGray: '#fafafa',
    white: '#ffffff',
  },
};

const theme = {
  colors: baseColors,
  gradients: {
    primary: `linear-gradient(
      90deg,
      ${baseColors.primary.limeGreen} 0%,
      ${baseColors.primary.brightCyan} 100%
    )`,
  },
  transitions: {
    fast: '0.1s',
    regular: '0.2s',
  },
};

export default theme;
