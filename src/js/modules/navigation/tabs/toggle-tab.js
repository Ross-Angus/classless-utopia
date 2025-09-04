// While it shouldn't be possible to click this button while the dialog is
// open, I've made it a toggle function just in case someone puts it inside
// the dialog element.
const toggleTab = (tabId, tabPanelId) => {
  console.log(tabId, tabPanelId);
  const tab = document.getElementById(tabId);
  const tabPanel = document.getElementById(tabPanelId);
  const tabParent = tab.closest('[role="tablist"]');
  if (tab && tabPanel && tabParent) {
    // Mark the other tabs as not selected
    tabParent.querySelectorAll('[role="tab"]').forEach((tab) => {
      // Mark the other tabs as not selected
      if (tab.getAttribute("id") !== tabId) {
        tab.setAttribute("aria-selected", "false");
      }
      // Hide the associated tab panel
      tabPanelId = tab.getAttribute("aria-controls");
      const tabPanel = document.getElementById(tabPanelId);
      if (tabPanel) {
        tabPanel.setAttribute("hidden", "");
      }
    });
    // Mark the selected tab as selected
    tab.setAttribute("aria-selected", "true");
    tabPanel.removeAttribute("hidden");
  }
};

export default toggleTab;
