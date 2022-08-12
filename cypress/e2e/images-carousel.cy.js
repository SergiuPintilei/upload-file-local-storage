describe('images carousel', () => {
  it('uploads 2 pictures and navigates between them', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="image-upload"]').attachFile('printScreen.png');
    cy.get('[data-cy="image-submit"]').click();

    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="image-upload"]').attachFile('book.png');
    cy.get('[data-cy="image-submit"]').click();

    cy.url().should('include', '/images');
    cy.get('[alt="book.png"]').should('be.visible');

    cy.get('[data-cy="next-btn"]').click();
    cy.get('[alt="book.png"]').should('not.exist');
    cy.get('[alt="printScreen.png"]').should('be.visible');

    cy.get('[data-cy="next-btn"]').click();
    cy.get('[alt="book.png"]').should('be.visible');
    cy.get('[alt="printScreen.png"]').should('not.exist');

    cy.get('[data-cy="prev-btn"]').click();
    cy.get('[alt="printScreen.png"]').should('be.visible');
    cy.get('[alt="book.png"]').should('not.exist');

    cy.get('[data-cy="prev-btn"]').click();
    cy.get('[alt="printScreen.png"]').should('not.exist');
    cy.get('[alt="book.png"]').should('be.visible');
  });
});
