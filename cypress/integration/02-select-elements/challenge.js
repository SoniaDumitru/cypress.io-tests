/// <reference types="cypress" />
/* 

  โ ๏ธ before you start this challenge, please create at least one todo item
  ๐ก there is a LOT that can be learned about selectors, I recommend
  looking into W3Schools https://www.w3schools.com/cssref/css_selectors.asp

*/

it('gets element on page', () => {

  cy
    .visit('localhost:3000');

  // ๐ถ challenge #1: select a todo element using tag "li" (list item)
  cy
    .get('');
  
  // ๐ฆ challenge #2: select a todo element using class
  cy
    .get('');

  // ๐จ challenge #3: select checkbox inside todo element by using class
  cy
    .get('');

  // ๐ค challenge #4: select checkbox inside todo element by using "checkbox" attribute
  cy
    .get('');

  // ๐ฆธโโ๏ธ challenge #5: select a todo element by relation (complete selector, donโt delete "ul")
  cy
    .get('ul');
   
});