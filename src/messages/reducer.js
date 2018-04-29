import { INITIALIZE } from './constants';

export default (state, message) => {
  switch (message.type) {
    case INITIALIZE:
      return {};
  }
};
