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
  offerButton.onclick = () => setTimeout(() => {
    const offerInput = document.getElementById('offer');
    const messageInput = document.getElementById('message');

    offerInput.value = (offerInput.value * .6).toFixed(2);
    messageInput.innerText = messages[Math.floor(Math.random() * messages.length)];
  }, 0);
}