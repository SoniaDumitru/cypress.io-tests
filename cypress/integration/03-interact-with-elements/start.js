/// <reference types="cypress" />

it('adds a new todo item', () => {
    cy.visit('localhost:3000');
});

it('completes todo item', () => {
    cy.get('.new-todo').type('go running{enter}');
});

it('deletes todo item', () => {
    cy.visit('localhost:3000');
    cy.get('.destroy').click({ multiple: true, force: true });
});