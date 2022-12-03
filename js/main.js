
const openLink = document.getElementById('openLink');
const answer = document.getElementById('answer');
const svg = document.querySelectorAll('.is-opened svg');

openLink.addEventListener('click', () => {
    /*if (answer.classList.contains("is-opened")) {
        answer.classList.remove('is-opened');
    } else {
        answer.classList.add('is-opened');
        answer.style.display = 'block';
    }*/
    answer.classList.toggle('is-opened');
    answer.style.display = 'block';
})
