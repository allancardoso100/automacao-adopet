describe('Visualize os pets disponíveis', () => {
  it('Acesse a home e clique no botão de pets disponiveis', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Ver pets disponíveis para adoção').click();
  })
})