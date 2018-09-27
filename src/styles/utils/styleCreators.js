import propTypes from 'prop-types';
import { get, is, breaks, dec, fallbackTheme, getValue, media, merge, arr, getBooleans } from './misc';


export const createStyle = ({
                              prop,         // react prop
                              alias,        // shorthand alias for react prop
                              key,          // key for theme object
                              getter,       // accessor function for converting values
                              numberToRem,
                            }) => {
  const fn = (props) => {
    const n = is(props[prop]) ? props[prop] : props[alias];
    const th = fallbackTheme(props);

    if (!is(n)) return null;

    const value = getValue(
      get(th, [key, n].join('.'), n),
      getter,
      numberToRem,
    );

    return { [prop]: value };
  };

  fn.propTypes = {
    [prop]: propTypes.numberOrString,
  };

  if (alias) {
    fn.propTypes[alias] = propTypes.numberOrString;
  }

  return fn;
};

export const createResponsiveStyle = ({
                                        prop,
                                        alias,
                                        key,
                                        getter,
                                        numberToRem,
                                      }) => {
  const fn = (props) => {
    const value = is(props[prop]) ? props[prop] : props[alias];

    if (!is(value)) return null;

    const bp = breaks(props);
    const th = fallbackTheme(props);
    const sx = (n) => getValue(
      get(th, [key || prop, n].join('.'), n),
      getter,
      numberToRem,
    );

    if (!Array.isArray(value)) {
      return {
        [prop]: sx(value),
      };
    }

    const val = arr(value);

    return val
      .map(sx)
      .map(dec(prop))
      .map(media(bp))
      .reduce(merge, {});
  };

  // add propTypes object to returned function
  fn.propTypes = {
    [prop]: propTypes.responsive,
  };

  if (alias) {
    fn.propTypes[alias] = propTypes.responsive;
  }

  return fn;
};

export const createPseudoStyle = ({
                                    prop,
                                    alias,
                                    keys = {},
                                    getters = {},
                                    numberToRem = {},
                                  }) => {
  const fn = (props) => {
    const style = props[prop] || props[alias];
    const th = fallbackTheme(props);
    const styleKeys = Object.keys(style);

    styleKeys.forEach((key) => {
      const torem = numberToRem[key];
      if (!keys[key] && !getters[key] && !torem) return;
      const themeKey = [keys[key], style[key]].join('.');
      style[key] = getValue(
        get(th, themeKey, style[key]),
        getters[key],
        torem,
      );
    });

    return {
      [`&:${prop}`]: style,
    };
  };

  fn.propTypes = {
    [prop]: propTypes.object,
  };

  return fn;
};

export const createComplexStyle = ({
                                     prop,
                                     key,
                                     alias,
                                   }) => {
  const fn = (props) => {
    let style = get(props,
      ['theme', key,
        get(props, prop, props[alias]),
      ].join('.'),
      {},
    );

    const bools = getBooleans(props);

    bools.forEach((name) => {
      style = {
        ...style,
        ...get(props, ['theme', key, name].join('.'), {}),
      };
    });
    return style;
  };

  fn.propTypes = {
    [prop]: propTypes.oneOfType([
      propTypes.number,
      propTypes.string,
    ]),
  };

  if (alias) {
    fn.propTypes[alias] = propTypes.oneOfType([
      propTypes.number,
      propTypes.string,
    ]);
  }

  return fn;
};
