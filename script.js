let changement=0;
let compteur =0;

const titre = document.getElementById('titre');
const gif = document.getElementById('gif');
const bouton1 = document.getElementById('bouton1');
const bouton2 = document.getElementById('bouton2');

document.queryselector('h1').textContent = "Coucou";
gif.src = "premier.gif";

if changement == 1{
    titre.innerHTML = "YOUPIIIIII !";
    gif.src = "deuxième.gif";
    bouton1.style.display = "none";
    bouton2.style.display = "none";
}

bouton1.addEventListener('click', function() {
    changement=1;
});

bouton2.addEventListener('click', function() {
    compteur = compteur + 1;
    if (compteur % 3 === 0) bouton2.textContent = "Tu es sûr";
    if (compteur % 3 === 1) bouton2.textContent = "Réfléchis bien";
    if (compteur % 3 === 2) bouton2.textContent = "Réfléchis mieux !";
});
