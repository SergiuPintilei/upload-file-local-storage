describe('uploading', () => {
  describe('images', () => {
    it('png file', () => {
      cy.visit('http://localhost:3000/');

      cy.get('[data-cy="upload"]').attachFile('book.png');

      cy.get('[data-cy="submit"]').click();

      cy.url().should('include', '/images');
      cy.get('[alt="book.png"]').should('be.visible');
    });

    it('shows error for jpg file', () => {
      cy.visit('http://localhost:3000/');

      cy.get('[data-cy="upload"]').attachFile('bad.jpeg');

      cy.contains('Incorrect file format. Please upload a .png file.');
      cy.get('[data-cy="submit"]').should('be.disabled');
    });
  });

  describe('csvs', () => {
    it('csv file', () => {
      cy.visit('http://localhost:3000/home/upload/sheets');

      cy.get('[data-cy="upload"]').attachFile('correctOne.csv');

      cy.get('[data-cy="submit"]').click();

      cy.url().should('include', '/sheets');
      cy.contains('120');
    });

    it('shows error for bad format', () => {
      cy.visit('http://localhost:3000/home/upload/sheets');

      cy.get('[data-cy="upload"]').attachFile('cars.csv');
      cy.get('[data-cy="submit"]').click();

      cy.contains(
        'Incorrect file structure. Your .csv file should have only one column named "Total".'
      );
      cy.get('[data-cy="submit"]').should('be.disabled');
    });

    it('shows error for jpg file', () => {
      cy.visit('http://localhost:3000/home/upload/sheets');

      cy.get('[data-cy="upload"]').attachFile('bad.jpeg');

      cy.contains('Incorrect file format. Please upload a .csv file.');
      cy.get('[data-cy="submit"]').should('be.disabled');
    });
  });
});
