describe('User profile', () => {
  it('renders user profile', () => {
    cy.visit('/user/firstcontributions-bot')
    cy.get('.profile').should('contain', 'firstcontributions-bot')
  })

  it('renders channel number, name, logo and quality', () => {
    cy.get('[data-name=channel]').eq(100).find('[data-name=channel-number]')
    cy.get('[data-name=channel]').eq(100).find('[data-name=channel-logo]')
    cy.get('[data-name=channel]').eq(100).find('[data-name=channel-name]')
    cy.get('[data-name=channel]').eq(100).find('[data-name=channel-quality]')
  })
})
