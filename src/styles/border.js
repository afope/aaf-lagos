import { createResponsiveStyle, createStyle, getBorder } from './utils';


export const border = createResponsiveStyle({
  prop: 'border',
  key: 'borders',
  getter: getBorder,
});

export const borderTop = createResponsiveStyle({
  prop: 'borderTop',
  key: 'borders',
  getter: getBorder,
});

export const borderRight = createResponsiveStyle({
  prop: 'borderRight',
  key: 'borders',
  getter: getBorder,
});

export const borderBottom = createResponsiveStyle({
  prop: 'borderBottom',
  key: 'borders',
  getter: getBorder,
});

export const borderLeft = createResponsiveStyle({
  prop: 'borderLeft',
  key: 'borders',
  getter: getBorder,
});

export const borders = (props) => ({
  ...border(props),
  ...borderTop(props),
  ...borderRight(props),
  ...borderBottom(props),
  ...borderLeft(props),
});

borders.propTypes = {
  ...border.propTypes,
  ...borderTop.propTypes,
  ...borderRight.propTypes,
  ...borderBottom.propTypes,
  ...borderLeft.propTypes,
};

export const borderColor = createStyle({
  prop: 'borderColor',
  key: 'colors',
});

export const borderRadius = createStyle({
  prop: 'borderRadius',
  key: 'radii',
  numberToRem: true,
});

export const boxShadow = createStyle({
  prop: 'boxShadow',
  key: 'shadows',
});
