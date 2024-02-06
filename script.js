window.onload = function() {
    var images = ["premier.gif", "deuxième.gif"];
    var texts = ["GIF 1", "GIF 2"];
    var index = 0;
    var gif = document.getElementById('gif');
    var textElement = document.getElementById('text');

    setInterval(function() {
        index = (index + 1) % images.length;
        gif.src = images[index];
        textElement.textContent = texts[index];
    }, 5000);
};
