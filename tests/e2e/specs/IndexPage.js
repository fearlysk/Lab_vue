// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the index page', () => {
    cy.visit('/');
    cy.contains('h1');
  });
});
