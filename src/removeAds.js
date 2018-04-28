const blacklist = [
  'dry-clean-only-preview-wrapper',
  'marquee',
  'marquee-wrapper',
  'HomepageHero',
];

export default () => {
  const homeNode = document.getElementById('homepage');

  blacklist
    .reduce(
      (nodes, klass) =>
        nodes.concat([...homeNode.getElementsByClassName(klass)]),
      [],
    )
    .forEach(node => (node.style.display = 'none'));
};
