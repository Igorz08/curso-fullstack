const formulario = document.getElementById("meuFormulario")

formulario.addEventListener("submit", function() {
    event.preventDefault()

    const nome = document.getElementById("nome");
    const telefone = document.getElementById("Telefone");
    const sexo = document.getElementById("Sexo")

    console.log(nome.value);
    console.log(telefone.value);
    console.log(sexo.value);
    

});

// addEventListener: escutador de evento