/// <reference types="cypress" />

import { generateUserEmail } from "./../../helpers/generateUserEmail";
import { generateUserPassword } from "./../../helpers/generateUserPassword";

describe("Uncomplete to-do item", () => {
  let description;

  beforeEach(() => {
    cy.visit("/");

    const userEmail = generateUserEmail();
    const userPassword = generateUserPassword();

    cy.gui_signUp(userEmail, userPassword);

    description = "Buy coffee";

    cy.gui_createTodo(description);
    cy.gui_completeTodo();
  });

  it("should uncomplete to-do item successfully", () => {
    cy.gui_uncompleteTodo();
    cy.get(".notice strong").contains("The to-do has become uncompleted.");
    cy.get("h2").contains("Uncompleted (1)");
    cy.get("tbody").contains(description);
    cy.get("button").contains("Complete");
  });
});
