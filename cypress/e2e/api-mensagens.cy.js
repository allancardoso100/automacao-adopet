describe('Api Adopet',() => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNmIxOGE1MC1mNWQ2LTQ1OWUtYWNmOS04N2RkMjkwMjIwZWYiLCJhZG9wdGVyTmFtZSI6IkFsbGFuIENhcmRvc28iLCJpYXQiOjE3MjQ5NDc5ODAsImV4cCI6MTcyNTIwNzE4MH0.zuEh_-2LSWLM-V2bdxhCwsG60BoKYVK4zsGow6oKLpI`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',

            url: 'https://adopet-api-i8qu.onrender.com/mensagem/b6b18a50-f5d6-459e-acf9-87dd290220ef',

            headers: { authorization }

        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})


