describe("Make sure site loads", () => {
  it("Page Loads", () => {
    cy.visit("http://localhost:3000/")
    cy.contains("Filter")

    cy.get("[data-testid=movies-list-movie]").first().click()

    expect(true).to.equal(true)
  })
})
