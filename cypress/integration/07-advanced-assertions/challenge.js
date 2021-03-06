/// <reference types="cypress" />

/* 
  β οΈ remember you can run single test by using it.only
  π I encourage you to use cypress documentation, especially https://on.cypress.io/assertions
*/ 

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

/*
  πΆ challenge #1: check the text using .then() command
*/
it('Checks a text todo item', () => {

  cy
    .get('.todo');
  
});

/*
  π¦ challenge #2: check the whole todo list using .then() command
  β οΈ make sure you have some todo items in the list before you start this test
*/
it('Checks a texts of all todo items', () => {

  cy
    .get('.todo');
  
});

/* 
  π¨ challenge #3: check texts of only first and last todo item using .then() 
  command. try to use only a single .then() command if you can
  β οΈ make sure you have some todo items in the list before you start this test
*/
it('Checks a texts of first and last todo items', () => {

  cy
    .get('.todo');
  
});

/* 
   π€ challenge #4: examine the example from video. try to look more 
   into why the test is failing and what can we do to make it pass   
   β οΈ make sure you have a todo item with the text "wash dishes" but 
   it is not in the first position
*/
it('Has first todo item with text "wash dishes"', () => {

  cy
    .get('.todo')
    .eq(0)
    .should('contain.text', 'wash dishes');
  
});

/* 
  π¦ΈββοΈ challenge #5: check texts of two items in todo list. start test 
  with no todos in list and add them while test is running. use this 
  test to examine how using .should() command works when using function
*/
it('Have two todo items with particular texts', () => {

  cy
    .get('.todo', {timeout: 30000})
    .should( items => {

      // check item 1
      // check item 2

    });
  
});