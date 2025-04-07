// This returns just the top level navigation links and the buttons
// which trigger the sub-navigation
const getTopLevel = element => {
  if (element === null) return;
  return element.querySelectorAll(":scope > li > a, :scope > li > button, :scope > li > strong a");
};

export default getTopLevel;
