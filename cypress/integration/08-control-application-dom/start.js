// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');
});

it.only('has a delete icon (solution 1)', () => {
  cy.get('.todo').trigger('mouseover')
  cy.get('.destroy').should('be.visible')
  cy.get('.todo').trigger('mouseout')
});



it('has a delete icon (solution 2)', () => {

})


it('has a link to application author', () => {
  cy
    .contains('')
    .click();
  
});
