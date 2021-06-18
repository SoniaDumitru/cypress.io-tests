/// <reference types="cypress" />
// look into common assertions https://docs.cypress.io/guides/references/assertions.html#Common-Assertions

beforeEach( () => {
  cy
    .visit('localhost:3000');
});

// it('Adds one item', () => {
//   cy
//     .get('.new-todo')
//     .type('buy milk{enter}')
//   cy
//     .get('.todo')
//     .should('be.visible')
// });

// it.only('Adds two items', () => {
//     cy
//       .get('.new-todo')
//       .type('buy milk{enter}')
//     cy
//       .get('.todo')
//       .should('be.visible')
//     cy
//       .get('.todo')
//       .should('have.length', 2)
// });

it.only('Marks item as completed', () => {
  cy
    .get('.new-todo')
    .type('nuy milk{enter}');
  cy
    .get('.toggle')
    .click({ multiple: true });
  cy  
    .get('.todo')
    .should('have.class', 'completed')
    .find('.toggle')
});