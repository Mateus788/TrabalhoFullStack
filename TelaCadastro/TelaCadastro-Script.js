document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const confirmEmail = document.getElementById('confirm-email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (email !== confirmEmail) {
        alert('Os e-mails não coincidem.');
        return;
    }

    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    localStorage.setItem('email', escapeHTML(email));
    localStorage.setItem('password', escapeHTML(password));

    alert('Cadastro realizado com sucesso!');

    window.location.href = '../TelaLogin/TelaLogin.html';
});

function escapeHTML(text) {
    return text.replace(/[&<>"']/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[char]);
}
