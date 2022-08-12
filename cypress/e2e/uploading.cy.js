describe('uploading', () => {
  describe('images', () => {
    it('png file', () => {
      cy.visit('http://localhost:3000/');

      cy.get('[data-cy="image-upload"]').attachFile('book.png');

      cy.get('[data-cy="image-submit"]').click();

      cy.url().should('include', '/images');
      cy.get('[alt="book.png"]').should('be.visible');
    });

    it('shows error for jpg file', () => {
      cy.visit('http://localhost:3000/');

      cy.get('[data-cy="image-upload"]').attachFile('bad.jpeg');

      cy.contains('Incorrect file format. Please upload a .png file.');
      cy.get('[data-cy="image-submit"]').should('be.disabled');
    });
  });

  describe('csvs', () => {
    it('csv file', () => {
      cy.visit('http://localhost:3000/home/upload/sheets');

      cy.get('[data-cy="csv-upload"]').attachFile('cars.csv');

      cy.get('[data-cy="csv-submit"]').click();

      cy.url().should('include', '/sheets');
      cy.contains('cars.csv');
    });

    it('shows error for jpg file', () => {
      cy.visit('http://localhost:3000/home/upload/sheets');

      cy.get('[data-cy="csv-upload"]').attachFile('bad.jpeg');

      cy.contains('Incorrect file format. Please upload a .csv file.');
      cy.get('[data-cy="csv-submit"]').should('be.disabled');
    });
  });
});
