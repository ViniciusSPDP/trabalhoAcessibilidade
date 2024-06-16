const seguir = document.querySelectorAll('.seguir')


seguir.forEach((quantb) => {
    quantb.addEventListener('click', () => {

        if (quantb.innerHTML === "Seguir") {
            quantb.innerHTML = "Seguindo"
            quantb.classList.remove("azul")
            quantb.classList.add("cinza")

        } else {

            quantb.innerHTML = "Seguir"
            quantb.classList.remove("cinza")
            quantb.classList.add("azul")
        }

    })

})