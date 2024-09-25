import { defineConfig } from "cypress";
import getCompareSnapshotsPlugin from "cypress-image-diff-js/plugin";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    supportFile: "cypress/support/component.ts",
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
    viewportWidth: 700,
    viewportHeight: 700,
    screenshotsFolder: "cypress/visual-screenshots",
    trashAssetsBeforeRuns: false,
    specPattern: "cypress/component/*.tsx",
  },
});
