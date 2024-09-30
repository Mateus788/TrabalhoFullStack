describe('Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/TelaCadastro/TelaCadastro.html');
    });

    it('Deve preencher e enviar o formulário', () => {
        cy.get("#email").type('teste@example.com');
        cy.get('#confirm-email').type('teste@example.com');
        cy.get('#password').type('senha123');
        cy.get('#confirm-password').type('senha123');

        // Simular o envio do formulário
        cy.get('#registerButton').click();
        
        // Aqui você pode verificar uma mensagem de sucesso ou redirecionamento, se aplicável
    });

    it('Deve validar campos obrigatórios', () => {
        cy.get('#registerButton').click();
        cy.get('#email:invalid').should('exist');
        cy.get('#confirm-email:invalid').should('exist');
        cy.get('#password:invalid').should('exist');
        cy.get('#confirm-password:invalid').should('exist');
    });

    it('Deve exibir erro quando e-mails não coincidem', () => {
        cy.get('#email').type('teste@example.com');
        cy.get('#confirm-email').type('diferente@example.com'); // E-mail diferente
        cy.get('#password').type('senha123');
        cy.get('#confirm-password').type('senha123');

        // Simular o envio do formulário
        cy.get('#registerButton').click();

        // Verificar se uma mensagem de erro é exibida (ajuste o seletor conforme necessário)
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains("Os e-mails não coincidem");
        })
    });

    it('Deve exibir erro quando senhas não coincidem', () => {
        cy.get('#email').type('teste@example.com');
        cy.get('#confirm-email').type('teste@example.com');
        cy.get('#password').type('senha123');
        cy.get('#confirm-password').type('senha456'); // Senha diferente

        // Simular o envio do formulário
        cy.get('#registerButton').click();

        cy.on('window:alert', (txt) => {
            expect(txt).to.contains("As senhas não coincidem");
        })
    });
});