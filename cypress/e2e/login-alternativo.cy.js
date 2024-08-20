describe('Pagina de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__message').click();
        //No caso acima, foi utilizado o cy.get, pois o botão não tem um texto VISÍVEL na página para utilizar o contains
    })
    
    it('CT08 - Deve acessar a página de login atraves do ícone de mensagem da home', () => {

        cy.login('allan@gmail.com', 'Senha123')
        
    })
})