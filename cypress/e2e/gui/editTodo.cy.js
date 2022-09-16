/// <reference types="cypress" />

import { generateUserEmail } from "./../../helpers/generateUserEmail";
import { generateUserPassword } from "./../../helpers/generateUserPassword";

describe("Edit to-do item", () => {
  let description;

  beforeEach(() => {
    cy.visit("/");

    const userEmail = generateUserEmail();
    const userPassword = generateUserPassword();

    cy.gui_signUp(userEmail, userPassword);

    description = "Buy coffee";

    cy.gui_createTodo(description);
  });

  it("should edit to-do item successfully", () => {
    const description = "Buy milk";

    cy.gui_editTodo(description);

    cy.get(".notice strong").contains("To-do successfully updated.");
    cy.get("h2").contains("Uncompleted (1)");
    cy.get("tbody").contains(description);
  });

  it("should try to edit a to-do item without a description", () => {
    cy.gui_createTodo();
    cy.get(".notice strong").contains("Please, review 1 error in this form:");
    cy.get(".notice code").contains("Description: can't be blank");
  });
});
