describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST','https://adopet-api-i8qu.onrender.com/adotante/login', {
          statusCode:400, }).as('stubPost')
        })

    it('CT07 - Deve preencher os campos de login incorretamente e validar as mensagens de erro', () => {
      cy.login('allangmail.com','xab222cz')
      cy.contains('Por favor, verifique o email digitado').should('be.visible')
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
    })

    it('Deve falhar mesmo com os campos preenchidos corretamente',() => {
      cy.login('allan@gmail.com', 'Senha123')
      cy.wait('@stubPost')
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')


    })

  })