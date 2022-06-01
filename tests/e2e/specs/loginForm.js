describe("Login Form Validation", () => {
  // Scenario 1 [Email doesn't exist]
  it("should validate that the error message 'your email and/or password are incorrect' shows", () => {
    cy.visit("/");

    cy
      .get("form")
      .within(() => {
        cy.get("[type=email]").type("ahmed@example.com");
        cy.get("[type=password]").type("123AAA");
      })
      .submit();

    cy
      .get(".errorField")
      .should("have.text", "Your email and/or password are incorrect");
  });

  // Scenario 2 [Wrong password]
  it("should validate that the error message 'your email and/or password are incorrect' shows", () => {
    cy.visit("/");

    cy
      .get("form")
      .within(() => {
        cy.get("[type=email]").clear().type("mohamed@instabug.com");
        cy.get("[type=password]").clear().type("B12345678");
      })
      .submit();
    cy
      .get(".errorField")
      .should("have.text", "Your email and/or password are incorrect");
  });

  // Scenario 3 [Correct credentials]
  it("should validate that the browser will redirect to the welcome page", () => {
    cy.visit("/");

    cy.get("form")
      .within(() => {
        cy.get("[type=email]").clear().type("mohamed@instabug.com");
        cy.get("[type=password]").clear().type("A12345678");
      })
      .submit();
  });

  // Scenario 4 [Not valid email]
  it("should validate that the red validation message will appear & the text box border will be red", () => {
    cy.visit("/");

    cy.get("form")
      .within(() => {
        cy
          .get("[type=email]")
          .clear()
          .type("ddd")
          .blur()
          .should("have.css", "border-color", "rgb(242, 66, 32)");
        cy
          .get(".errorMessage.email")
          .should("have.css", "color", "rgb(242, 66, 32)");
      })
      .submit();
  });
});
