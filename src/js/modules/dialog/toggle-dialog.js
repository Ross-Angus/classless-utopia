// While it shouldn't be possible to click this button while the dialog is
// open, I've made it a toggle function just in case someone puts it inside
// the dialog element.
const toggleDialog = id => {
  const dialog = document.getElementById(id);
  if (!dialog) return;
  dialog.offsetParent === null ? dialog.showModal() : dialog.close();
};

export default toggleDialog;
