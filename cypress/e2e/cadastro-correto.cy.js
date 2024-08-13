describe('Página de cadastro', () => {
  it('CT00 - Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Allan Cardoso');
    cy.get('[data-test="input-email"]').type('allan@gmail.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})