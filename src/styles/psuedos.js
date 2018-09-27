import { createPseudoStyle, createComplexStyle } from './utils';


export const hover = createPseudoStyle({
  prop: 'hover',
  pseudoclass: 'hover',
  keys: {
    color: 'colors',
    backgroundColor: 'colors',
    borderColor: 'colors',
    boxShadow: 'shadows',
  },
});

export const focus = createPseudoStyle({
  prop: 'focus',
  keys: {
    color: 'colors',
    backgroundColor: 'colors',
    borderColor: 'colors',
    boxShadow: 'shadows',
  },
});

export const active = createPseudoStyle({
  prop: 'active',
  keys: {
    color: 'colors',
    backgroundColor: 'colors',
    borderColor: 'colors',
    boxShadow: 'shadows',
  },
});

export const disabled = createPseudoStyle({
  prop: 'disabledStyle',
  pseudoclass: 'disabled',
  keys: {
    color: 'colors',
    backgroundColor: 'colors',
    borderColor: 'colors',
    boxShadow: 'shadows',
  },
});

export const textStyle = createComplexStyle({
  prop: 'textStyle',
  key: 'textStyles',
});

export const colorStyle = createComplexStyle({
  prop: 'colors',
  key: 'colorStyles',
});

export const buttonStyle = createComplexStyle({
  prop: 'buttonStyle',
  key: 'buttons',
});
