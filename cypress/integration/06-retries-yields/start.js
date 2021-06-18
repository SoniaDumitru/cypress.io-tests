/// <reference types="cypress" />

beforeEach( () => {
  cy
    .visit('localhost:3000');
});

it('Should have todo item with text "create a list of todos"', () => {
// parent -> child -> hybrid 
  cy
    .get('.todo')
    .should('be.visible')
    // .contains('create a list of todos');
// contains can act as parent and child
  cy
    .contains('todos');
});

it('Should have todo item with text "buy milk"', () => {
  cy
    .get('.todo-list')
    .should('have.length', 2)
    .find('li')
    .eq(0)
    .contains('buy milk');
});

it('Should have one todo item', () => {
  cy
    .get('.todo', {timeout: 10000})
    .should('have.length', 1);
});