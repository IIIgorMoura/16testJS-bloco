const novaNota = document.getElementById("nota-nota")
const adicionarNota = document.getElementById("adicionar-nota")
const limparNotas = document.getElementById("limpar-notas")
const notasSalvas = document.getElementById("notas-salvas")

// verif se tem alguma nota no arnazenamento local
if (localStorage.getItem("notas")) {
    // recupera o valor do item "notas" do localStorage e converte de volta para JS usando JSON.parse()
    const notas = JSON.parse(localStorage.getItem("notas"))

    // percorre cada nota usando loop e usa funcao criarNota()
    notas.forEach(function (nota, index) {
        criarNota(nota, index)
    })
}

// add nova nota
adicionarNota.addEventListener("click", function () {
    // pega txt do txtarea, salvando em textoNota sem espacos no inicio e final 
    const textoNota = novaNota.value.trim()

    if (textoNota !== '') {
        criarNota(textoNota)
        salvarNota()
        novaNota.value = ''
    }
})

// apaga tds notas
limparNotas.addEventListener("click", function () {
    notasSalvas.innerHTML = ''
    localStorage.removeItem('notas')
})

// func criar nova nota
function criarNota(texto, index) {
    const div = document.createElement("div")

    const p = document.createElement("p")
    const botaoEditar = document.createElement("button")
    const botaoExcluir = document.createElement("button")

    const inputCor = documet.createElement("input")
    input.type = "color"

    p.textContent = texto
    botaoEditar.textContent = "Editar"
    botaoExcluir.textContent = "Excluir"

    div.appendChild(p)
    div.appendChild(botaoEditar)
    div.appendChild(botaoExcluir)
    div.appendChild(inputCor)

    div.className = "nota"

    // verif SE indice é undef
    if (index !== undefined) {
        const notas = JSON.parse(localStorage.getItem("notas"))
        inputCor.value = notas[index].cor;
        div.style.backgroundColor = notas[index].cor
    }

    notasSalvas.appendChild(div)

    // funcao pra excluir nota
    botaoEditar.addEventListener("click", function () {
        if (confirm("Tem certeza que deseja excluir esta nota?")) {
            div.remove()
            salvarNota()
        }

    })
}

function editarNota(p, div, inputCor) {
    const textareaEdicao = document.createElement("textarea")
    textareaEdicao.value = p.textContent.div.replaceChild(textareaEdicao, p)
}