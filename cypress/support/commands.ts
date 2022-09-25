/// <reference path="../global.d.ts" />

// @ts-ignore
Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args)
})

export {}
