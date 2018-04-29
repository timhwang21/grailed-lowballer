import fetchListing from './actions/fetchListing';
import { exportText, exportJson } from './actions/export';

const getCurrentListingID = () =>
  window.location.pathname.match(/\/listings\/(\d+)/)[1];

const createButton = innerText => {
  const btn = document.createElement('a');
  btn.innerText = innerText;
  btn.className = 'button white';

  return btn;
};

// Buyer and seller pages have different DOM structure
const getButtonContainer = () =>
  document.getElementsByClassName('listing-cta buyer')[0] ||
  document.getElementById('listing-show-cta');

export default async () => {
  const currentListing = await fetchListing(getCurrentListingID());

  if (!currentListing) {
    return;
  }

  const btnContainer = getButtonContainer();

  if (!btnContainer) {
    return;
  }

  const exportTextBtn = createButton('export as plaintext');
  const exportJsonBtn = createButton('export as json');

  exportTextBtn.onclick = () => exportText(currentListing);
  exportJsonBtn.onclick = () => exportJson(currentListing);

  btnContainer.appendChild(exportTextBtn);
  btnContainer.appendChild(exportJsonBtn);
};
