describe('Dashboard Access', () => {
  it('redirects to home if no toks cookie', () => {
    cy.clearCookies();
    cy.visit('http://localhost:3002/dashboard');
    cy.url().should('eq', 'http://localhost:3002/'); // redirected
  });

  it('allows access with valid toks cookie', () => {
    cy.setCookie('toks', 'my-toks-token');
    cy.visit('http://localhost:3002/dashboard');
    cy.contains('Dashboard'); // or whatever you expect on that page
  });
});
