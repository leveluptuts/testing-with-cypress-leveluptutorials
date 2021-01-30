describe("Make sure site loads", () => {
  it("Page Loads", () => {
    cy.visit("http://localhost:3000/")
    cy.contains("Filter")

    expect(true).to.equal(true)
  })
})
