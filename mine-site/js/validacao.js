const formulario = document.getElementById("meuFormulario")

formulario.addEventListener("submit", function() {
    event.preventDefault()

    const nome = document.getElementById("nome");
    const telefone = document.getElementById("Telefone");
    const sexo = document.getElementById("Sexo");
    const checkbox = document.getElementById("Sim")

    console.log(nome.value);
    console.log(telefone.value);
    console.log(sexo.value);
    
    // validação
    if (nome.value.trim() === "") {
        alert("Preencha o nome");
        return false;
    }

    if (telefone.value.trim() === "") {
        alert("Preencha o telefone")
        return false
    }

    // Limpar campos

    nome.value = "";
    telefone.value = "";
    checkbox.checked = false;

    alert("Formulario enviado!");

});

// .trim: remove os espaços
// == compara o tipo ou valor
// === compara o tipo E valor

// addEventListener: escutador de evento