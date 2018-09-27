import { createResponsiveStyle, createStyle } from './utils';


export const display = createResponsiveStyle({
  prop: 'display',
});

export const maxWidth = createResponsiveStyle({
  prop: 'maxWidth',
  key: 'maxWidths',
  numberToRem: true,
});

export const minWidth = createResponsiveStyle({
  prop: 'minWidth',
  key: 'minWidths',
  numberToRem: true,
});

export const height = createResponsiveStyle({
  prop: 'height',
  key: 'heights',
  numberToRem: true,
});

export const maxHeight = createResponsiveStyle({
  prop: 'maxHeight',
  key: 'maxHeights',
  numberToRem: true,
});

export const minHeight = createResponsiveStyle({
  prop: 'minHeight',
  key: 'minHeights',
  numberToRem: true,
});

export const sizeWidth = createResponsiveStyle({
  prop: 'size',
  cssProperty: 'width',
  numberToRem: true,
});

export const sizeHeight = createResponsiveStyle({
  prop: 'size',
  cssProperty: 'height',
  numberToRem: true,
});

export const size = (props) => ({
  ...sizeWidth(props),
  ...sizeHeight(props),
});

size.propTypes = {
  ...sizeWidth.propTypes,
  ...sizeHeight.propTypes,
};

export const ratioPadding = createStyle({
  prop: 'ratio',
  cssProperty: 'paddingBottom',
  getter: (n) => `${n * 100}%`,
});

export const ratio = (props) => ({
  height: 0,
  ...ratioPadding(props),
});

ratio.propTypes = {
  ...ratioPadding.propTypes,
};
