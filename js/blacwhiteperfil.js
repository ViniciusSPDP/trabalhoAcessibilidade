const white = document.querySelectorAll('.white');
const body = document.querySelector('body')
const botao = document.querySelectorAll('.hamburg');
const back = document.querySelector('.container-banner')
const fto = document.querySelector('.foto-perfil')
const mudarcoricon = document.querySelectorAll('.mudarcoricon')


botao.forEach((botao) => {
    botao.addEventListener('click', () => {

        body.classList.toggle('bg-white')
        back.classList.toggle('border-white')
        fto.classList.toggle('border-white')

        mudarcoricon.forEach((filhos) =>{
            filhos.classList.toggle('black')
        })


        white.forEach((filhos) => {
            filhos.classList.toggle('black');
        });
    });
});
