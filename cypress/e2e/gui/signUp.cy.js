/// <reference types="cypress" />

import { generateUserEmail } from "./../../helpers/generateUserEmail";
import { generateUserPassword } from "./../../helpers/generateUserPassword";

describe("Sign up to-do app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be signed up successfully", () => {
    const userEmail = generateUserEmail();
    const userPassword = generateUserPassword();

    cy.gui_signUp(userEmail, userPassword);
    cy.get("strong").contains(
      "Congratulations, your account has been successfully created."
    );
  });

  it("should try to sign up with a too short password", () => {
    const userEmail = generateUserEmail();
    const userPassword = chance.string({ length: 5 });

    cy.gui_signUp(userEmail, userPassword);
    cy.get(".notice strong").contains("Please, review 2 errors in this form:");
    cy.get(".notice code")
      .first()
      .contains("Password: is too short (minimum: 6)");
    cy.get(".notice code")
      .last()
      .contains("Password confirmation: is too short (minimum: 6)");
  });

  it("should try to sign up with a different confirmation password", () => {
    const userEmail = generateUserEmail();
    const userPassword = generateUserPassword();
    const userConfirmationPassword = chance.string({ length: 12 });

    cy.gui_signUp(userEmail, userPassword, userConfirmationPassword);
    cy.get(".notice strong").contains("Please, review 1 error in this form:");
    cy.get(".notice code").contains(
      "Password confirmation: doesn't match password"
    );
  });
});

describe("Sign up to-do app", () => {
  let userEmail, userPassword;

  beforeEach(() => {
    cy.visit("/");

    userEmail = generateUserEmail();
    userPassword = generateUserPassword();

    cy.gui_signUp(userEmail, userPassword);
    cy.gui_logout();
  });

  it("should try to sign up with an already used email", () => {
    cy.gui_signUp(userEmail, userPassword);
    cy.get(".notice strong").contains("Please, review 1 error in this form:");
    cy.get(".notice code").contains("Email: has already been taken");
  });
});
