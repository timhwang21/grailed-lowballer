/*
  Because messages cannot contain functions, async messages must be defined
  separately, and mapped to message types that are thunks.
 */
const THUNKS = {
  // [TYPE]: (dispatch, getState) => {},
};

export default ({ message }) => THUNKS[message];
