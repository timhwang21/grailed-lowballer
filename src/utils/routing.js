export const isIndex = () => window.location.pathname === '/';
export const isListing = () =>
  window.location.pathname.startsWith('/listings/');
export const isSell = () => window.location.pathname.startsWith('/sell');
