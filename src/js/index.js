import "./libs"
const inputNome = 
document.querySelector('#input-nome')
const selectPrioridade = 
document.querySelector('#select-prioridade')
const btnIncluir = 
document.querySelector('#btn-incluir')
const ulLista = 
document.querySelector('#ul-lista')
const displayNome = 
document.querySelector('#display-nome')
const btnChamar = 
document.querySelector('#btn-chamar')
const listaDeAtendimento = new Array()


function incluir(){

    listaDeAtendimento.push(inputNome.value)
    listar()
}

function listar(){
  ulLista.innerHTML="" // zerando a lista antes de adicionar, para ele não duplicar 
  for (let nome of listaDeAtendimento){
    let li = document.createElement('li'); // criando uma li para cada elemento
    li.classList.add("list-group-item") // adicionando uma classe de estilização 

    li.textContent = nome;  // falando que o nome ( variavel do for) receber o conteudo da li
  
    ulLista.appendChild(li)// passando a li (com o nome ) para a lista

  }
}

function deletar(){

listaDeAtendimento.shift(inputNome); // excluindo o ultimo valor da lista
listar() // pedindo para listar 

}

//eventos
btnIncluir.onclick = incluir 
btnChamar.onclick = deletar


