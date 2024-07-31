document.addEventListener('DOMContentLoaded', () => {
    const senhaInput = document.getElementById('senha');
    const confirmaInput = document.getElementById('confirma');
    const loginButton = document.getElementById('login-button');

    function confereSenha() {
        if (confirmaInput.value === senhaInput.value) {
            confirmaInput.setCustomValidity('');
        } else {
            confirmaInput.setCustomValidity('As senhas não conferem');
        }
    }

    // Adiciona eventos para validar a senha em tempo real
    senhaInput.addEventListener('input', confereSenha);
    confirmaInput.addEventListener('input', confereSenha);

    loginButton.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o envio do formulário

        if (senhaInput.value === confirmaInput.value) {
            alert('Senhas conferem!');
            // Aqui você pode adicionar a lógica para enviar o formulário ou realizar o login
        } else {
            alert('As senhas não conferem.');
        }
    });
});
