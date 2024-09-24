describe('Login', () => {
  beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/TelaLogin/TelaLogin.html');
  });

  it('Deve preencher e enviar o formulário de login', () => {
      cy.get('#email').type('usuario@example.com');
      cy.get('#password').type('senha123');

      // Simular o envio do formulário
      cy.get('button[type="button"]').click();
      
  });

  it('Deve validar campos obrigatórios', () => {
      cy.get('button[type="submit"]').click();

      cy.get('#email:invalid').should('exist');
      cy.get('#password:invalid').should('exist');
  });

  it('Deve exibir erro quando as credenciais estão incorretas', () => {
      cy.get('#email').type('usuario@example.com');
      cy.get('#password').type('senhaErrada'); // Senha incorreta

      // Simular o envio do formulário
      cy.get('button[type="button"]').click();

      // Verificar se uma mensagem de erro é exibida (ajuste o seletor conforme necessário)
      cy.on('window:alert', (txt) => {
          expect(txt).to.contains("E-mail ou senha incorretos. Tente novamnete.");
      });
  });
});
