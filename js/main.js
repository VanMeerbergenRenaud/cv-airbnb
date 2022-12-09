/* -------------------------------------------
Nom Complet: 	Renaud Van Meerbergen
------------------------------------------- */

document.documentElement.classList.add("js-enabled");

/*1.1 Ajout d'un écouteur d'évènement au clic du lien <a> en savoir plus </a>*/
const openLink = document.getElementById('openLink');
const answer = document.getElementById('answer');

openLink.addEventListener('click', () => {
    answer.classList.toggle('is-opened');
    answer.style.display = 'block';
    document.body.style.backgroundColor = 'rgba(35,35,35,0.65)';
});

/*1.2 Ajout d'un écouteur d'évènement au <svg> = croix X >*/
const retour = document.getElementById('retour');
retour.addEventListener('click', () => {
    answer.classList.toggle('is-opened');
    answer.style.display = 'none';
    document.body.style.backgroundColor = "white";
});

/*2. Ajout d'un écouteur d'évènement au lien <a> n°2 */
const openLink2 = document.getElementById('openLink2');
const answer2 = document.getElementById('answer2');

openLink2.addEventListener('click', () => {
    answer2.classList.toggle('is-opened');
    answer2.style.display = 'block';
    document.body.style.backgroundColor = 'rgba(35,35,35,0.65)';
});

/*1.2 Ajout d'un écouteur d'évènement au <svg> = croix X >*/
const retour2 = document.getElementById('retour2');
retour2.addEventListener('click', () => {
    answer2.classList.toggle('is-opened');
    answer2.style.display = 'none';
    document.body.style.backgroundColor = "white";
});
