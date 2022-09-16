/// <reference types="cypress" />

describe("Uncomplete to-do item", () => {
  let todo, id;

  beforeEach(() => {
    cy.fixture("todoExample").then((todoExample) => {
      todo = todoExample;

      cy.api_createTodo(todo).then((response) => {
        id = response.body.id;

        cy.api_completeTodo(id);
      });
    });
  });

  it("should uncomplete to-do item successfully", () => {
    cy.api_uncompleteTodo(id).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

describe("Uncomplete to-do item", () => {
  it("should try to uncomplete a non-existent to-do item", () => {
    const id = 99999;
    cy.api_getTodo(id).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
