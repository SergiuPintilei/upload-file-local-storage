describe('images carousel', () => {
  it('uploads 2 pictures and navigates between them', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="upload"]').attachFile('printScreenImage.png');
    cy.get('[data-cy="submit"]').click();

    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="upload"]').attachFile('book.png');
    cy.get('[data-cy="submit"]').click();

    cy.url().should('include', '/images');
    cy.get('[alt="book.png"]').should('be.visible');

    cy.get('[data-cy="next-btn"]').click();
    cy.get('[alt="book.png"]').should('not.exist');
    cy.get('[alt="printScreenImage.png"]').should('be.visible');

    cy.get('[data-cy="next-btn"]').click();
    cy.get('[alt="book.png"]').should('be.visible');
    cy.get('[alt="printScreenImage.png"]').should('not.exist');

    cy.get('[data-cy="prev-btn"]').click();
    cy.get('[alt="printScreenImage.png"]').should('be.visible');
    cy.get('[alt="book.png"]').should('not.exist');

    cy.get('[data-cy="prev-btn"]').click();
    cy.get('[alt="printScreenImage.png"]').should('not.exist');
    cy.get('[alt="book.png"]').should('be.visible');
  });
});
