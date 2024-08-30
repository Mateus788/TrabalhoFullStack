document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirm-email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (email !== confirmEmail) {
        alert('Os e-mails não coincidem.');
        return;
    }

    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Cadastro realizado com sucesso!');

    window.location.href = '../TelaLogin/TelaLogin.html';
});