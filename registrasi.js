describe('Test Suite', function () {
    beforeEach(() => {
        cy.bukaUrl()
    });
    it('TC-Pembelian', () => {
        cy.get('#signin2').click()
        cy.contains('Sign up').should('exist')
        cy.get('#sign-username').type('fasdasd1')
        cy.get('#sign-password').type('12345')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    });
})