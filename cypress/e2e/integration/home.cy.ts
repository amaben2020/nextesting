describe('Home Page', () => {
  it('should load the home page', () => {
    // must provide full route
    cy.visit('http://localhost:3001/');
    cy.contains('Welcome to Home Page');
  });
});
