describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should test the navigation", () => {
    cy.get("#main-nav .nav-links")
      .should("exist")
      .and("have.length.greaterThan", 3);

    cy.get('[data-cy="nav-home"]').click();
    cy.location("pathname").should("equal", "/");

    cy.get('[data-cy="nav-about"]').click();
    cy.location("pathname").should("equal", "/about");

    cy.get('[data-cy="nav-gallery"]').click();
    cy.location("pathname").should("equal", "/gallery");

    cy.get('[data-cy="nav-projects"]').click();
    cy.location("pathname").should("equal", "/projects");

    cy.get('[data-cy="nav-contact"]').click();
    cy.location("pathname").should("equal", "/contact");
  });
});
