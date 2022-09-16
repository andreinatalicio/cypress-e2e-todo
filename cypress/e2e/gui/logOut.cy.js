/// <reference types="cypress" />

import { generateUserEmail } from "./../../helpers/generateUserEmail";
import { generateUserPassword } from "./../../helpers/generateUserPassword";

describe("Log out to-do app", () => {
  beforeEach(() => {
    cy.visit("/");

    const userEmail = generateUserEmail();
    const userPassword = generateUserPassword();

    cy.gui_signUp(userEmail, userPassword);
  });

  it("should be logged out successfully", () => {
    cy.gui_logout();
    cy.get("strong").contains("Logged out");
    cy.get("h2").contains("Please sign in");
  });
});
