const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.demoblaze.com/"
  },
  env: {
    baseUrl: "https://www.demoblaze.com/"
  }
});
