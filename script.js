document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const responseDiv = document.getElementById('response');
    const secondGifContainer = document.getElementById('second-gif-container');
    const secondGif = document.getElementById('second-gif');

    yesBtn.addEventListener('click', function() {
        responseDiv.textContent = 'Youpi!';
        responseDiv.style.fontSize = '24px';
        responseDiv.style.color = 'green';
        secondGif.setAttribute('src', 'chemin/vers/ton/deuxieme/gif.gif');
    });

    let noBtnClicks = 0;
    noBtn.addEventListener('click', function() {
        if (noBtnClicks === 0) {
            noBtn.textContent = 'Tu es sûr ?';
            responseDiv.textContent = 'Pas encore convaincu ?';
        } else if (noBtnClicks === 1) {
            noBtn.textContent = 'Encore une fois !';
            responseDiv.textContent = 'Vraiment ?';
        } else {
            noBtn.textContent = 'Ok, ok...';
            responseDiv.textContent = 'Peut-être la prochaine fois !';
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
