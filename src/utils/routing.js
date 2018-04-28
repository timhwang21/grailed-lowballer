export const isIndex = () => window.location.pathname === '/';
export const isListing = () =>
  window.location.pathname.startsWith('/listings/');
export const isOwnListing = () => !!document.getElementById('price-drop-form');
export const isSell = () => window.location.pathname.startsWith('/sell');
