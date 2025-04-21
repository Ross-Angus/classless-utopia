// This is passed a link and appends (or changes) the link's hash to be
// a random number, making it likely that the link will be unvisited
const freshLink = (anchor) => {
  if (anchor === null) return;
  const randomString = `${Math.random()}`.split('.')[1];
  let url = anchor.getAttribute('href');
  url = `${url.split('#')[0]}#${randomString}`;
  anchor.setAttribute('href', url);
};

export default freshLink;
