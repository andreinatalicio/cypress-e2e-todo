/// <reference types="cypress" />

import { generateUserEmail } from "./../../helpers/generateUserEmail";
import { generateUserPassword } from "./../../helpers/generateUserPassword";

describe("Create to-do item", () => {
  beforeEach(() => {
    cy.visit("/");

    const userEmail = generateUserEmail();
    const userPassword = generateUserPassword();

    cy.gui_signUp(userEmail, userPassword);
  });

  it("should create to-do item successfully", () => {
    const description = "Buy coffee";

    cy.gui_createTodo(description);
    cy.get(".notice strong").contains("To-do successfully created.");
    cy.get("h2").contains("Uncompleted (1)");
    cy.get("tbody").contains(description);
  });

  it("should try to create a to-do item without a description", () => {
    cy.gui_createTodo();
    cy.get(".notice strong").contains("Please, review 1 error in this form:");
    cy.get(".notice code").contains("Description: can't be blank");
  });
});
