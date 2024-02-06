document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const responseDiv = document.getElementById('response');

    yesBtn.addEventListener('click', function() {
        responseDiv.textContent = 'Youpi!';
        responseDiv.style.fontSize = '24px';
        responseDiv.style.color = 'green';
        responseDiv.style.display = 'block'; // Afficher le message seulement si Oui est cliqué
        // Changer le GIF ou afficher un nouveau GIF ici si nécessaire
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
    });
});
