const iconcoracao = document.querySelectorAll('.fa-heart');

iconcoracao.forEach((icone) => {
    icone.addEventListener('click', () => {
        icone.classList.toggle('fa-solid');
    });
});
