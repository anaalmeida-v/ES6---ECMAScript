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

    recuperarTodosRegistros() {

        //array de despesas
        let despesas = []

        let id = localStorage.getItem('id')

        //recuperar todas as despesas cadastradas em localStorage
        for (let i = 1; i <= id; i++) {

            //recuperar a despesa
            let despesa = JSON.parse(localStorage.getItem(i))

            //existe a possibilidade de haver índices que foram pulados/removidos
            //nestes casos nós vamos pular esses índices
            if (despesa === null) {
                continue
            } 
            despesa.id = i//atributo novo dentro dos objetos de despesas retornado pelo método recuperarTodosRegistros()
            despesas.push(despesa)
        }

        return despesas
    }

    pesquisar(despesa) {//filtrando despesas

        let despesasFiltradas = []

        despesasFiltradas = this.recuperarTodosRegistros()

        console.log(despesasFiltradas)
        console.log(despesa)
        
        //ano
        if (despesa.ano != '') {//se ano dentro de despesa for diferente de vazio, filtro é recuperado
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
            //verificando se atributo ano corresponde a despesa.ano, para assim informação ser filtrada
        }
        //mes
        if (despesa.mes != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
            //caso haja um valor dentro de despesasFiltradas, valor filtrado irá sobrepor
        }
        //dia
        if (despesa.dia != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
        }
        //tipo
        if (despesa.tipo != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
        }
        //descricao
        if (despesa.descricao != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }
        //valor
        if (despesa.valor != '') {
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
        }

        return despesasFiltradas
    }
    remover(id) {
        localStorage.removeItem()
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

        document.getElementById('titulo').innerHTML = 'Registro inserido com sucesso'
        document.getElementById('cadastroCor').className = 'modal-header text-success'
        document.getElementById('cadastro').innerHTML = 'Despesa foi cadastrada com sucesso!'
        document.getElementById('botaoVoltar').className = 'btn btn-success'
        document.getElementById('botaoVoltar').innerHTML = 'Voltar'

        //dialog de sucesso
        $('#modalRegistraDespesa').modal('show')

        ano.value = ''
        mes.value = ''
        dia.value = ''
        tipo.value = ''
        descricao.value = ''
        valor.value = ''

    } else {

        document.getElementById('titulo').innerHTML = 'Erro na gravação'
        document.getElementById('cadastroCor').className = 'modal-header text-danger'
        document.getElementById('cadastro').innerHTML = 'Existem campos obrigatórios que não foram preenchidos'
        document.getElementById('botaoVoltar').className = 'btn btn-danger'
        document.getElementById('botaoVoltar').innerHTML = 'Voltar e corrigir'

        //dialog de erro
        $('#modalRegistraDespesa').modal('show')
    }
}
/*function gravar(d) {//transformando objeto literal em JSON
    localStorage.setItem('despesa', JSON.stringify(d))/*setItem()retorna 2 parâmetros, um nome e um valor
        quando passado 'chave' e 'valor', irá adicionar esta chave ao storage, ou atualizar o valor caso a chave já
        exista. ESSE MÉTODO GUARDA APENAS A INFORMAÇÃO DO ÚLTIMO REGISTRO CRIADO
}*/

function carregaListaDespesas(despesas = [], filtro = false) {/*
recebe um array pois quando funçãoi é chamada pelo onload napágina html, relação de despesas a serem 
apresentadas no tbody da tabela não destão sendo passada*/

    if (despesas.length == 0 && filtro == false) {
        despesas = bd.recuperarTodosRegistros()//Operador ponto(.) – utilizado para chamar métodos, funções, etc.
    }/*caso despesas esteja vazio e filtro seja false, serão recuperados todos os registros, senão 
    será exibido o novo registro*/

    //selecionando elemento tbody da tabela
    let listaDespesas = document.getElementById('listaDespesas')
    listaDespesas.innerHTML = ''
    /*informações da tabela são removidas e é adicionado apenas o elemento criado, e quando removidos 
    dados do novo elemento, os outros elementos reaparecem*/

    //percorrer o array despesas, listando cada despesa de forma dinâmica
    despesas.forEach((d) => {

        //criando a linha(tr)
        let linha = listaDespesas.insertRow()//cria linhas 

        //criar colunas*(td)
        //essa coluna está sendo criada, no momento em que cada item está sendo percorrido
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`

        //ajustar o tipo
        switch (d.tipo) {
            case '1': d.tipo = 'Alimentação'
                break
            case '2': d.tipo = 'Educação'
                break
            case '3': d.tipo = 'Lazer'
                break
            case '4': d.tipo = 'Saúde'
                break
            case '5': d.tipo = 'Transporte'
                break
        }//exibindo na aba consulta, os valores de string tipos

        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor

        //criar o botão de exclusão
        let btn = document.createElement("button")//criando elemento botão
        btn.className = 'btn btn-danger'
        btn.innerHTML = <i class='fas fa-times'></i>
        btn.id = `id_despesa_ ${d.id}`//passando a informação do id para os botões
        btn.onclick = () => {
            //remover a despesa
            this.id

            let id = this.id.replace('id_despesa_','')

            //alert (id)
            bd.remover(this.id)
            window.location.reload()
        }
        linha.insertCell(4).append(btn)//inserindo uma 4°coluna na linha
        //append - inclusão do elemento dentro da coluna baseada na linha

        console.log(d)
    })
}

function perquisarDespesa() {
    let ano = document.getElementById('ano').value/*recuperado apenas valor, sem a exibição do
    determinado elemento*/
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)/*atribuição de elementos da Class
    Despesa na variável(let) despesa*/
    /*como eu só quero recuperar o valor e não oque há dentro dos elementos, basta citar variáve is
    que contém os values e não as referências*/

    let despesas = bd.pesquisar(despesa)//retornando filter feito na Class Bd, atribuída a variável bd

    carregaListaDespesas(despesas, true)//passando despesas recuperadas no método pesquisar 
}