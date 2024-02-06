document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const responseDiv = document.getElementById('response');
    const secondGifContainer = document.getElementById('second-gif-container');
    const secondGif = document.getElementById('second-gif');
    const oui = 0;

    
    yesBtn.addEventListener('click', function() {
        responseDiv.textContent = 'Youpi!';
        responseDiv.style.fontSize = '24px';
        responseDiv.style.color = 'green';
        secondGif.setAttribute('src', 'deuxième.gif');
    });

    let noBtnClicks = 0;
    noBtn.addEventListener('click', function() {
        if (noBtnClicks % 3 == 0) {
            noBtn.textContent = 'Tu es sûr ?';
        } if (noBtnClicks % 3 == 1) {
            noBtn.textContent = 'Réfléchis bien';
         }if (noBtnClicks % 3 == 2) {
            noBtn.textContent = 'Pardon ?';
            responseDiv.style.fontSize = '16px';
        }
        noBtnClicks++;

        // Afficher le bouton "Oui" si ce n'est pas déjà le cas
        if (yesBtn.style.display === 'none') {
            yesBtn.style.display = 'inline-block';
        }

        // Réinitialiser le deuxième GIF
        secondGif.setAttribute('src', '');
    });
});
