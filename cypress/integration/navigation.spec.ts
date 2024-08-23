describe("Sidebar Navigation", () => {
  it("Test hi", () => {
    cy.visit("http://localhost:3000/");
    // cy.get("title").contains("Welcome To Next.Js!");
    cy.get("h1").contains("Welcome to Prolong APP");
  });
});
context("mobile resolution", () => {
  beforeEach(() => {
    cy.viewport("iphone-8");
  });

  function isInViewport(el: string) {
    cy.get(el).then(($el) => {
      // navigation should cover the whole screen
      const rect = $el[0].getBoundingClientRect();
      expect(rect.right).to.be.equal(rect.width);
      expect(rect.left).to.be.equal(0);
    });
  }
  function isNotInViewport(el: string) {
    cy.get(el).then(($el) => {
      // naviation should be outside of the screen
      const rect = $el[0].getBoundingClientRect();
      expect(rect.left).to.be.equal(-rect.width);
      expect(rect.right).to.be.equal(0);
    });
  }

  it("toggles sidebar navigation by clicking the menu icon", () => {
    // wait for animation to finish
    cy.wait(500);
    isNotInViewport("nav");

    // open mobile navigation
    cy.get("img[alt='open menu']").click();

    // wait for animation to finish
    cy.wait(500);
    isInViewport("nav");

    // check that all links are rendered
    cy.get("nav").find("a").should("have.length", 5);

    // Support button should be rendered but Collapse button not
    cy.get("nav").contains("Support").should("exist");
    cy.get("nav").contains("Collapse").should("not.be.visible");

    // close mobile navigation and check that it disappears
    cy.get("img[alt='close menu']").click();
    cy.wait(500);
    isNotInViewport("nav");
  });
});
export {};
