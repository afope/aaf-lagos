import { createStyle } from './utils';


export const background = createStyle({
  prop: 'background',
});

export const backgroundImage = createStyle({
  prop: 'backgroundImage',
  alias: 'bgImage',
  getter: (value) => `url(${value})`,
});

export const backgroundSize = createStyle({
  prop: 'backgroundSize',
  alias: 'bgSize',
});

export const backgroundPosition = createStyle({
  prop: 'backgroundPosition',
  alias: 'bgPosition',
});

export const backgroundRepeat = createStyle({
  prop: 'backgroundRepeat',
  alias: 'bgRepeat',
});
