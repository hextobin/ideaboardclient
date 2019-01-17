describe('Tests card CRUD', () => {

  let count = 0 
  
  before(() => {
    cy.visit('http://localhost:3000')
    cy.get('.idea-1').then(($idea1) => {
      count = $idea1.length
    })
  })

  it('Creates a new card', () => {
    cy.server()
    cy.route('POST', '/api/v1/ideas').as('getCard')
    cy.get('.newIdeaButton').click()
    cy.wait('@getCard').then(function(xhr){
      console.log(xhr)
    })
    cy.focused()
    .should('have.class', 'new-title')
    const typedTitle = 'Test Idea Title (Cypress)'
    const typedBody = 'Test Idea Body Text (Cypress)'
    cy.get('.new-title')
      .type(typedTitle)
      .should('have.value', typedTitle)
    cy.get('.idea-body')
      .type(typedBody)
      .should('have.value', typedBody)
    cy.get('.saveButton').click()
    cy.get('.idea-1')
    .should('have.length', (count + 1))
  })

  
})

  
    
