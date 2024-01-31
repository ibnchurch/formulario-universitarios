const form = document.querySelector("#form")
const nameInput = document.querySelector('#fullName')

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verificar nome vazio
    if (nameInput.value === "") {
    alert("Por favor, preencha seu nome");
    return;
    }

    // Todos os campos preenchidos, envia o form.
    form.submit();
});

// Função validar email
function isEmailValid(email) {
    //Cria regex para validar email
    const emailRegex = new RegExp(
        //
    )
}