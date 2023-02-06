/* -------------------------------------------
Nom Complet: 	Renaud Van Meerbergen
------------------------------------------- */

document.documentElement.classList.add("js-enabled");

function toggleAnswer(answerId, openLinkId, retourId) {
    const openLink = document.getElementById(openLinkId);
    const answer = document.getElementById(answerId);

    openLink.addEventListener('click', () => {
        answer.classList.toggle('is-opened');
        answer.style.display = 'block';
        document.body.style.backgroundColor = 'rgba(35,35,35,0.65)';
    });

    const retour = document.getElementById(retourId);
    retour.addEventListener('click', () => {
        answer.classList.toggle('is-opened');
        answer.style.display = 'none';
        document.body.style.backgroundColor = "white";
    });
}

toggleAnswer('answer', 'openLink', 'retour');
toggleAnswer('answer2', 'openLink2', 'retour2');


/*
// Avoir une autre page en fonction de la taille de notre écran en utilisant javascript
let screenWidth = window.innerWidth;
if (screenWidth < 1000) {
    window.location.href = "https://renaud-vmb/index.html";
} else {
    window.location.href = "https://renaud-vmb/index-desktop.html";
}
*/

/* Javascript pour le sous menu du header */
const button = document.querySelector('.profil button');
const menu = document.querySelector('.menu');

button.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    menu.style.display = expanded ? 'none' : 'block';
});

