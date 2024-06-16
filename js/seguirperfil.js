const seguir = document.querySelectorAll('.btn-seguir')


seguir.forEach((quantb) => {
    quantb.addEventListener('click', () => {

        if (quantb.innerHTML === "Seguir") {
            quantb.innerHTML = "Seguindo"
            quantb.classList.add("bg-cinza")

        } else {

            quantb.innerHTML = "Seguir"
            quantb.classList.remove("bg-cinza")
            quantb.classList.add("white")
        }

    })

})