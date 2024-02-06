document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const responseDiv = document.getElementById('response');

    yesBtn.addEventListener('click', function() {
        responseDiv.textContent = 'Youpi!';
        responseDiv.style.color = 'green';
        // Changer le GIF ou afficher un nouveau GIF ici si nécessaire
    });

    noBtn.addEventListener('click', function() {
        if (yesBtn.style.display !== 'none') {
            yesBtn.style.display = 'none';
            noBtn.textContent = 'Tu es sûr ?';
        } else {
            noBtn.textContent = 'Encore une fois !';
            // Changer d'autres éléments si nécessaire
        }
    });
});
