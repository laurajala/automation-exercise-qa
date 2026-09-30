const { defineConfig } = require('cypress')

module.exports = defineConfig({
  allowCypressEnv: false,

  // Nova tentativa automática apenas na pipeline (cypress run),
  // para instabilidades pontuais da aplicação externa
  retries: {
    runMode: 2,
    openMode: 0
  },

  e2e: {
    baseUrl: 'https://automationexercise.com'
  }
})
