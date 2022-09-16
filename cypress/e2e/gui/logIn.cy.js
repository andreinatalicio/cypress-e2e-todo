/// <reference types="cypress" />

import { generateUserEmail } from "./../../helpers/generateUserEmail";
import { generateUserPassword } from "./../../helpers/generateUserPassword";

describe("Log in to-do app", () => {
  let userEmail, userPassword;

  beforeEach(() => {
    cy.visit("/");

    userEmail = generateUserEmail();
    userPassword = generateUserPassword();

    cy.gui_signUp(userEmail, userPassword);
    cy.gui_logout();
  });

  it("should be login successfully", () => {
    cy.gui_login(userEmail, userPassword);
    cy.get("strong").contains("Logged in");
    cy.get("h2").contains("Uncompleted (0)");
  });

  it("should try to log in with an incorrect email", () => {
    const userEmail = chance.email();

    cy.gui_login(userEmail, userPassword);
    cy.get("strong").contains("Incorrect email or password.");
  });

  it("should try to log in with an incorrect password", () => {
    const userPassword = chance.string({ length: 12 });

    cy.gui_login(userEmail, userPassword);
    cy.get("strong").contains("Incorrect email or password.");
  });
});
