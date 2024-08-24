document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('botaoadd'); // Corrigido para corresponder ao ID do botão
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');

    // Função para criar um item da lista
    function createItem(content) {
        const div = document.createElement('div');
        div.classList.add('div-lista-item');

        const itemName = document.createElement('h1');
        itemName.classList.add('adicinar-lista');
        itemName.style.width = '360px';
        itemName.textContent = content;

        const itemQuantity1 = document.createElement('input');
        itemQuantity1.type = 'text';
        itemQuantity1.classList.add('adicinar-lista', 'input-quantidade');
        itemQuantity1.style.width = '100px';
        itemQuantity1.style.marginRight = '10px'; // Adiciona margem à direita
        
        const itemQuantity2 = document.createElement('input');
        itemQuantity2.type = 'text';
        itemQuantity2.classList.add('adicinar-lista', 'input-quantidade');
        itemQuantity2.style.width = '100px';        

        const itemCheckbox = document.createElement('input');
        itemCheckbox.type = 'checkbox';
        itemCheckbox.classList.add('check-lista');

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('button-lixeira');
        deleteButton.innerHTML = '<img src="../ImagensProjeto/excluir.png" alt="lixeira" width="40px">';
        deleteButton.addEventListener('click', () => {
            div.remove();
            updateLocalStorage();
        });

        div.appendChild(deleteButton);
        div.appendChild(itemName);
        div.appendChild(itemQuantity1);
        div.appendChild(itemQuantity2);
        div.appendChild(itemCheckbox);

        itemList.appendChild(div);
    }

    // Função para atualizar o localStorage
    function updateLocalStorage() {
        const items = [];
        document.querySelectorAll('.div-lista-item').forEach(item => {
            const itemName = item.querySelector('h1').textContent;
            items.push(itemName);
        });
        localStorage.setItem('items', JSON.stringify(items));
    }

    // Função para carregar itens do localStorage
    function loadItems() {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.forEach(item => createItem(item));
    }

    // Adicionar novo item
    addButton.addEventListener('click', () => {
        const itemContent = itemInput.value.trim();
        if (itemContent) {
            createItem(itemContent);
            itemInput.value = '';
            updateLocalStorage();
        }
    });

    // Carregar itens ao iniciar
    loadItems();
});
