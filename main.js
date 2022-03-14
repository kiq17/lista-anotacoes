const valorInput = document.querySelector('.form-input')
const sessaoResultado = document.querySelector('.resultado')
const btnSalvar = document.getElementById('btn-save')
const ApagarTodos = document.getElementById('btn')

const totalAnt = document.getElementById('total') 

let arrayAnotacao = []

function addAnotacao() {
    let anotacao = valorInput.value
    totalAnt.style.display = 'block'
    ApagarTodos.style.display = 'block'
    if (anotacao === '') {
        alert('O input está vazio')
        return;
    }

    const obj = {
        anotacao,
        id: Math.random().toString(36).substring(2, 12)
    }

    arrayAnotacao = [...arrayAnotacao, obj]


    carregarHTML();
    valorInput.value = ''
}



function carregarHTML() {
    limparHTML();
    if (arrayAnotacao.length > 0) {
        arrayAnotacao.forEach(obj => {
            sessaoResultado.innerHTML += `<div class="item" data-id="${obj.id}">
        <p>${obj.anotacao}</p>
        <i class="far fa-times-circle" data-delete="5"></i>
        </div>`
        })
    }

    totalAnt.innerHTML = `Total: ${arrayAnotacao.length}` 

    if(arrayAnotacao.length === 0){
        totalAnt.style.display = 'none'
        ApagarTodos.style.display = 'none' 
        return;
    }
}

function limparHTML() {
    sessaoResultado.innerHTML = ''
}


function removerAnt(e) {
    if (e.target.classList.contains('fa-times-circle')) {
        const deletarAnotacao = e.target.parentElement.getAttribute('data-id')

        arrayAnotacao = arrayAnotacao.filter(ant => ant.id !== deletarAnotacao)
    }

    carregarHTML();
}

function deletarTodos(){
    arrayAnotacao = [];
    carregarHTML(); 

}

btnSalvar.addEventListener('click', addAnotacao)
sessaoResultado.addEventListener('click', removerAnt)
btn.addEventListener('click', deletarTodos)