describe('Delivery App', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3002')
  })

  it('frontpage can be opened', () => {
    cy.contains('Ordenes')
  })

  it('adding new order', () => {
    cy.get('.MuiSelect-select').contains('Pendiente')
    cy.get('[name="pickupLat"]').type('10')
    cy.get('[name="pickupLon"]').type('10')
    cy.get('[name="dropoffLat"]').type('20')
    cy.get('[name="dropoffLon"]').type('20')
    cy.get('[name="zoneId"]').type('6116')
    cy.contains('6116').last()
    cy.contains('Crear orden').click()
  })
})