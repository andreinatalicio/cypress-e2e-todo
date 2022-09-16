Cypress.Commands.add("gui_login", (userEmail, userPassword) => {
  cy.get("#user_email").type(userEmail);
  cy.get("#user_password").type(userPassword);
  cy.get(`[value="Log in"]`).click();
});

Cypress.Commands.add("gui_logout", () => {
  cy.get('[href="/todos/user/account"]').click();
  cy.get("button").contains("Log out").click();
});

Cypress.Commands.add(
  "gui_signUp",
  (userEmail, userPassword, userConfirmationPassword) => {
    cy.get('[href="/users/sign_up"]').click();
    cy.get("#user_email").type(userEmail);
    cy.get("#user_password").type(userPassword);
    if (userConfirmationPassword === undefined) {
      cy.get("#user_password_confirmation").type(userPassword);
    } else {
      cy.get("#user_password_confirmation").type(userConfirmationPassword);
    }
    cy.get(`[value="Sign up"]`).click();
  }
);

Cypress.Commands.add("gui_resetPassword", (userEmail) => {
  cy.get('[href="/users/reset_password"]').click();
  cy.get("#user_email").type(userEmail);
  cy.get(`[value="Send me reset password instructions"]`).click();
});

Cypress.Commands.add("gui_createTodo", (description) => {
  cy.get('[href="/todos/new"]').click();

  if (description === undefined) {
    cy.get(`[value="Create"]`).click();
  } else {
    cy.get("#todo_description").type(description);
    cy.get(`[value="Create"]`).click();
  }
});

Cypress.Commands.add("gui_editTodo", (description) => {
  cy.get("button").contains("Edit").click();
  cy.get("#todo_description").clear().type(description);
  cy.get(`[value="Update"]`).click();
});

Cypress.Commands.add("gui_deleteTodo", () => {
  cy.get("button").contains("Delete").click();
});

Cypress.Commands.add("gui_completeTodo", () => {
  cy.get("button").contains("Complete").click();
});

Cypress.Commands.add("gui_uncompleteTodo", () => {
  cy.get("button").contains("Uncomplete").click();
});
