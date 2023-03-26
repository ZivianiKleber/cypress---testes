const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qxs7uv',
  e2e: {
    baseUrl: 'http://alura-fotos.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
