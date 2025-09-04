import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import scss from "highlight.js/lib/languages/scss";
import xml from "highlight.js/lib/languages/xml";
import clickEvents from "./modules/events/click-events.js";
import mainNavSetup from "./modules/navigation/main/main-nav-setup.js";
import tabsSetup from "./modules/navigation/tabs/tabs.js";
import typographyInit from "./modules/typography/typography-init.js";

// For blocks of code and syntactic highlighting
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("xml", xml);
hljs.highlightAll();

clickEvents();
mainNavSetup();
tabsSetup();
typographyInit();
