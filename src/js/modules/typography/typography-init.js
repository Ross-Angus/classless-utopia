import freshLink from "../utility/fresh-link/fresh-link.js";

const typographyInit = () => {
  const freshLinks = document.querySelectorAll('[data-js="fresh"]');
  freshLinks.forEach(link => {
    freshLink(link);
  });
};

export default typographyInit;
