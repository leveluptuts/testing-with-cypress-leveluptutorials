describe("Make sure site loads", () => {
  it("Page Loads", () => {
    cy.visit("http://localhost:3000/")
    cy.contains("Filter")

    cy.get("[data-testid=movies-list-movie]")
      .first()
      .then(($movie) => {
        const movieUrl = $movie.attr("href")
        cy.get("[data-testid=movies-list-movie]").first().click()
        cy.url().should("include", movieUrl)
      })

    expect(true).to.equal(true)
  })
})
