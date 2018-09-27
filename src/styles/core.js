import { createResponsiveStyle, getWidth } from './utils';


export const width = createResponsiveStyle({
  prop: 'width',
  alias: 'w',
  getter: getWidth,
});

export const textColor = createResponsiveStyle({
  prop: 'color',
  key: 'colors',
});

export const bgColor = createResponsiveStyle({
  prop: 'bg',
  cssProperty: 'backgroundColor',
  key: 'colors',
});

export const overflow = createResponsiveStyle({
  prop: 'overflow',
});

export const color = (props) => ({
  ...textColor(props),
  ...bgColor(props),
});

color.propTypes = {
  ...textColor.propTypes,
  ...bgColor.propTypes,
};
