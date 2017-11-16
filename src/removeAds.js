const blacklist = [
  'dry-clean-only-preview-wrapper',
  'marquee',
  'marquee-wrapper',
];

export default () => blacklist
  .reduce((nodes, klass) => nodes.concat([...document.getElementsByClassName(klass)]), [])
  .forEach(node => node.style.display = 'none');
