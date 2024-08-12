describe('CT01 - Visualize os pets disponíveis', () => {
  it('Acesse a home e clique no botão de pets disponiveis', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Ver pets disponíveis para adoção').click();
  })
})

describe('CT02 - Teste de botões do cabeçalho', () => {
  it('Acesse a home e clique nos botões disponíveis no cabeçalhado da página', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
   // cy.contains('a','Ir para Mensagens').click();
    cy.get('.header__message').click();
    cy.get('.header__home').click()
  })
})