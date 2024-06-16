//Validar email
function validarFormulario(event) {
    event.preventDefault();

    if (!validEmail) {
        alert("Email inválido!");
        return false;
    }

    return true;
}

function checkMail(){
    var email = document.getElementById("email").value;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(regexEmail.test(email))


    if (!regexEmail.test(email)) {

        let btn = document.querySelector('#enviar')
        btn.setAttribute("disabled", "");
        btn.setAttribute("style", "background-color: gray;")
        validEmail = false;

    }else{
    let btn = document.querySelector('#enviar')
    btn.removeAttribute("disabled", "");
    btn.removeAttribute("style", "background-color: gray;")
    btn.setAttribute("style", "cursor: pointer;")
    validEmail = true;
}
}