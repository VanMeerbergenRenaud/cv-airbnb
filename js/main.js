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

