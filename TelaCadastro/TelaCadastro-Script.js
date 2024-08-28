document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores dos campos
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirm-email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Verifica se o e-mail e a confirmação são iguais
    if (email !== confirmEmail) {
        alert('Os e-mails não coincidem.');
        return;
    }

    // Verifica se a senha e a confirmação são iguais
    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    // Salva no localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Cadastro realizado com sucesso!');

    // Redireciona para a tela de login
    window.location.href = '../TelaLogin/TelaLogin.html';
});
