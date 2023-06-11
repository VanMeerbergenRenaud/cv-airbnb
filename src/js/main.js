/* -------------------------------------------
Nom Complet: 	Renaud Van Meerbergen
------------------------------------------- */

document.documentElement.classList.add("js-enabled");

function toggleAnswer(answerId, openLinkId, retourId) {
    const openLink = document.getElementById(openLinkId);
    const answer = document.getElementById(answerId);

    const prendreReservation = document.querySelector('.prendreReservation');

    openLink.addEventListener('click', () => {
        answer.classList.toggle('is-opened');
        answer.style.display = 'block';
        prendreReservation.classList.toggle('hidden');
    });

    const retour = document.getElementById(retourId);
    retour.addEventListener('click', () => {
        answer.classList.toggle('is-opened');
        answer.style.display = 'none';
        prendreReservation.classList.toggle('hidden');
    });
}

toggleAnswer('answer', 'openLink', 'retour');
toggleAnswer('answer2', 'openLink2', 'retour2');

/* Javascript pour le sous menu du header */
const button = document.querySelector('.profil button');
const menu = document.querySelector('.menu');

button.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    menu.style.display = expanded ? 'none' : 'block';
});

/* Javascript for the menu bar on desktop only */
window.addEventListener("scroll", function() {
    let scrollDistance = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollDistance >= 700) {
        document.querySelector(".desktop-menu").classList.add("show");
    } else {
        document.querySelector(".desktop-menu").classList.remove("show");
    }
});

/* Javascript for the search bar */

/* Javascript for scroll animation */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElementsLeft = document.querySelectorAll('.hiddenScrollLeft');
hiddenElementsLeft.forEach((el) => observer.observe(el));

const hiddenElementsRight = document.querySelectorAll('.hiddenScrollRight');
hiddenElementsRight.forEach((el) => observer.observe(el));

const hiddenElementsTop = document.querySelectorAll('.hiddenScrollTop');
hiddenElementsTop.forEach((el) => observer.observe(el));

/*function observeElementsWithClass(className) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.' + className);
    hiddenElements.forEach((el) => observer.observe(el));
}

observeElementsWithClass('hiddenScrollLeft');
observeElementsWithClass('hiddenScrollRight');
observeElementsWithClass('hiddenScrollTop');*/
