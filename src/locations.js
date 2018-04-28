export const isIndex = () => window.location.pathname === '/';
export const isListing = () =>
  window.location.pathname.startsWith('/listings/');
