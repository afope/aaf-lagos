import { createResponsiveStyle, createStyle } from './utils';


export const gridGap = createResponsiveStyle({
  prop: 'gridGap',
  numberToRem: true,
  key: 'space',
});

export const gridColumnGap = createResponsiveStyle({
  prop: 'gridColumnGap',
  numberToRem: true,
  key: 'space',
});

export const gridRowGap = createResponsiveStyle({
  prop: 'gridRowGap',
  numberToRem: true,
  key: 'space',
});

export const gridColumn = createResponsiveStyle({
  prop: 'gridColumn',
});

export const gridRow = createResponsiveStyle({
  prop: 'gridRow',
});

export const gridAutoFlow = createStyle({
  prop: 'gridAutoFlow',
});

export const gridAutoColumns = createStyle({
  prop: 'gridAutoColumns',
});

export const gridAutoRows = createStyle({
  prop: 'gridAutoRows',
});

export const gridTemplateColumns = createResponsiveStyle({
  prop: 'gridTemplateColumns',
});

export const gridTemplateRows = createResponsiveStyle({
  prop: 'gridTemplateRows',
});
