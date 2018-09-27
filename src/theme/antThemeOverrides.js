/*
*
* Ant theme overrides.
*
*
* */

const colors = require('./colors');


module.exports = {
  '@font-family-no-number': 'AvenirRoman, Muli, -apple-system, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif',

  '@heading-color': colors.primary,
  '@text-color': colors.graniteGray,
  '@text-color-secondary': colors.spanishGray,

  '@primary-color': colors.primary,

  '@font-size-base': '1rem',
  '@font-size-lg': '1.2rem',
  '@font-size-sm': '.8rem',

  '@btn-default-bg': colors.robinEggBlue,
  '@btn-default-color': colors.white,
  '@btn-default-border': colors.robinEggBlue,

  '@btn-height-base': '2.5rem',
  '@btn-height-lg': '3.5rem',
  '@btn-height-sm': '2rem',
};
