const form = document.querySelector("#form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Todos os campos preenchidos, envia o form.
    form.submit();
});