/*
 * CONFIG BABEL(NÃO MAIS NECESSÁRIA) 
 * 
 */
/*Load Babel
    <!-- v6 <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"
    <!-- Your custom script here*/
//<script type="text/babel"> 
const getMessage = () => "Hello World";
document.getElementById('output').innerHTML = getMessage();
//</script>

/*
 
var e let
 
*/
let serie = 'Friends'

{
    let serie = 'The Walking Dead'/*será exibido 'The Walinkg Dead' primeiro, pois o escopo de bloco 
        é mais específico*/
    console.log('dentro do bloco: ' + serie)
}
console.log('fora do bloco: ' + serie)

/**
 * 
 *  CONST
 
*/

/*escopo global não afeta escopo da função, então caso seja preciso criar uma variável na função com o mesmo 
    nome da variável global, não há problemas*/
//não é possível atribuir outro valor a essa variável em outro momento do código

//const serie = 'Friends' - COMENTADO POR QUESTÕES DE ERRO NO CÓDIGO

function x() {
    const serie = 'The Walking Dead'
    console.log('dentro da função: ' + serie)
}
x()

console.log('escopo global: ' + serie)

/**
 * 
 * TEMPLATE STRING
 
*/
let nome = 'Jorge'

//console.log('Oi' + nome + 'tudo bem?')//modo errado
/*console.log(` 
Oi ${nome},
tudo bem?`)//pode-se facilmente, sem nenhum comando pular linha*/
//console.log(`7 + 7 = ${7+7}`)//pode-se adicionar uma expressão

function calcular(x, y) {
    return x * y
}

console.log(`A multiplicação de 8 x 8 é: ${calcular(8, 8)}`)/*é possível interpolar uma função,
        e adicionar parâmetros*/


/**
 * 
 *  FUNÇÕES DEFAULT
 * 
 */
function contarUmaHistoria(personagem = 'Fubá', atividade = 'Correr no parque', nome_dono = 'João') {
    document.write(`Era uma vez um cachorro chamado ${personagem}, ele adorava ${atividade}, seu dono era o ${nome_dono} e eles viveram feliz para sempre`)
}
/*com o default, parâmetros não precisam ser chamados junto com a função para funcionarem, porém,
nada impede que sejam definidos parâmetros, para assim, os valores default tenham novos parâmetros*/

//contarUmaHistoria('Repolho', 'Enterrar Ossos', 'Pedro')//mudança de parâmetros

contarUmaHistoria(undefined, 'Enterrar Ossos', 'Pedro')
/*caso não precise ou não de interesse definir um novo parâmetro para um ou mais dos mesmos, é só colocar no
lugar do parâmetro *undefined*, isso fará que seja retornado o parâmetro default*/


/**
 * 
 * FUNÇÕES - ARROW FUNCTION
 * 
 */
/*
        let quadrado = function(x = 5) {           --normal function
            return x * x //calculando o quadrado de um número
        }*/

/*não é mais necessário utilizar o termo function, basta colocar o valor entre parênteses
=> - o termo function saiu desse sinal, que se torna uma arrow(flecha)*/
/*caso apenas um parâmetro esteja sendo passado para essa função, não é necessário utilizar parênteses,
porém, se não estiver sendo exibido parâmetro nenhum ou mais de um, é necessário utilizar os parênteses*/

/*let quadrado = (x) => {           //--arrow function 
    return x * x
}*/

//let quadrado = x => x * x           //--arrow function
/*quando há apenas uma instrução de retorno, ou seja, não há um bloco de lógica, não é necessária a 
utilização de return e nem de abre e fecha parênteses, basta simplismente, colocar a instrução a
ser retornada*/
//document.write( quadrado())//exibindo uma função sem parâmetros

/*let parOuImpar = function(numero) {//se é par,  resto da divisão é 0, se é ímpar, resto da divisão é > 0
    
    if (numero %  2 === 0){
        return 'par'
    } else {
        return 'ímpar'
    }
}*/

let parOuImpar = numero => numero % 2 === 0 ? 'par' : 'ímpar' //return implícito
//se é par,  resto da divisão é 0, se é ímpar, resto da divisão é > 0

document.write(parOuImpar(4))

/**
 * 
 * ORIENTAÇÃO A OBJETOS
 * Pilar da Abstração
 */

//class - modelo do objeto
//objeto - instância do modelo

class ContaBancaria {
    //agencia
    //numeroConta
    //saldo
    //limite
    constructor() {
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 50
        this.limite = 450
    }//this - faz com que um atributo seja conectado ao contexto do objeto

    depositar(valorDeposito) {
        this.saldo += valorDeposito
    }
    sacar(valorSaque) {
        this.saldo -= valorSaque
        //mesmo que: this.saldo = this.saldo - valorSaque
    }
    consultarSaldo() {
        return this.saldo
    }
}

let x = new ContaBancaria()//indica pro javascript que a classe tem que se tornar um objeto
let y = new ContaBancaria()

console.log(x.consultarSaldo())
//o ponto(.) nos permite acessar atributos e métodos dos objetos
x.depositar(450)
console.log(x.consultarSaldo())
x.sacar(200)
console.log(x.consultarSaldo())

console.log(y.consultarSaldo())

/**
 * Pilar da Abstração Reflexão
 * 
 */
//um software de marcenaria
//cadeira e sofa - objetos envolvidos

//paradigma procedural

/*cadeira
let qtd_pernas = 4
let giratoria = false
let cor = 'azul'*/

//array de cadeiras
let cadeiras = Array()
cadeiras[0] = Array()
cadeiras[0]['qtde_pernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = 'azul'

cadeiras[1] = Array()
cadeiras[1]['qtde_pernas'] = 1
cadeiras[1]['giratoria'] = true
cadeiras[1]['cor'] = 'vermelha'

function girar_cadeira(indice) {
    if (cadeiras[indice]['giratoria'] === true) {
        console.log('girou')
    } else {
        console.log('cadeira não é giratória')
    }
}

function adicionar_cadeira(qtde_pernas, giratoria, cor) {
    let cadeira = []

    cadeira['qtde_pernas'] = qtde_pernas
    cadeira['giratoria'] = giratoria
    cadeira['cor'] = cor

    cadeira.push(cadeira)
}
adicionar_cadeira(3, false, 'verde')

console.log(cadeiras)
//girar_cadeira(0)

//paradigma de OO 
class Cadeira {
    constructor(qtde_pernas, giratoria, cor) {
        this.qtde_pernas = qtde_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira() {
        if (this.giratoria === true) {
            console.log('girou')
        } else {
            console.log('Cadeira não é giratória')
        }
    }
}
// let cadeira = new Cadeira(4, false, 'azul')
// let cadeira2 = new Cadeira(1, true, 'vermelha')

let cadeiras = Array()
cadeiras.push(new Cadeira(4, false, 'azul'))
cadeiras.push(new Cadeira(1, true, 'vermelha'))
// console.log(cadeira)
//cadeira2.girarCadeira()

cadeira2.girarCadeira()

/**
 * PILAR DO ENCAPSULAMENTO
 * 
 */

class Tv {
    constructor() {
        this._relacaoCanais = [2, 4, 5, 7, 10]//underline restringe o acesso do atributo ao objeto
        this._canalAtivo = 5
        this._volume = 5
    }

    //getters e setters
    get canalAtivo() {/*se criado um get, automaticamente o interpretador do js, sabe-se que é preciso procurar
        uma função com tal descrição, portanto, é uma pseudovariável*/
        return this._canalAtivo
    }//modo certo de acessar um atributo privado
    set canalAtivo(canal) {/*define uma função com o mesmo nome do atributo, em que pode-se recuperar um 
        parâmetro, nesse exemplo (canal), esse parâmetro atualizará o atributo em questão*/

        if (this._relacaoCanais.indexOf(canal) !== -1)
            /*indexOf() irá verificar se dentro do array "relacaoCanais", 
            há uma referência para o (canal) se valor for encontrado, retornará o índice do valor, se não, irá 
            retornar -1*/
            console.log(x)
        this._canalAtivo = canal
    }
}/*ao invés de acessar o atributo diretamente do objeto, está sendo indicado, através de uma convenção,
 que esse atributo é privado e a regra de acesso a ele precisa ser respeitada*/

let tv = new Tv()

tv._canalAtivo = 7// atribuindo valor a pseudovariável canalAtivo
console.log(tv._canalAtivo) /*- atributo ainda pode ser acessado assim, porém, quando coloca-se
o underline, sugere-se que o programador, não tente acessar o objeto dessa forma.

o ideal, seria acessá-lo com o método GET, que retorna o atributo para nós*/

/**
 * PILAR DA HERANÇA
 */

class Animal {
    constructor() {
        this.cor = ''
        this.tamanho = null
    }

    dormir() {
        console.log('Dormir')
    }
}

class Cachorro extends Animal {
    constructor() {
        super()
        this.orelha = 'Grandes e caídas'
    }

    correr() {
        console.log('Correr')
    }
    rosnar() {
        console.log('Rosnar')
    }
}

class Passaro extends Animal {
    constructor() {
        super()
        this.bico = Curto
    }

    falar() {
        console.log('Falar')
    }
}

class Papagaio extends Passaro {
    constructor() {
        super()
        this.sabeFalar = true
    }
}

let cachorro = new Cachorro() //instância da base cachorro, baseada no modelo Cachorro, criando assim um objeto
let passaro = new Passaro()
let papagaio = new Papagaio()
//uso incorreto dos caracteres(letras maiúsculas e minúsculas podem gerar erros)


console.log(cachorro)
console.log(passaro)
console.log(papagaio)

/**
 * 
 * OPERADOR SUPER
 * 
 */
class Animal {
    constructor(cor, tamanho, peso) {
        this.cor = null
        this.tamanho = null
        this.peso = null
    }

    dormir() {
        console.log('Dormir')
    }
}

class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) {
        super(cor, tamanho, peso)
        this.bico = bico
    }

    voar() {
        console.log('Voar')
    }
}

class Papagaio extends Passaro {
    constructor(sabeFalar, cor, tamanho, peso) {
        super('Médio', cor, tamanho, peso)
        this.sabeFalar = null
    }

    falar() {
        console.log('Falar')
    }
}

let papagaiO = new Papagaio(true, 'Verde', 25, 350)
console.log(papagaio)

let papagaio2 = new Papagaio(false, 'Branco', 10, 80)
console.log(papagaio)

/**
 * PILAR POLIMORFISMO
 */
class Animal {
    constructor(cor, tamanho, peso) {
        this.cor = null
        this.tamanho = null
        this.peso = null
    }

    dormir() {
        console.log('Dormir')
    }
}

class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) {
        super(cor, tamanho, peso)
        this.bico = bico
    }

    voar() {
        console.log('Voar')
    }
}

class Papagaio extends Passaro {
    constructor(sabeFalar, cor, tamanho, peso) {
        super('Médio', cor, tamanho, peso)
        this.sabeFalar = null
    }

    falar() {
        console.log('Falar')
    }
}

class Avestruz extends Passaro {
    constructor() {
        super('Grande', 'Branco e preto', 250, 15000)
    }

    enterrarCabeca() {
        console.log('Enterrar a cabeça')
    }
    voar() {
        console.log('Não sabe voar')
    }
}

let Papagaio = new Papagaio(true, 'Verde', 25, 350)
console.log(papagaio)

let avestruz = new Avestruz()
avestruz.enterrarCabeca()


/*
*   OBJETOS LITERAIS
*/

class Produto {
    constructor(descricao, preco) {
        this.descricao = descricao
        this.preco = preco
    }

    verDescricao() {
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

produto = new Produto('Nootebook', 2200)
produto.verDescricao()

//----------------------------

let produtoLiteral = {
    descricao: 'Geladeira',
    preco: 1800,
    verDescricao: function () {
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}
/*Para definir que é um objeto literal, é necessário ter:
- abertura e fechamento de chaves
- pares de nome, atributo ou chave e valor (nome-atributo/método)-no caso de um método o valor é uma função
(ação executada pelo método)
- esses pares funcionam como atributos do objeto
- esses conjuntos de nome e valor, são separados por uma vírgula, isso é o que indica que aquele par terminou
- nome e valor são separados por dois pontos
- é necessário indicar que uma função como function() depois dos dois pontos
- não é necessário um procedimento de instância, pois objeto já esta descrito
*/

//acessar objeto
produtoLiteral.verDescricao()

//----------------------------------------as vezes não é necessário classes e usar um objeto literal facilita
/*formulario -> servidor
    recupera dados e monta um objeto Literal
        obj literal -> JSON -> HTTP -> Server -> Armazena*/

//JSON é algo diferente de obj literal.

/****
 * OBJETOS LITERAIS - MELHORIAS NOTAÇÃO
 */

//consiste em deixar objetos menos verbosos: (valor será interpretado nas variáveis declaradas inicialmente)

let objeto2 = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo() {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}

//pode-se mudar o nome da variável que será exibido valor dentro do objeto
//nomeTeste - this.nomeTeste

console.log(objeto2)
objeto.exibirResumo()


/**
 * OBJETO LITERAL - MODIFICANDO VALORES
 */

let pessoa = {
    nome: 'José',
    idade: 45
}

console.log(pessoa)

pessoa.nome = 'Fernanda'
pessoa.idade = 32

console.log(pessoa.nome)
console.log(pessoa.idade)


/**
 * OBJETO LITERAL - INCLUSAO DE ATRIBUTOS E MÉTODOS
 */

let pessoa = {
    nome: 'Maria',
    idade: 25
}

console.log(pessoa)

//-------------------

pessoa.sexo = 'Feminino'

console.log(pessoa)

pessoa.dizerOi = () => console.log('Olá, tudo bem?')

//inclusão de atributo e método dentro de obj literais



/**
 * OBJETO LITERAL - MODIFICANDO VALORES
 */

let pessoa = {
    nome: 'José',
    idade: 45
}

console.log(pessoa)

pessoa.nome = 'Fernanda'
pessoa.idade = 32

console.log(pessoa.nome)
console.log(pessoa.idade)

/**
 * OBJETO LITERAL - CRIAÇÃO DINÂMICA DE PARES NOME/VALOR
 */

let nomeE = 'Jorge' //document.getElementById('nome').value
let idade = 29
let sexo = 'Masculino'
let profissao = 'Programador'

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function () {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}

console.log(objeto)
objeto.exibirResumo()

//------------------------
//consiste em deixar objetos menos verbosos: (valor será interpretado nas variáveis declaradas inicialmente)

let objeto0 = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo() {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}

//pode-se mudar o nome da variável que será exibido valor dentro do objeto
//nomeTeste - this.nomeTeste

console.log(objeto2)
objeto.exibirResumo()

/**
 * OBJETO LITERAL - OBJETOS ÚNICOS
 */
let assinatura = {
    idCliente: 1000,
    descricao: 'Acesso a internet',
    status() {
        console.log('Ativo')
    }
}

console.log(assinatura.descricao)

/*variável y, irá conter mesmos atributos e método que variável assinatura, funciona de forma contrária
a herança
os atributos e métodos, poderão ser acessados pela var 'y' ou 'assinatura', pois as duas
contém os mesmos valores*/
let y = assinatura
console.log(y.descricao)

///
y.descricao = 'Internet + tv + telefone'

console.log(assinatura.descricao)
console.log(y.descricao)
//o console das duas variáveis resultarão na mesma coisa