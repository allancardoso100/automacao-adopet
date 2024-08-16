describe('Teste de páginas no Adopet', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('CT09 - Deve clicar no botão "Ver pets disponíveis para adoção”', () => {
        cy.get('.button').click()     
       
    });

    it("CT10 - Deve testar os botão de home", ()=>{
       cy.get('.header__home').click()  

    })

    it("CT11 - Deve testar os botão de mensagens", ()=>{
        cy.get('.header__message').click()  
    })

    it("CT12 - Visita a página de /login do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    })

    it("CT13 - Visita a página de /home do Adopet", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })

    it("CT14 - Visita a página de /home do AdoPet e clique no botão “Falar com o responsável”", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click()  
    })
});