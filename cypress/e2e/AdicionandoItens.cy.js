describe('AdicionandoItens', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/index.html')
    })

    
        it('deve exibir a mensagem de boas-vindas', () => {
            cy.get('#welcomeMessage').should('exist');
        });
    
        it('deve adicionar itens à lista de compras', () => {
            // Adicionando um item
            cy.get('#itemInput').type('Sorvete');
            cy.get('#botaoadd').click();
    
            // Verifica se o item foi adicionado à lista
            cy.get('#itemList').should('contain', 'Sorvete');
        });
    
        it('deve calcular o total corretamente', () => {
            // Adicionando um item com quantidade e valor
            cy.get('#itemInput').type('Sorvete');
            cy.get('#quantityInput').type('2');
            cy.get('#valueInput').type('5');
            cy.get('#botaoadd').click();
    
            // Verifica se o total está correto
            cy.get('#totalValue').should('contain', 'R$ 10.00');
        });
    
        it('deve limpar a lista ao clicar no botão "Apagar Sua Lista"', () => {
            // Adicionando alguns itens
            cy.get('#itemInput').type('Sorvete');
            cy.get('#botaoadd').click();
            cy.get('#itemInput').type('Pudim');
            cy.get('#botaoadd').click();
    
            // Verifica se os itens foram adicionados
            cy.get('#itemList').should('contain', 'Sorvete');
            cy.get('#itemList').should('contain', 'Pudim');
    
            // Clicando no botão de limpar
            cy.get('#clearAllButton').click();
    
            // Verifica se a lista está vazia
            cy.get('#adicinar-lista').should('not.exist');
            cy.get('#totalValue').should('contain', 'R$ 0.00');
        });
    });