export const is = (value) => value !== undefined && value !== null;
export const num = (value) => typeof value === 'number' && !isNaN(value);
export const rem = (value) => num(value) ? `${value}rem` : value;
export const neg = (value) => value < 0;
export const arr = (value) => Array.isArray(value) ? value : [value];

export const get = (obj, path, fallback) => path.split('.')
  .reduce((a, b) => (a && a[b]) ? a[b] : null, obj) || fallback;

export const createMediaQuery = (breakpoint) => `@media screen and (min-width: ${rem(breakpoint)})`;

export const fallbackTheme = (props) => ({
  ...get(props, 'theme'),
});

export const breaks = ({ theme: { breakpoints = [] } }) => [
  null,
  ...breakpoints.map(createMediaQuery),
];

export const dec = (props) => (val) => arr(props)
  .reduce((acc, prop) => {
    acc[prop] = val;

    return acc;
  }, {});

export const media = (bp) => (d, i) => {
  if (is(d)) {
    return bp[i] ? ({ [bp[i]]: d }) : d;
  }

  return null;
};

export const merge = (a, b) => Object.assign({}, a, b, Object.keys(b).reduce((obj, key) =>
    Object.assign(obj, {
      [key]: a[key] !== null && typeof a[key] === 'object'
        ? merge(a[key], b[key])
        : b[key],
    }),
  {}));

export const getValue = (val, getter, torem) => {
  if (typeof getter === 'function') {
    return getter(val);
  }

  return torem ? rem(val) : val;
};

// todo: consider alternative names
export const themeGet = (keys, fallback) => (props) => get(props.theme, keys, fallback);

export const getBooleans = (props) => {
  const bools = [];
  const fields = Object.keys(props);

  fields.forEach((field) => {
    if (props[field] !== true) return;

    bools.push(field);
  });

  return bools;
};
