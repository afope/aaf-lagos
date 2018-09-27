import { createResponsiveStyle, createStyle } from './utils';


export const position = createResponsiveStyle({
  prop: 'position',
});

export const zIndex = createStyle({
  prop: 'zIndex',
});

export const float = createStyle({
  prop: 'float',
});

export const top = createResponsiveStyle({
  prop: 'top',
  numberToRem: true,
});

export const right = createResponsiveStyle({
  prop: 'right',
  numberToRem: true,
});

export const bottom = createResponsiveStyle({
  prop: 'bottom',
  numberToRem: true,
});

export const left = createResponsiveStyle({
  prop: 'left',
  numberToRem: true,
});
