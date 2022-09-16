/// <reference types="cypress" />

import { generateUserEmail } from "./../../helpers/generateUserEmail";
import { generateUserPassword } from "./../../helpers/generateUserPassword";

describe("Reset password to-do app", () => {
  let userEmail;

  beforeEach(() => {
    cy.visit("/");

    userEmail = generateUserEmail();
    const userPassword = generateUserPassword();

    cy.gui_signUp(userEmail, userPassword);
    cy.gui_logout();
  });

  it("should be reset password successfully", () => {
    cy.gui_resetPassword(userEmail);
    cy.get("strong").contains(
      "You will receive an email with instructions for how to confirm your email address in a few minutes."
    );
    cy.get("h2").contains("Please sign in");
  });
});

describe("Reset password to-do app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should try resetting the password with a non-existent email", () => {
    const userEmail = chance.email();

    cy.gui_resetPassword(userEmail);
    cy.get("strong").contains(
      "You will receive an email with instructions for how to confirm your email address in a few minutes."
    );
    cy.get("h2").contains("Please sign in");
  });
});
