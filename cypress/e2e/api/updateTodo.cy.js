/// <reference types="cypress" />

describe("Update to-do item", () => {
  let todo, id;

  beforeEach(() => {
    cy.fixture("todoExample").then((todoExample) => {
      todo = todoExample;

      cy.api_createTodo(todo).then((response) => {
        id = response.body.id;
      });
    });
  });

  it("should update to-do item successfully", () => {
    const description = "Buy milk";

    cy.api_updateTodo(id, description).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("should try to update a to-do item without a description", () => {
    const description = "";

    cy.api_updateTodo(id, description).then((response) => {
      expect(response.status).to.equal(422);
      expect(response.body.description).to.equal("can't be blank");
    });
  });
});

describe("Update to-do item", () => {
  it("should try to update a non-existent to-do item", () => {
    const id = 99999;
    const description = "Buy milk";

    cy.api_updateTodo(id, description).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
