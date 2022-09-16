/// <reference types="cypress" />

describe("Delete to-do item", () => {
  let todo, id;

  beforeEach(() => {
    cy.fixture("todoExample").then((todoExample) => {
      todo = todoExample;

      cy.api_createTodo(todo).then((response) => {
        id = response.body.id;
      });
    });
  });

  it("should delete to-do item successfully", () => {
    cy.api_deleteTodo(id).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

describe("Delete to-do item", () => {
  it("should try to delete a non-existent to-do item", () => {
    const id = 99999;
    cy.api_deleteTodo(id).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
