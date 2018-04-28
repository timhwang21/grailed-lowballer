const messages = [
  'measurements?',
  'paypal ready',
  'will pay immediately',
  'do you take trades for supreme?',
  'does this fit tts?',
  'can you hold for me? can pay end of week',
];

export default () => {
  const offerButton = document.getElementsByClassName('makeoffer')[0];

  if (!offerButton) {
    return;
  }

  offerButton.innerText = 'Lowball by 60%';
  offerButton.onclick = () =>
    setTimeout(() => {
      const offerInput = document.getElementById('offer');
      const messageInput = document.getElementById('message');
      const submitButtonWrapper = document.getElementsByClassName('submit');
      const submitButton = submitButtonWrapper
        ? submitButtonWrapper[0].firstChild
        : null;

      offerInput.value = Math.ceil(offerInput.value * 0.6);
      messageInput.innerText =
        messages[Math.floor(Math.random() * messages.length)];
      submitButton && submitButton.focus();
    }, 0);
};
