describe('Página de cadastro', () => {
  beforeEach(() =>{
      cy.visit('https://adopet-frontend-iota.vercel.app/');
      cy.get('[data-test="register-button"]').click();
  })   
      it('CT00 - Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

        cy.cadastrar('Allan Cardoso','allan@gmail.com', 'Senha123')

  })
})