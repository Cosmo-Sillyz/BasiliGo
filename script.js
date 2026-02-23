// Sterretjes en plantjes worden dynamisch toegevoegd

document.addEventListener('DOMContentLoaded', () => {
    addStars();
    addPlants();
});

function addStars() {
    const bg = document.querySelector('.background');
    for (let i = 0; i < 40; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.position = 'absolute';
        star.style.width = '18px';
        star.style.height = '18px';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.opacity = 0.7 + Math.random() * 0.3;
        star.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="9,1 11,7 17,7 12,11 14,17 9,13 4,17 6,11 1,7 7,7" fill="#fff9c4" stroke="#ffe082" stroke-width="1" />
        </svg>`;
        bg.appendChild(star);
    }
}

function addPlants() {
    const plantjes = document.querySelector('.plantjes');
    const pots = [
        { color: '#e6d3b3', face: smilingFaceSVG() },
        { color: '#b6c7a2', face: laughingFaceSVG() },
        { color: '#b6e0fe', face: winkFaceSVG() },
        { color: '#d9c2a3', face: heartFaceSVG() },
        { color: '#c9b7a2', face: bigSmileSVG() }
    ];
    for (let i = 0; i < 6; i++) {
        const pot = document.createElement('div');
        pot.className = 'plant-pot';
        pot.style.background = pots[i % pots.length].color;
        pot.innerHTML = `<span class="face">${pots[i % pots.length].face}</span>`;
        pot.addEventListener('click', () => {
            pot.classList.add('shake');
            const face = pot.querySelector('.face svg');
            if (face) face.classList.add('laugh');
            setTimeout(() => {
                pot.classList.remove('shake');
                if (face) face.classList.remove('laugh');
            }, 600);
        });
        plantjes.appendChild(pot);
    }
}

function smilingFaceSVG() {
    return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#fffde7" stroke="#ffe082" stroke-width="2" />
        <ellipse cx="14" cy="18" rx="2" ry="3" fill="#6b7c6b" />
        <ellipse cx="26" cy="18" rx="2" ry="3" fill="#6b7c6b" />
        <path d="M14 26 Q20 32 26 26" stroke="#6b7c6b" stroke-width="2" fill="none" />
    </svg>`;
}
function laughingFaceSVG() {
    return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#fffde7" stroke="#ffe082" stroke-width="2" />
        <ellipse cx="14" cy="18" rx="2" ry="3" fill="#6b7c6b" />
        <ellipse cx="26" cy="18" rx="2" ry="3" fill="#6b7c6b" />
        <path d="M14 26 Q20 36 26 26" stroke="#6b7c6b" stroke-width="2" fill="none" />
        <rect x="16" y="28" width="8" height="3" rx="1.5" fill="#ffe082" />
    </svg>`;
}
function winkFaceSVG() {
    return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#fffde7" stroke="#ffe082" stroke-width="2" />
        <ellipse cx="14" cy="18" rx="2" ry="3" fill="#6b7c6b" />
        <rect x="24" y="17" width="4" height="2" rx="1" fill="#6b7c6b" />
        <path d="M14 26 Q20 32 26 26" stroke="#6b7c6b" stroke-width="2" fill="none" />
    </svg>`;
}
function heartFaceSVG() {
    return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#fffde7" stroke="#ffe082" stroke-width="2" />
        <ellipse cx="14" cy="18" rx="2" ry="3" fill="#6b7c6b" />
        <ellipse cx="26" cy="18" rx="2" ry="3" fill="#6b7c6b" />
        <path d="M14 26 Q20 32 26 26" stroke="#6b7c6b" stroke-width="2" fill="none" />
        <path d="M24 22 Q25 20 26 22 Q27 24 24 26 Q21 24 24 22" fill="#ff80ab" />
    </svg>`;
}
function bigSmileSVG() {
    return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#fffde7" stroke="#ffe082" stroke-width="2" />
        <ellipse cx="14" cy="18" rx="2" ry="3" fill="#6b7c6b" />
        <ellipse cx="26" cy="18" rx="2" ry="3" fill="#6b7c6b" />
        <path d="M14 26 Q20 36 26 26" stroke="#6b7c6b" stroke-width="2" fill="none" />
    </svg>`;
}
