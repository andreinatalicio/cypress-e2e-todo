/// <reference types="cypress" />

import { generateUserEmail } from "./../../helpers/generateUserEmail";
import { generateUserPassword } from "./../../helpers/generateUserPassword";

describe("Delete to-do item", () => {
  let description;

  beforeEach(() => {
    cy.visit("/");

    const userEmail = generateUserEmail();
    const userPassword = generateUserPassword();

    cy.gui_signUp(userEmail, userPassword);

    description = "Buy coffee";

    cy.gui_createTodo(description);
  });

  it("should delete to-do item successfully", () => {
    cy.gui_deleteTodo();
    cy.get(".notice strong").contains("To-do successfully deleted.");
    cy.get("h2").contains("Uncompleted (0)");
    cy.get("blockquote").contains("Nothing to do.");
  });
});
