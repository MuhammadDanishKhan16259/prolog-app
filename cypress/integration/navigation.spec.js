describe("Sidebar Navigation", () => {
  it("Test hi", () => {
    cy.visit("http://localhost:3000/");
    // cy.get("title").contains("Welcome To Next.Js!");
    cy.get("h1").contains("Welcome to Prolong APP");
  });
});
