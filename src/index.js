import lowball from './lowball';
import removeAds from './removeAds';
import addExportButton from './addExportButton';
import { isIndex, isListing, isOwnListing, isSell } from './utils/routing';

const handleIndexActions = () => {
  removeAds();
};

const handleListingActions = () => {
  lowball();
};

const handleOwnListingActions = () => {
  addExportButton();
};

const handleSellActions = () => {};

window.onload = () => {
  isIndex() && handleIndexActions();
  isListing() && handleListingActions();
  isOwnListing() && handleOwnListingActions();
  isSell() && handleSellActions();
};
