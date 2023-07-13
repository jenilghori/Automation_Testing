/// <reference types="Cypress" />



describe('my first test suite',function()
{
    it('My FirstTest case',function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // seleniuum get hit url in brower,cypress get actis llike find element  of selenium
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        // parent child chaaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('heelo')
        })
       
        cy.get('@productLocator').find('.product').each(($el, index,$list)=>{

            const textveg =$el.find('h4.product-name').text()
            if(textveg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        })

        // assert if log o text is correcty display
        cy.get('.brand').should('have.text','GREENKART')

        // this is to print in log
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())
            
        })
        // const logo=cy.get('.brand')
        // cy.log(cy.get ('.barnd').text())
        // cy.log(logo.text())
      

    })

})