document.addEventListener('DOMContentLoaded', () => {
    const results = JSON.parse(localStorage.getItem('results'));

    results.sort((a, b) => b.score - a.score);

    const podium = document.getElementById('podium');
    results.forEach((user, index) => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `<h3>${index + 1}. ${user.name} - Puntaje: ${user.score}</h3>`;
        podium.appendChild(userDiv);
    });

    const userPages = document.getElementById('userPages');
    results.forEach(user => {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'user-page';
        pageDiv.innerHTML = `<h3>${user.name}</h3><p>Enlace a la página web creada por ${user.name}.</p>`;
        userPages.appendChild(pageDiv);
    });
});
