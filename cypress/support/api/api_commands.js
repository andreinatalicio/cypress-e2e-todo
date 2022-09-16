Cypress.Commands.add("api_createTodo", (todo) => {
  cy.api({
    failOnStatusCode: false,
    method: "POST",
    url: "/api/v1/todos",
    headers: { "X-Access-Token": Cypress.env("API_TOKEN") },
    body: todo,
  });
});

Cypress.Commands.add("api_getTodo", (id) => {
  cy.api({
    failOnStatusCode: false,
    method: "GET",
    url: `/api/v1/todos/${id}`,
    headers: { "X-Access-Token": Cypress.env("API_TOKEN") },
  });
});

Cypress.Commands.add("api_listTodo", (status) => {
  cy.api({
    method: "GET",
    url: `/api/v1/todos?status=${status}`,
    headers: { "X-Access-Token": Cypress.env("API_TOKEN") },
  });
});

Cypress.Commands.add("api_updateTodo", (id, description) => {
  cy.api({
    failOnStatusCode: false,
    method: "PUT",
    url: `/api/v1/todos/${id}`,
    headers: { "X-Access-Token": Cypress.env("API_TOKEN") },
    body: { todo: { description: description } },
  });
});

Cypress.Commands.add("api_deleteTodo", (id) => {
  cy.api({
    failOnStatusCode: false,
    method: "DELETE",
    url: `/api/v1/todos/${id}`,
    headers: { "X-Access-Token": Cypress.env("API_TOKEN") },
  });
});

Cypress.Commands.add("api_completeTodo", (id) => {
  cy.api({
    failOnStatusCode: false,
    method: "PUT",
    url: `/api/v1/todos/${id}/complete`,
    headers: { "X-Access-Token": Cypress.env("API_TOKEN") },
  });
});

Cypress.Commands.add("api_uncompleteTodo", (id) => {
  cy.api({
    method: "PUT",
    url: `/api/v1/todos/${id}/uncomplete`,
    headers: { "X-Access-Token": Cypress.env("API_TOKEN") },
  });
});
