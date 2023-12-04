function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'Ironhack';

    if (password.trim() === '') {
        showErrorMessage('Por favor, ingresa una contraseña.');
    } else if (password === correctPassword) {
        window.location.href = 'index3.html';
    } else {
        showErrorMessage('Contraseña incorrecta. Inténtalo de nuevo.');
    }
}

function showErrorMessage(message) {
    document.getElementById('errorMessage').textContent = message;
}