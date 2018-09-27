import { num, rem } from './misc';


export const getWidth = (value) => !num(value) || value > 1 ? rem(value) : `${value * 100}%`;
export const getBorder = (value) => num(value) && value > 0 ? `${value}px solid` : value;
