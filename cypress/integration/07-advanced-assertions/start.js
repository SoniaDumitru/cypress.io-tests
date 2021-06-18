/// <reference types="cypress" />

beforeEach( () => {
  cy
    .visit('localhost:3000');
});

it('Checks text of todo item', () => {

  cy
    .get('.todo')
    .then( item => {
      expect(item).to.contain('buy milk')
    })
  
});

it('Checks texts of all todo items', () => {

  cy
    .get('.view')
    .then(todos => {
      expect(todos[0]).to.contain.text('buy milk')
      expect(todos[1]).to.contain.text('wash dishes')
    })
});

it('Has first todo item with text "wash dishes"', () => {

  cy
    .get('.view')
    .eq(1)
    .should('contain.text', 'create todos list');
  
});

it.only('Has first todo item with text "wash dishes" (solution 2)', () => {

  cy
    .get('.todo')
    .then(todos => {
      expect(todos[1]).to.contain('create todos list')
    })
  
});