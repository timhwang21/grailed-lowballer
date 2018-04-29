import { INITIALIZE } from './constants';

/*
  Any message for which thunk: true REQUIRES a corresponding thunk in thunks.js
 */

export const initialize = () => ({
  type: INITIALIZE,
});
