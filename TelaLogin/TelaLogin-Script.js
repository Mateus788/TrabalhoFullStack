document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        alert('Login realizado com sucesso!');
        
        localStorage.setItem('welcomeMessage', `Bem-vindo, ${escapeHTML(email.split('@')[0])}!`);
        
        window.location.href = '../index.html';
    } else {
        alert('E-mail ou senha incorretos. Tente novamente.');
    }
});

document.getElementById('registerButton').addEventListener('click', function() {
    window.location.href = '../TelaCadastro/TelaCadastro.html';
});
