document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores dos campos de entrada
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Obtém os dados salvos no localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Verifica se os dados inseridos correspondem aos dados armazenados
    if (email === storedEmail && password === storedPassword) {
        alert('Login realizado com sucesso!');
        
        // Salva a mensagem de boas-vindas no localStorage
        localStorage.setItem('welcomeMessage', `Bem-vindo, ${email.split('@')[0]}!`);
        
        // Redireciona para a tela principal
        window.location.href = '../index.html';
    } else {
        alert('E-mail ou senha incorretos. Tente novamente.');
    }
});
