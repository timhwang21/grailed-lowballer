import { setNativeValue } from './utils/setNativeValue';

const messages = [
  'measurements?',
  'paypal ready',
  'will pay immediately',
  'do you take trades for supreme?',
  'does this fit tts?',
  'can you hold for me? can pay end of week',
];

export default () => {
  const offerButton = document.getElementsByClassName('_make-offer')[0];

  if (!offerButton) {
    return;
  }

  offerButton.innerText = 'Lowball by 60%';
  offerButton.onclick = () =>
    setTimeout(() => {
      updateOffer();
      toggleMessageDisplay();
      updateAndFocusSubmitButton();
    }, 0);
};

/*
  Finds the DOM node for the input and populates with lowest acceptable offer
 */
const updateOffer = () => {
  const offerInputWrapper = document.getElementsByClassName('-offer-input')[0];

  const offerInputLabel = offerInputWrapper.getElementsByClassName(
    '--label',
  )[0];
  offerInputLabel.innerText = 'Your Lowball';

  const offerInput = offerInputWrapper.getElementsByClassName('--input')[0];
  const originalPrice = document
    .getElementsByClassName('-original-price')[0]
    .innerText.match(/\d+$/)[0];
  setNativeValue(offerInput, Math.ceil(originalPrice * 0.6) + 1);
};

/*
  Opens the message dropdown and chooses a random message to populate
 */
const toggleMessageDisplay = () => {
  const messageToggle = document.getElementsByClassName('-message-toggle')[0];
  messageToggle &&
    messageToggle.dispatchEvent(new Event('click', { bubbles: true }));
  setTimeout(() => {
    const textareaContainer = document.getElementsByClassName(
      '-message-input',
    )[0];

    if (!textareaContainer) {
      return;
    }
    const textarea = textareaContainer.getElementsByTagName('textarea')[0];
    setNativeValue(
      textarea,
      messages[Math.floor(Math.random() * messages.length)],
    );
  }, 0);
};

/*
  Update text content of submit button and focuses it
 */
const updateAndFocusSubmitButton = () => {
  const submitButtonWrapper = document.getElementsByClassName(
    '-purchase-button-wrapper',
  );
  const submitButton = submitButtonWrapper
    ? submitButtonWrapper[0].firstChild
    : null;

  if (submitButton) {
    submitButton.innerText = submitButton.innerText.replace('OFFER', 'LOWBALL');
    submitButton.focus();
  }
};
