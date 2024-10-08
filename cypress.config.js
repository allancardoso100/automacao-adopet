const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //Comando abaixo para realizar gravação da execução em video
    //video:true
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: true,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss" }
  },
});
