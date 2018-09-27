import { createResponsiveStyle, getWidth } from './utils';


export const alignItems = createResponsiveStyle({
  prop: 'alignItems',
  // for backwards compatibility - will cause bugs when used with textAlign
  alias: 'align',
});

export const alignContent = createResponsiveStyle({
  prop: 'alignContent',
});

export const justifyContent = createResponsiveStyle({
  prop: 'justifyContent',
  // for backwards compatibility
  alias: 'justify',
});

// for backwards compatibility
const flexWrapShim = (value) => value ? 'wrap' : value;

export const flexWrap = createResponsiveStyle({
  prop: 'flexWrap',
  alias: 'wrap',
  getter: flexWrapShim,
});

export const flexBasis = createResponsiveStyle({
  prop: 'flexBasis',
  getter: getWidth,
});

export const flexDirection = createResponsiveStyle({
  prop: 'flexDirection',
  alias: 'orientation',
});

export const flex = createResponsiveStyle({
  prop: 'flex',
});

export const justifySelf = createResponsiveStyle({
  prop: 'justifySelf',
});

export const alignSelf = createResponsiveStyle({
  prop: 'alignSelf',
});

export const order = createResponsiveStyle({
  prop: 'order',
});
