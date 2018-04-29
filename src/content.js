import lowball from './lowball';
import removeAds from './removeAds';
import addExportButtons from './addExportButtons';
import { isIndex, isListing, isSell } from './utils/routing';

function run(funcs) {
  funcs.forEach(fn => fn());
}

class Main {
  state = {};

  constructor() {
    window.onload = this.handleWindowLoad;
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
