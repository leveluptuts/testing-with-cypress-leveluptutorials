// before(() => {
//   cy.visit("http://localhost:3000/")
// })

// beforeEach(() => {
//   cy.visit("http://localhost:3000/")
// })

// before - once, before all
// beforeEach - runs before every block
// test
// afterEach - runs after every block
// after - runs once after all

describe("Make sure site loads", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it("Page Loads", () => {
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

  it("Correct number of movies", () => {
    cy.get("[data-testid=movies-list-movie]").should("have.length", 20)
  })
})
