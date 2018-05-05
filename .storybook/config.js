import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

const req = require.context("../stories", true, /\.stories\.js$/);

setOptions({
  name: "ReTable",
  url: "https://github.com/liorheber/retable",
  goFullScreen: false,
  showStoriesPanel: false,
  showAddonPanel: false,
  showSearchBox: false,
  sortStoriesByKind: false
});

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
