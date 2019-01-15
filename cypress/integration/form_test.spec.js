describe('Creates and saves new card', () => {

  it('Click New Idea button', () => {
    cy.visit('http://localhost:3000')
    const count = Cypress.$('idea-1').length
    console.log(count)
    cy.get('.newIdeaButton').click()
    cy.focused()
    .should('have.class', 'new-title')

  })

  it('Accepts input', () => {
    const typedTitle = 'Test Idea Title (Cypress)'
    const typedBody = 'Test Idea Body Text (Cypress)'
    cy.get('.new-title')
      .type(typedTitle)
      .should('have.value', typedTitle)
    cy.get('.idea-body')
      .type(typedBody)
      .should('have.value', typedBody)
  })

  it('Saves card', () => {
    cy.get('.saveButton').click()
  })

  it('Counts number of new cards', () => {

  })
} )

  
    
