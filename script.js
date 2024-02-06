document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const responseDiv = document.getElementById('response');
    const firstGifContainer = document.getElementById('first-gif-container');
    const secondGif = document.getElementById('second-gif');

    yesBtn.addEventListener('click', function() {
        responseDiv.textContent = 'Youpi!';
        responseDiv.style.fontSize = '24px';
        responseDiv.style.color = 'green';
        firstGifContainer.style.display = 'none'; // Cacher le conteneur du premier GIF
        secondGif.setAttribute('src', 'deuxième.gif'); // Afficher le deuxième GIF
        document.querySelector('h1').style.display = 'none'; // Cacher la phrase "Veux-tu être mon valentin ?"
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

        yesBtn.style.fontSize = `${parseInt(yesBtn.style.fontSize || 16) + 1}px`;

        // Réinitialiser le deuxième GIF
        secondGif.setAttribute('src', '');
    });
});
