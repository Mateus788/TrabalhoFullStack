document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('botaoadd');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');
    const quantityInput = document.getElementById('quantityInput');
    const valueInput = document.getElementById('valueInput');
    const unitInput = document.getElementById('unitInput');
    const totalValueElement = document.getElementById('totalValue');
    const clearAllButton = document.getElementById('clearAllButton');
    const welcomeMessage = localStorage.getItem('welcomeMessage');

    function createItem(content, quantity = '', value = '', unit = '', checked = false) {
        const div = document.createElement('div');
        div.classList.add('div-lista-item');
    
        const itemName = document.createElement('h1');
        itemName.classList.add('adicinar-lista');
        itemName.style.width = '360px';
        itemName.textContent = content;
    
        if (checked) {
            itemName.classList.add('tachado');
        }
    
        clearAllButton.addEventListener('click', () => {
                itemList.innerHTML = ''; // Remove todos os itens da lista
                localStorage.removeItem('items'); // Limpa o LocalStorage
                calculateTotal(); // Atualiza o total para 0
        });
    
        // Adiciona os campos de Quantidade, Valor e Unidade
        const itemQuantity = document.createElement('input');
        itemQuantity.type = 'number';
        itemQuantity.classList.add('adicinar-lista', 'input-quantidade');
        itemQuantity.style.width = '100px';
        itemQuantity.value = quantity || ''; // Se não houver quantidade, deixa em branco
        itemQuantity.placeholder = 'Quantidade'; // Placeholder padrão
    
        const itemValue = document.createElement('input');
        itemValue.type = 'number';
        itemValue.classList.add('adicinar-lista', 'input-quantidade');
        itemValue.style.width = '100px';
        itemValue.value = value || ''; // Se não houver valor, deixa em branco
        itemValue.placeholder = 'Valor'; // Placeholder padrão
    
        const itemUnit = document.createElement('span');
        itemUnit.textContent = unit;
        itemUnit.style.marginLeft = '10px';
        itemUnit.style.fontSize = '16px';
    
        const itemCheckbox = document.createElement('input');
        itemCheckbox.type = 'checkbox';
        itemCheckbox.classList.add('check-lista');
        itemCheckbox.checked = checked;
    
        itemCheckbox.addEventListener('change', () => {
            itemName.classList.toggle('tachado', itemCheckbox.checked);
            updateLocalStorage();
            calculateTotal();
        });
    
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('button-lixeira');
        deleteButton.innerHTML = '<img src="ImagensProjeto/excluir.png" alt="Excluir item" width="40px">';
        deleteButton.addEventListener('click', () => {
            div.remove();
            updateLocalStorage();
            calculateTotal();
        });
    
        div.appendChild(deleteButton);
        div.appendChild(itemName);
        div.appendChild(itemQuantity);
        div.appendChild(itemValue);
        div.appendChild(itemUnit);
        div.appendChild(itemCheckbox);
    
        itemList.appendChild(div);
    }    

    function updateLocalStorage() {
        const items = Array.from(document.querySelectorAll('.div-lista-item')).map(item => ({
            name: item.querySelector('h1').textContent,
            quantity: item.querySelector('.input-quantidade').value,
            value: item.querySelectorAll('.input-quantidade')[1].value,
            unit: item.querySelector('span').textContent,
            checked: item.querySelector('input[type="checkbox"]').checked
        }));
        localStorage.setItem('items', JSON.stringify(items));
    }

    function loadItems() {
        try {
            const items = JSON.parse(localStorage.getItem('items')) || [];
            items.forEach(({ name, quantity, value, unit, checked }) => createItem(name, quantity, value, unit, checked));
        } catch (e) {
            console.error('Erro ao carregar itens do localStorage', e);
        }
        calculateTotal();
    }

    function calculateTotal() {
        let total = 0;

        document.querySelectorAll('.div-lista-item').forEach(item => {
            const quantity = parseFloat(item.querySelectorAll('.input-quantidade')[0].value) || 0;
            const value = parseFloat(item.querySelectorAll('.input-quantidade')[1].value) || 0;
            total += quantity * value;
    });

        if (totalValueElement) {
            totalValueElement.textContent = `R$ ${total.toFixed(2)}`;
        }
    }

    addButton.addEventListener('click', () => {
        const itemContent = itemInput.value.trim();
        const quantity = quantityInput.value.trim();
        const value = valueInput.value.trim();
        const unit = unitInput.value;

        if (itemContent) {
            createItem(itemContent, quantity, value, unit);
            itemInput.value = '';
            quantityInput.value = '';
            valueInput.value = '';
            updateLocalStorage();
            calculateTotal();
        }
    });

    if (welcomeMessage) {
        document.getElementById('welcomeMessage').textContent = welcomeMessage;
    }

    loadItems();
});
