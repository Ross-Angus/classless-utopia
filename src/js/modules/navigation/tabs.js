// This runs once to set up all the extra markup which the tabs needs
const tabsSetup = () => {
  const tabSets = document.querySelectorAll("[role='tablist']");
  tabSets.forEach((tabSet, setIndex) => {
    const tabs = tabSet.querySelectorAll("[role='tab']");
    // This determines if any tab is currently selected
    let hasSelectedTab = false;
    tabs.forEach((tab, tabIndex) => {
      let tabPanel;
      let tabId = `tab-${setIndex}-${tabIndex}`;
      let tabPanelId;

      // Does this tab have an ID?
      !tab.hasAttribute("id")
        ? tab.setAttribute("id", tabId)
        : (tabId = tab.getAttribute("id"));

      // If this is an anchor tag, attempt to find the tab panel by the href fragment link
      if (tab.tagName === "A") {
        tabPanelId = tab.getAttribute("href").split("#")[1];
        tabPanelId && (tabPanel = document.getElementById(tabPanelId));
        if (tabPanel) {
          tab.setAttribute("aria-controls", tabPanelId);
        }
      }

      // If the tab has an aria-controls attribute, attempt to find the tab panel by the id
      else if (tab.hasAttribute("aria-controls")) {
        tabPanelId = tab.getAttribute("aria-controls");
        tabPanel = document.getElementById(tabPanelId);
      }

      // Hopefully we have a tab panel now
      if (tabPanel && tabPanelId) {
        tabPanel.setAttribute("aria-labelledby", tabId);
        tabPanel.setAttribute("hidden", "");
      }

      // Set the aria-selected attribute
      if (!tab.hasAttribute("aria-selected")) {
        tab.setAttribute("aria-selected", "false");
      } else if (tab.getAttribute("aria-selected") === "true") {
        hasSelectedTab = true;
        tabPanel.removeAttribute("hidden");
      }
    });

    // Was any tab selected during the last map()?
    if (!hasSelectedTab) {
      // Select the first tab
      tabs[0].setAttribute("aria-selected", "true");
      const panelId = tabs[0].getAttribute("aria-controls");
      const panel = document.getElementById(panelId);
      panel.removeAttribute("hidden");
    }
  });
};

export default tabsSetup;
