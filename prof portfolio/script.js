document.addEventListener("DOMContentLoaded", function() {
    const allRadio = document.getElementById('all');
    const vrRadio = document.getElementById('vr');
    const twoDRadio = document.getElementById('2D');
    const threeDRadio = document.getElementById('3D');
    const textRadio = document.getElementById('text');
    const gameCards = document.querySelectorAll('.game-card');

    // Functie om de kaarten te filteren
    function filterGames(category) {
        gameCards.forEach(card => {
            if (category === 'all') {
                card.style.display = 'block';
            } else if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Event listeners toevoegen aan de radio buttons
    allRadio.addEventListener('change', () => filterGames('all'));
    vrRadio.addEventListener('change', () => filterGames('vr'));
    twoDRadio.addEventListener('change', () => filterGames('2D'));
    threeDRadio.addEventListener('change', () => filterGames('3D'));
    textRadio.addEventListener('change', () => filterGames('text'));

    // Initialisatie: Toon alle games
    filterGames('all');
});