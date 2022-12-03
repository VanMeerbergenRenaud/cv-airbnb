/* -------------------------------------------
Nom Complet: 	Renaud Van Meerbergen
------------------------------------------- */

/*1.1 Ajout d'un écouteur d'évènement au clic du lien <a> en savoir plus </a>*/
const openLink = document.getElementById('openLink');
const answer = document.getElementById('answer');

openLink.addEventListener('click', () => {
    answer.classList.toggle('is-opened');
    answer.style.display = 'block';
});
/*1.2 Ajout d'un écouteur d'évènement au <svg> = croix X >*/
const retour = document.getElementById('retour');
retour.addEventListener('click', () => {
    answer.classList.toggle('is-opened');
    answer.style.display = 'none';
})

/*2. Ajout d'un écouteur d'évènement à ...*/
