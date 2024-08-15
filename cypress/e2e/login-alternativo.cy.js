describe('Pagina de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__message').click();
        //No caso acima, foi utilizado o cy.get, pois o botão não tem um texto VISÍVEL na página para utilizar o contains
    })
    it('CT08 - Deve acessar a página de login atraves do ícone de mensagem da home', () => {
        cy.get('[data-test="input-loginEmail"]').type('allan@gmail.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    })
})