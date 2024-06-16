const white = document.querySelectorAll('.white');
const body = document.querySelector('body')
const loading = document.querySelector('.loading')
const botao = document.querySelectorAll('.hamburg');
const mudarcoricon = document.querySelectorAll('.mudarcoricon')


botao.forEach((botao) => {
    botao.addEventListener('click', () => {

        body.classList.toggle('bg-white');
        loading.classList.toggle('loading-b')

        mudarcoricon.forEach((filhos) =>{
            filhos.classList.toggle('black')
        })

        white.forEach((filhos) => {
            filhos.classList.toggle('black');
        });
    });
});
