import Store from './messages/store';

/*
  The background script mainly serves as a request sender and data processor
  Because only the background script has access to cookies, we need to use it
  to "proxy" requests that use the host API
 */
class Main {
  store = new Store();

  constructor() {
    chrome.runtime.onMessage.addListener((message, sender, reply) => {
      this.store.dispatch(message, reply);
      return true;
    });
  }
}

new Main();
