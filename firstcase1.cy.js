describe('This is our first test suit', () =>{
    it('this is our first test case', ()=>{
      
        
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('br')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length', 2)
        

    })
     it('this is our 2nd test case', ()=>{
})




})