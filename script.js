document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const responseDiv = document.getElementById('response');
    const firstGifContainer = document.getElementById('first-gif-container');
    const secondGif = document.getElementById('second-gif');
    const title = document.querySelector('h1');

    // Cacher le deuxième GIF au chargement de la page
    secondGif.style.display = 'none';

    yesBtn.addEventListener('click', function() {
        firstGifContainer.style.display = 'none'; // Cacher le conteneur du premier GIF
        first-gif.srcContent('src', 'deuxième.gif'); // Afficher le deuxième GIF
        valentinText.textContent = "YOUPIIIIIIIIIII"; // Nouveau texte
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
            responseDiv.style.fontSize = '16px';
        }
        noBtnClicks++;

        yesBtn.style.fontSize = `${parseInt(yesBtn.style.fontSize || 16) + 30}px`;

        // Réinitialiser le deuxième GIF
        secondGif.setAttribute('src', '');
    });
});
