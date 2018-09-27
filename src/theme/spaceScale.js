import { createScale, createScaleTuner } from './utils';
import { MAX_SPACE } from './constants';


const spaceScale = createScale({ end: MAX_SPACE, step: 0.5 });

export const spaceTuner = createScaleTuner(spaceScale);

export default spaceScale;
