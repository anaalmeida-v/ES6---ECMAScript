class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados() {
        for (let i in this) {
            if (this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        }
        return true
    }
}

class Bd {

    constructor() {
        let id = localStorage.getItem('id')

        if (id === null) {
            localStorage.setItem('id', 0)
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id')//getItem() - recuperar um dado dentro de localStorage
        return parseInt(proximoId) + 1
    }

    gravar(d) {
        //localStorage.setItem('despesa', JSON.stringify(d))
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)
    }
}

let bd = new Bd()

function cadastrarDespesa() {

    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')
    //variáveis utilizadas para a referencia das seleções, para que os atributos possam ser utilizados ou métodos desses elementos

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    if (despesa.validarDados()) {
        bd.gravar(despesa)
        //dialog de sucesso
        document.getElementById('titulo').innerHTML = 'Registro inserido com sucesso'
        document.getElementById('cadastroCor').className = 'modal-header text-success'
        document.getElementById('cadastro').innerHTML = 'Despesa foi cadastrada com sucesso!'
        document.getElementById('botaoVoltar').className = 'btn btn-success'
        document.getElementById('botaoVoltar').innerHTML = 'Voltar'
        $('#modalRegistraDespesa').modal('show')
    } else {
        //dialog de erro
        document.getElementById('titulo').innerHTML = 'Erro na gravação'
        document.getElementById('cadastroCor').className = 'modal-header text-danger'
        document.getElementById('cadastro').innerHTML = 'Existem campos obrigatórios que não foram preenchidos'
        document.getElementById('botaoVoltar').className = 'btn btn-danger'
        document.getElementById('botaoVoltar').innerHTML = 'Voltar e corrigir'
        $('#modalRegistraDespesa').modal('show')
    }
}
/*function gravar(d) {//transformando objeto literal em JSON
    localStorage.setItem('despesa', JSON.stringify(d))/*setItem()retorna 2 parâmetros, um nome e um valor
        quando passado 'chave' e 'valor', irá adicionar esta chave ao storage, ou atualizar o valor caso a chave já
        exista. ESSE MÉTODO GUARDA APENAS A INFORMAÇÃO DO ÚLTIMO REGISTRO CRIADO
}*/