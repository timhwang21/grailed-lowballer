const headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});

const URL =
  'https://mnrwefss2q-dsn.algolia.net/1/indexes/Listing_production/query?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%203.21.1&x-algolia-application-id=MNRWEFSS2Q&x-algolia-api-key=a3a4de2e05d9e9b463911705fb6323ad';

export default id => {
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      params: `filters=(objectID:'${id}')`,
    }),
  };

  return fetch(URL, options)
    .then(resp => resp.json())
    .then(resp => resp.hits[0]);
};
