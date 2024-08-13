describe('CT01 - Visualize os pets disponíveis', () => {
  it('Acesse a home e clique no botão de pets disponiveis', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Ver pets disponíveis para adoção').click();
  })
})

describe('CT02 - Teste de botões do cabeçalho', () => {
  it('Acesse a home e clique nos botões disponíveis no cabeçalhado da página', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__message').click();
    cy.get('.header__home').click()
  })
})

describe('CT03 - Visite a página de login do Adopet', () => {
  it('Acesse a home e clique no botão Fazer Login', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Fazer login').click();
  })
})

describe('CT04 - Visualize os pets disponíveis e fale com responsavel', () => {
  it('Acesse a home, clique no botão de pets disponiveis e fale com responsavel', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Ver pets disponíveis para adoção').click();
    cy.contains('a','Falar com responsável').click();
  })
})



//<a class="card__contact" aria-label="Falar com responsável" href="/mensagem">Falar com responsável</a>