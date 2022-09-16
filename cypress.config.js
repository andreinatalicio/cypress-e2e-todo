const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    video: false,
    videoUploadOnPasses: false,
    screenshotOnRunFailure: false,

    setupNodeEvents(on, config) {},
  },

  env: {
    apiToken: "d9TJjEJ8DfTd2wphezrXP1VPSYZPpEem4y1u",
  },
});
