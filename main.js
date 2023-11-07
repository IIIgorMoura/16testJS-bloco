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