/// <reference types="cypress" />

import { generateUserEmail } from "./../../helpers/generateUserEmail";
import { generateUserPassword } from "./../../helpers/generateUserPassword";

describe("Complete to-do item", () => {
  let description;

  beforeEach(() => {
    cy.visit("/");

    const userEmail = generateUserEmail();
    const userPassword = generateUserPassword();

    cy.gui_signUp(userEmail, userPassword);

    description = "Buy coffee";

    cy.gui_createTodo(description);
  });

  it("should complete to-do item successfully", () => {
    cy.gui_completeTodo();
    cy.get(".notice strong").contains("The to-do has become completed.");
    cy.get("h2").contains("Completed (1)");
    cy.get("tbody").contains(description);
    cy.get("button").contains("Uncomplete");
  });
});
