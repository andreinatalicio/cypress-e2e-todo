/// <reference types="cypress" />

import { generateUserEmail } from "./../../helpers/generateUserEmail";
import { generateUserPassword } from "./../../helpers/generateUserPassword";

describe("My Account to-do app", () => {
  let userEmail;

  beforeEach(() => {
    cy.visit("/");

    userEmail = generateUserEmail();
    const userPassword = generateUserPassword();

    cy.gui_signUp(userEmail, userPassword);
  });

  it("should show user account details", () => {
    cy.get('[href="/todos/user/account"]').click();

    cy.get("h2").contains("My Account");
    cy.get("p").contains(`You are currently logged in as ${userEmail}`);
    cy.get("button").contains("Log out");
  });
});
