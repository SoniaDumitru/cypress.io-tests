/// <reference types="cypress" />

/* 
  â ï¸ remember you can run single test by using it.only
  â ï¸ some of these challenges require you to start your application 
  in a certain state, e.g. there should be checked todo item in list, 
  or there should be only one, etc.
  ð¡ find common assertions https://docs.cypress.io/guides/references/assertions.html#Common-Assertions
*/ 

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

/*
  ð¶ challenge #1: check that there are 4 elements on page
  â ï¸ start this test with 0 items in list
*/
it('should create 4 elements', () => {
  
});

/*
  ð¦ challenge #2: test that toggle on todo item is checked, 
  but use different method than in video. check documentation: 
  https://docs.cypress.io/guides/references/assertions.html#State
  â ï¸ start this test with 1 unchecked item
*/
it('has a checked todo item', () => {
  
});

/* 
  ð¨ challenge #3: test that todo does not exist after it is deleted.
  you will find the right assertion in the documentation
*/
it('should delete todo item and check it does not exist', () => {
  
});

/* 
  ð¤ challenge #4: check that the footer link has the text "Evan You". 
  You can either use .should() command, or .contains() command (youâll 
  find it in docs!)
*/
it('should check for text "Evan You"', () => {
  
});

/* 
  ð¦¸ââï¸ challenge #5: check the color of heading. the color code is rgb(184, 63, 69)
*/
it('should check heading color', () => {
  
});

/*
  ð¥ challenge #6: check that there are more than 4 elements on page (the assertion 
  for "greater than" is "gte" or "least")
  â ï¸ start this test with at least 5 items in todo list
*/
it('should have more than 4 elements', () => {
  
});