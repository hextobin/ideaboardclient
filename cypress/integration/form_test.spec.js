describe('Creates and saves new card', () => {

  let count = 0 
  
  before(() => {
    cy.visit('http://localhost:3000')
    cy.get('.idea-1').then(($idea1) => {
      count = $idea1.length
    })
  })

  it('Click New Idea button', () => {
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
    cy.get('.idea-1')
      .should('have.length', (count + 1))
  })
} )

  
    
