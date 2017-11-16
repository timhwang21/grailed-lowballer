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
    document.getElementById('offer').value *= .6;
    document.getElementById('message').innerText = messages[Math.floor(Math.random()*messages.length)];
  }, 0);
}