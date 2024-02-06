window.onload = function() {
    var images = ["chemin/vers/gif1.gif", "chemin/vers/gif2.gif", "chemin/vers/gif3.gif"];
    var texts = ["Texte 1", "Texte 2", "Texte 3"];
    var index = 0;
    var gif = document.getElementById('gif');
    var textElement = document.getElementById('text');

    setInterval(function() {
        index = (index + 1) % images.length;
        gif.src = images[index];
        textElement.textContent = texts[index];
    }, 5000);
};
