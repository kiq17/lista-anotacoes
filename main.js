const valorInput = document.querySelector('.form-input')
const sessaoResultado = document.querySelector('.resultado')
const btnSalvar = document.getElementById('btn-save')
const ApagarTodos = document.getElementById('btn')
const divBox = document.querySelector('.input-box')
const totalAnt = document.getElementById('total')
const iconError = document.getElementById('error-icon')

let arrayAnotacao = []


eventos();
function eventos() {
    btnSalvar.addEventListener('click', addAnotacao)
    sessaoResultado.addEventListener('click', removerAnt)
    btn.addEventListener('click', deletarTodos)
}

function addAnotacao() {
    let anotacao = valorInput.value

    if (anotacao === '') {
        valorInput.classList.add('alerta')
        iconError.style.display = 'block'
        const p = document.createElement('p')
        p.classList.add('texto-error')

        p.innerHTML = 'Campo vazio'

        divBox.appendChild(p)

        setTimeout(() => {
            valorInput.classList.remove('alerta')
            p.remove()
            iconError.style.display = 'none'
        }, 2000)

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

    if (arrayAnotacao.length === 0) {
        totalAnt.style.display = 'none'
        ApagarTodos.style.display = 'none'
    } else {
        totalAnt.style.display = 'block'
        ApagarTodos.style.display = 'block'
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

function deletarTodos() {
    arrayAnotacao = [];
    carregarHTML();
}