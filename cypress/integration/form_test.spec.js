describe('Tests card CRUD', () => {

  let count
  let newCardId

  
  before(() => {
    cy.visit('http://localhost:3000')
    cy.get('.idea-card').then(($idea1) => {
      count = $idea1.length
    })
  })
  
  it('Creates and deletes a card', () => {
    cy.server()
    cy.route('POST', '/api/v1/ideas').as('getCard')
    cy.get('.newIdeaButton').click()
    cy.wait('@getCard').then((xhr) => {
      newCardId = xhr.response.body.id
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
      cy.route('PUT', `/api/v1/ideas/${newCardId}`).as('updateCard')
      cy.get('.saveButton').click()
      cy.wait('@updateCard').then(() => {
        cy.get('.idea-card')
          .should('have.length', (count + 1))
      })
      cy.server()
      cy.route('DELETE', `/api/v1/ideas/${newCardId}`).as('deleteCard')
      cy.get(`[data-cy-delete=${newCardId}]`).click()
      cy.wait('@deleteCard').then(() => {
        cy.get('.idea-card')
          .should('have.length', (count))
        })
    })
  })

  it('Updates a card', () => {
    let headerArray = []
    cy.get(`[data-cyheader]`).each((el) => {
      headerArray.push(el.data('cyheader'))
    }).then(() => {
        let headerId = Math.max(...headerArray)
        cy.get(`[data-cyheader=${headerId}]`).click()
        cy.get('input[name="title"]').invoke('val').then((val) => {
          cy.get('input').clear()
          cy.get('input').type('Cypress update title')
          cy.get('.saveButton').click().then(() => {
            cy.get(`[data-cyheader=${headerId}]`).should('have.text', 'Cypress update title').then(() => {
              cy.get(`[data-cyheader=${headerId}]`).click()
              cy.get('input').clear()
              cy.get('input').type(val)
              cy.get('.saveButton').click()
            })
          })
        })
        cy.get(`[data-cyheader=${headerId}]`).click()
        cy.get('textarea[name="body"]').invoke('val').then((val) => {
          cy.get('textarea').clear()
          cy.get('textarea').type('Cypress update text')
          cy.get('.saveButton').click().then(() => {
            cy.get(`[data-cydescription=${headerId}]`).should('have.text', 'Cypress update text').then(() => {
              cy.get(`[data-cyheader=${headerId}]`).click()
              cy.get('textarea').clear()
              cy.get('textarea').type(val)
              cy.get('.saveButton').click()
            })
          })
        })

    })
    
  })

})

  
    
