import range from 'lodash/range';


export const createScaleTuner = (scale) => {
  if (!(scale instanceof Array)) {
    return null;
  }

  const initialTuner = {};
  const buildTuner = (tuner, scaleValue, scalePoint) => ({ ...tuner, [`point${scalePoint}`]: scalePoint });

  return scale.reduce(buildTuner, initialTuner);
};

export const createScale = ({ start = 0, end = 0, step = 0 }) => range(start, end, step);
