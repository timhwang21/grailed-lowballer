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

export default async () => {
  const currentListing = await fetchListing(getCurrentListingID());

  if (!currentListing) {
    return;
  }

  const exportTextBtn = createButton('export as plaintext');
  const exportJsonBtn = createButton('export as json');

  exportTextBtn.onclick = () => exportText(currentListing);
  exportJsonBtn.onclick = () => exportJson(currentListing);

  document
    .getElementById('price-drop-form')
    .parentNode.appendChild(exportTextBtn);
  document
    .getElementById('price-drop-form')
    .parentNode.appendChild(exportJsonBtn);
};
