describe('Testes na Página principal', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    
    it('deve clicar no botão ‘Ver pets disponíveis para adoção”', () => {
        //eq verifica igualdade
        cy.title().should('eq', 'AdoPet');
    });
});