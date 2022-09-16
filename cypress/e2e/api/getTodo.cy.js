/// <reference types="cypress" />

import { dateFormat } from "../../helpers/generateRegex";

describe("Get to-do item", () => {
  let todo, id;

  beforeEach(() => {
    cy.fixture("todoExample").then((todoExample) => {
      todo = todoExample;

      cy.api_createTodo(todo).then((response) => {
        id = response.body.id;
      });
    });
  });

  it("should get to-do item successfully", () => {
    cy.api_getTodo(id).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(id);
      expect(response.body.description).to.equal(todo.todo.description);
      expect(response.body.completed_at).to.equal(null);
      expect(response.body.created_at).to.match(dateFormat);
      expect(response.body.updated_at).to.match(dateFormat);
    });
  });
});

describe("Get to-do item", () => {
  it("should try to get a non-existent to-do item", () => {
    const id = 999;
    cy.api_getTodo(id).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
