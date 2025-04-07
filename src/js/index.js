import clickEvents from "./modules/events/click-events.js";
import mainNavSetup from "./modules/navigation/main/main-nav-setup.js";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';

clickEvents();
mainNavSetup();

// For blocks of code and syntactic highlighting
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('xml', xml);
hljs.highlightAll();
