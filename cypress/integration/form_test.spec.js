describe('Creates and saves new card', () => {
  
  it('Click New Idea button', () => {
    cy.visit('http://localhost:3000')
    cy.get('.newIdeaButton').click()
    cy.focused()
    .should('have.class', 'new-title')

  })

  it('Accepts input', () => {
    const typedTitle = 'Great Idea!'
    const typedBody = 'The most Tremendous Idea Ever in the History of Ideas'
    cy.get('.new-title')
      .type(typedTitle)
      .should('have.value', typedTitle)
    cy.get('.idea-body')
      .type(typedBody)
      .should('have.value', typedBody)
  })
} )

  
    
