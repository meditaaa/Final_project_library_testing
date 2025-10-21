const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.klavb.lt",
    viewportWidth: 1280,
    viewportHeight: 800,
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
    },
  },
});
