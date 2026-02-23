// Sterretjes en plantjes worden dynamisch toegevoegd

document.addEventListener('DOMContentLoaded', () => {
    addStars();
    addPlants();
});

function addStars() {
    const bg = document.querySelector('.background');
    const starColors = ['#4b6c4b', '#3b5c6b']; // groen en blauw
    for (let i = 0; i < 40; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const color = starColors[i % 2];
        star.style.background = color;
        star.style.boxShadow = `0 0 8px 2px ${color}55`;
        star.style.position = 'absolute';
        star.style.width = '10px';
        star.style.height = '10px';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.opacity = 0.7 + Math.random() * 0.3;
        bg.appendChild(star);
    }
}

function addPlants() {
    const plantjes = document.querySelector('.plantjes');
    const pots = [
        { color: '#e6d3b3', face: '😊' },
        { color: '#b6c7a2', face: '😄' },
        { color: '#b6e0fe', face: '😆' },
        { color: '#d9c2a3', face: '😉' },
        { color: '#c9b7a2', face: '🥰' }
    ];
    for (let i = 0; i < 6; i++) {
        const pot = document.createElement('div');
        pot.className = 'plant-pot';
        pot.style.background = pots[i % pots.length].color;
        pot.innerHTML = `<span class="face">${pots[i % pots.length].face}</span>`;
        pot.addEventListener('click', () => {
            pot.classList.add('shake');
            setTimeout(() => pot.classList.remove('shake'), 600);
        });
        plantjes.appendChild(pot);
    }
}
