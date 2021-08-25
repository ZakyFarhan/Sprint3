describe('Test Suite', function () {
    it('TC-Login',function(){
        //cy.visit untuk kunjungi url
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('#et_pb_contact_name_0').type('Zaky').should('have.value','Zaky')
        cy.get('#et_pb_contact_email_0').type('zakyfarhan114@gmail.com').should('have.value', 'zakyfarhan114@gmail.com')
        cy.contains('Email Me!').click()
        
    }),
    it('TC-radioButton', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="male"]').click().should('have.value', 'male')
    }),
    it('TC-checkBoxes', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="Bike"]').click().should('have.value', 'Bike')
    }),
    it('TC-dropDown', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select('Audi').should('have.value', 'audi')
    }),
    it('TC-btnClickMe', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
        cy.get('.entry-title').should('have.text','Button success')
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})