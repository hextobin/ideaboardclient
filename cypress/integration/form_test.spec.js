describe('Tests card CRUD', () => {

  let count
  let newCardId
  
  before(() => {
    cy.visit('http://localhost:3000')
    cy.get('.idea-card').then(($idea1) => {
      count = $idea1.length
    })
  })

  it('Creates a new card', () => {
    cy.server()
    cy.route('POST', '/api/v1/ideas').as('getCard')
    cy.get('.newIdeaButton').click()
    cy.wait('@getCard').then((xhr) => {
      newCardId = xhr.response.body.id
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
    cy.get('.idea-card')
      .should('have.length', (count + 1))
  })

  it('Deletes a card', () => {
    cy.server()
    cy.route('DELETE', `/api/v1/ideas/${newCardId}`).as('deleteCard')
    cy.get(`[data-cy=${newCardId}]`).click()
    cy.wait('@deleteCard').then(() => {
      cy.get('.idea-card')
        .should('have.length', (count))
    })
  })
})

  
    
