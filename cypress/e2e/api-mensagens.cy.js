describe('Api Adopet',() => {
   
    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',

            url: 'https://adopet-api-i8qu.onrender.com/mensagem/b6b18a50-f5d6-459e-acf9-87dd290220ef',

            headers: Cypress.env()

        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})


