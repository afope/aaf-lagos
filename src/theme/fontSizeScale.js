import { createScale, createScaleTuner } from './utils';
import { MAX_FONT_SIZE } from './constants';


const fontSizeScale = createScale({ end: MAX_FONT_SIZE, step: 0.3 });

export const fontSizeTuner = createScaleTuner(fontSizeScale);

export default fontSizeScale;
