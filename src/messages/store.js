import reducer from './reducer';
import getThunk from './thunks';

export default class Store {
  state = {};

  getState = () => this.state;

  _processMessage = reply => message => {
    this.state = reducer(this.state, message);
    reply(this.getState());
  };

  _processThunk = reply => message => {
    getThunk(message)(this._processMessage(reply), this.getState);
  };

  dispatch(message, reply) {
    message.thunk
      ? this._processThunk(reply)(message)
      : this._processMessage(reply)(message);
  }
}
