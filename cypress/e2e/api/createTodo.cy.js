/// <reference types="cypress" />

import { dateFormat } from "../../helpers/generateRegex";

describe("Create to-do item", () => {
  let todo;

  beforeEach(() => {
    cy.fixture("todoExample").then((todoExample) => {
      todo = todoExample;
    });
  });

  it("should create to-do item successfully", () => {
    cy.api_createTodo(todo).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).not.to.equal(null);
      expect(response.body.description).to.equal(todo.todo.description);
      expect(response.body.completed_at).to.equal(null);
      expect(response.body.created_at).to.match(dateFormat);
      expect(response.body.updated_at).to.match(dateFormat);
    });
  });
});

describe("Create to-do item", () => {
  it("should try to create a to-do item without a description", () => {
    const todo = {
      todo: {
        description: "",
      },
    };

    cy.api_createTodo(todo).then((response) => {
      expect(response.status).to.equal(422);
      expect(response.body.description).to.equal("can't be blank");
    });
  });
});
