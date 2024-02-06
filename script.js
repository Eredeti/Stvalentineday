window.onload = function() {
    var images = ["premier.gif", "deuxième.gif"];
    var index = 0;
    var gif = document.getElementById('gif');

    setInterval(function() {
        index = (index + 1) % images.length;
        gif.src = images[index];
    }, 5000);
};
