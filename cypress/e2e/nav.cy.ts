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

  it("should test the theme", () => {
    cy.get('[data-cy="theme-toggler"]')
      .invoke("attr", "data-theme")
      .then((initialTheme) => {
        const expectedInitialTheme =
          initialTheme === "light" ? "light" : "dark";

        cy.get('[data-cy="main-html"]').should(
          "have.attr",
          "class",
          expectedInitialTheme
        );

        // Click the theme toggler
        cy.get("[data-cy=theme-toggler]").click();

        // Check the toggled theme
        const toggledTheme = initialTheme === "light" ? "dark" : "light";
        cy.get('[data-cy="main-html"]').should(
          "have.attr",
          "class",
          toggledTheme
        );

        // Click the theme toggler again
        cy.get("[data-cy=theme-toggler]").click();

        // Verify it returns to the initial theme
        cy.get('[data-cy="main-html"]').should(
          "have.attr",
          "class",
          expectedInitialTheme
        );
      });
  });
});
