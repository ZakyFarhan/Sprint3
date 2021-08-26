describe('Test Suite', function () {
    beforeEach(() => {
        cy.bukaUrl()
    });
    it('TC-Pembelian', () => {
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click().should('have.text', 'Samsung galaxy s6')
        cy.get('.col-sm-12 > .btn').click()
        cy.go('back')
        cy.go('back')
        cy.get('#cartur').click()
        // cy.wait(10000)
        // cy.contains('Samsung galaxy s6').should('exist')
        cy.get('.col-lg-1 > .btn').click()
        cy.get('#name').type('docotek')
        cy.get('#country').type('jimbabwew')
        cy.get('#city').type('singkidiw')
        cy.get('#card').type('21412asda')
        cy.get('#month').type('17-Aug')
        cy.get('#year').type('1945')
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.confirm').click()
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
        cy.get('#nava').click()
    });
})