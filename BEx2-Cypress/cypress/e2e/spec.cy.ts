describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Form with Validations')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Test Last Name required validation', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:4200');
    cy.get('form-validation > .jumbotron').should('be.visible');
    cy.get('form-validation .form-control').eq(0)
      .click()
      .clear()
      .type('Vignesh');

    cy.get('form-validation .form-control').eq(1)
      .click()
      .clear()
      .type('Nat')
      .clear();

      cy.get('form-validation .form-control').eq(0)
      .click()
    

    cy.get('.alert').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
})
