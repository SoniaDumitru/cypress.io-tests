/// <reference types="cypress" />

/* 
  โ ๏ธ remember you can run single test by using it.only
  โ ๏ธ some of these challenges require you to start your application 
  in a certain state, e.g. there should be no todo item in list, 
  or there should be only one, etc.
  ๐ก donโt forget about documentation https://docs.cypress.io
*/ 

/*
  ๐ถ challenge #1: create one todo item 
*/
it('creates a todo item', () => {

  cy
    .visit('localhost:3000');
  
});

/* 
  ๐ง challenge #2: check off a todo item 
*/
it('completes a todo item (using .click() command)', () => {

  cy
    .visit('localhost:3000');
  
});

/* 
  ๐ฉ challenge #3: check off a todo item using .check() command (docs at http://on.cypress.io/check)
*/
it('completes a todo item (using .check() command)', () => {

  cy
    .visit('localhost:3000');
  
});

/*
  ๐ค challenge #4: uncheck a completed todo item using .uncheck() 
  command (docs at http://on.cypress.io/uncheck)
*/
it('marks a todo item as not completed (using .uncheck() command)', () => {

  cy
    .visit('localhost:3000');
  
});

/*
  ๐ฆธโโ challenge #5: create todo item with text buy milk, but type the 
  word "milk" first, then move with arrows, then type "buy" and add item
*/
it('creates a todo item with the text "buy milk"', () => {

  cy
    .visit('localhost:3000');
  
});