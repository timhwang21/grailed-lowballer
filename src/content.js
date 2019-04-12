import lowball from './lowball';
import removeAds from './removeAds';
import addExportButtons from './addExportButtons';
import { isIndex, isListing, isSell } from './utils/routing';
import { initialize } from './messages';

function run(funcs) {
  funcs.forEach(fn => fn());
}

class Main {
  state = {};

  constructor() {
    this.dispatch(initialize());

    window.onload = this.handleWindowLoad;
  }

  /*
    One-way data flow: state is only ever received from background.js.
   */
  dispatch(message) {
    chrome.runtime.sendMessage(message, newState => {
      this.state = newState;
    });
  }

  handleIndexActions() {
    run([removeAds]);
  }

  handleListingActions() {
    run([lowball, addExportButtons]);
  }

  handleSellActions() {
    run([]);
  }

  handleWindowLoad = () => {
    if (isIndex()) {
      this.handleIndexActions();
    } else if (isListing()) {
      this.handleListingActions();
    } else if (isSell()) {
      this.handleSellActions();
    }
  };
}

new Main();
