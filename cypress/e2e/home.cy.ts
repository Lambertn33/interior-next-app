describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should test all home components", () => {
    cy.get('[data-cy="home-title"]').should("contain.text", "Make your");
    cy.get('[data-cy="home-company-card"]').should("have.length.above", 1);
    cy.get('[data-cy="home-catalogue-card"]').should("have.length.above", 1);
  });

  it("should navigate to gallery on clicking the category swiper gallery link", () => {
    cy.get('[data-cy="home-gallery-link"]').click();
    cy.location("pathname").should("equal", "/gallery");
  });
});
