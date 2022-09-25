describe("Tutorials Landing Page", function () {
  before(() => {
    cy.visit("/")
  })

  it("renders all of the tutorials lessons", function () {
    cy.title().should('eq', 'Google')
  })
})

export {}
