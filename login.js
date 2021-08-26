describe('Test Suite', function () {
    beforeEach(() => {
        cy.bukaUrl()
    });
    it('TC-Pembelian', () => {
        cy.get('#login2').click()
        cy.contains('Log in').should('exist')
        cy.get('#loginusername').type('fasdasd1')
        cy.get('#loginpassword').type('12345')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    });
})