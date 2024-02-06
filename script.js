document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const firstGifContainer = document.getElementById('first-gif-container');
    const secondGif = document.getElementById('first-gif'); // Correction: Utiliser l'ID correct pour le premier GIF
    const title = document.querySelector('h1');

    // Cacher le deuxième GIF au chargement de la page
    firstGifContainer.style.display = 'block'; // Correction: Afficher le conteneur du premier GIF

    yesBtn.addEventListener('click', function() {
        firstGifContainer.style.display = 'none'; // Cacher le conteneur du premier GIF
        secondGif.setAttribute('src', 'deuxième.gif'); // Correction: Utiliser setAttribute pour changer la source du GIF
        title.textContent = "YOUPIIIIIIIIIII"; // Correction: Modifier le texte correctement
        document.querySelector('.buttons').style.display = 'none'; // Cacher les boutons "Oui" et "Non"
    });

    let noBtnClicks = 0;
    noBtn.addEventListener('click', function() {
        if (noBtnClicks % 3 == 0) {
            noBtn.textContent = 'Tu es sûr ?';
        } else if (noBtnClicks % 3 == 1) {
            noBtn.textContent = 'Réfléchis bien';
        } else if (noBtnClicks % 3 == 2) {
            noBtn.textContent = 'Pardon ?';
        }
        noBtnClicks++;

        // Réinitialiser le premier GIF
        secondGif.setAttribute('src', 'premier.gif'); // Correction: Réinitialiser le premier GIF
    });
});
