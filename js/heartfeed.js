let contadorClick = 0;
const fotos = document.getElementsByClassName('ftovideo');
const icon = document.querySelector('.fa-heart')

for (let i = 0; i < fotos.length; i++) {
    const foto = fotos[i];
    foto.addEventListener('click', () => {
        contadorClick++;

        if (contadorClick === 2) {
            contadorClick = 0;
            const heart = foto.querySelector('.heart');
            heart.classList.add("block");

            icon.classList.add('fa-solid')

            setTimeout(() => {
                heart.classList.remove("block");
            }, 2000);
        }
    });
}
