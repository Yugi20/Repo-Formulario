document.addEventListener('DOMContentLoaded', () => {
    const welcomeSection = document.getElementById('welcomeSection');
    const userSection = document.getElementById('userSection');
    const startWelcomeButton = document.getElementById('startWelcomeButton');
    const previewButton = document.getElementById('previewButton');
    const userNameInput = document.getElementById('userName');
    let selectedAvatar = null;

    startWelcomeButton.addEventListener('click', () => {
        welcomeSection.style.display = 'none';
        userSection.style.display = 'block';
    });

    document.querySelectorAll('.avatar').forEach(avatar => {
        avatar.addEventListener('click', () => {
            document.querySelectorAll('.avatar').forEach(av => av.classList.remove('selected'));
            avatar.classList.add('selected');
            selectedAvatar = avatar.dataset.avatar;
            togglePreviewButton();
        });
    });

    userNameInput.addEventListener('input', togglePreviewButton);

    function togglePreviewButton() {
        const userName = userNameInput.value.trim();
        if (selectedAvatar && userName) {
            previewButton.style.display = 'block';
        } else {
            previewButton.style.display = 'none';
        }
    }

    previewButton.addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        if (!selectedAvatar) {
            alert('Por favor, selecciona un avatar.');
            return;
        }
        if (!userName) {
            alert('Por favor, ingresa tu nombre.');
            return;
        }

        localStorage.setItem('user', JSON.stringify({ name: userName, avatar: selectedAvatar }));
        window.location.href = 'preview.html';
    });
});








