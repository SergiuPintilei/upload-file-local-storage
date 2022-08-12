describe('routing', () => {
  it('navigates between routes', () => {
    cy.visit('http://localhost:3000/');
    cy.url().should('include', '/home/upload/images');
    cy.contains('Home');

    cy.contains('sheets').click();
    cy.url().should('include', '/home/upload/sheets');

    cy.contains('Images').click();
    cy.url().should('include', '/images');
    cy.contains('There are no uploaded images');

    cy.contains('Sheets').click();
    cy.url().should('include', '/sheets');
    cy.contains('There are no uploaded csv files');
  });

  it('shows not found', () => {
    cy.visit('http://localhost:3000/asd');
    cy.contains('Not Found');
    cy.contains('Go home').click();
    cy.url().should('include', '/home/upload/images');
    cy.contains('Home');
  });
});
