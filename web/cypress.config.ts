import { defineConfig } from 'cypress'

export default defineConfig({
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixtures',
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 300000,
  chromeWebSecurity: false,
  video: false,
  env: {
    E2E_USERNAME: '',
    E2E_PASSWORD: '',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
    baseUrl: 'http://localhost:4269',
  },
})
