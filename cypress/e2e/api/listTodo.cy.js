/// <reference types="cypress" />

import { dateFormat } from "../../helpers/generateRegex";

describe("List to-do items", () => {
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

  it("should list completed to-do items successfully", () => {
    const status = "completed";

    cy.api_listTodo(status).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.todos[0].id).not.to.equal(null);
      expect(response.body.todos[0].completed_at).to.match(dateFormat);
      expect(response.body.todos[0].created_at).to.match(dateFormat);
      expect(response.body.todos[0].updated_at).to.match(dateFormat);
    });
  });
});

describe("List to-do items", () => {
  let todo;

  beforeEach(() => {
    cy.fixture("todoExample").then((todoExample) => {
      todo = todoExample;

      cy.api_createTodo(todo);
    });
  });

  it("should list uncompleted to-do items successfully", () => {
    const status = "uncompleted";

    cy.api_listTodo(status).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.todos[0].id).not.to.equal(null);
      expect(response.body.todos[0].completed_at).to.equal(null);
      expect(response.body.todos[0].created_at).to.match(dateFormat);
      expect(response.body.todos[0].updated_at).to.match(dateFormat);
    });
  });
});
