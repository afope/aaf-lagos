import { createResponsiveStyle, createStyle } from './utils';


export const fontFamily = createStyle({
  prop: 'fontFamily',
  alias: 'font',
  key: 'fonts',
});

export const fontSize = createResponsiveStyle({
  prop: 'fontSize',
  alias: 'f',
  key: 'fontSizes',
  numberToRem: true,
});

export const textAlign = createResponsiveStyle({
  prop: 'textAlign',
  // for backwards compatibility - will cause bugs when used with alignItems
  alias: 'align',
});

export const lineHeight = createStyle({
  prop: 'lineHeight',
  key: 'lineHeights',
});

export const fontWeight = createStyle({
  prop: 'fontWeight',
  key: 'fontWeights',
});

export const letterSpacing = createStyle({
  prop: 'letterSpacing',
  key: 'letterSpacings',
  numberToRem: true,
});
