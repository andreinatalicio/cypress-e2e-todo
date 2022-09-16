/// <reference types="cypress" />

describe("Complete to-do item", () => {
  let todo, id;

  beforeEach(() => {
    cy.fixture("todoExample").then((todoExample) => {
      todo = todoExample;

      cy.api_createTodo(todo).then((response) => {
        id = response.body.id;
      });
    });
  });

  it("should complete to-do item successfully", () => {
    cy.api_completeTodo(id).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

describe("Complete to-do item", () => {
  it("should try to complete non-existent to-do item", () => {
    const id = 99999;
    cy.api_completeTodo(id).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
