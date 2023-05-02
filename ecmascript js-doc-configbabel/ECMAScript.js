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
//-------------------------------------------------------------------------------------------
/**
 * VAR E LET
 */
//3 escopos: global, função e bloco
//variáveis declaradas do global, está disponível para todos, basicamente é o objeto window
//variáveis declarada na função só funcionará dentro da mesma e dentro do bloco da função
//variáveis declaradas com var podem ser utilizadas até antes da sua declaração
//enquanto variáveis declaradas com let só funcionará depois de sua declaração
/*os únicos escopos que sofrem elevação, e tem comportamento diferente em relação a var e let,
são os escopos de bloco*/

/*var serie = 'Friends'

{
    var serie = 'The Walking Dead'
    console.log('dentro do bloco: ' + serie)
}//será exibido 'The Walinkg Dead'
console.log('fora do bloco: ' + serie)
*/

let serie = 'Friends'

{
    let serie = 'The Walking Dead'/*será exibido 'The Walinkg Dead' primeiro, pois o escopo de bloco 
            é mais específico*/
    console.log('dentro do bloco: ' + serie)
}
console.log('fora do bloco: ' + serie)

//-------------------------------------------------------------------------------------------
/**
 * CONST
 */
/*escopo global não afeta escopo da função, então caso seja preciso criar uma variável na função com o mesmo 
        nome da variável global, não há problemas*/
//não é possível atribuir outro valor a essa variável em outro momento do código

const seriee = 'Friends'

function x() {
    const serie = 'The Walking Dead'
    console.log('dentro da função: ' + seriee)
}
x()

console.log('escopo global: ' + seriee)

//-------------------------------------------------------------------------------------------
/**
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

//-------------------------------------------------------------------------------------------
/**
 * FUNÇÕES PARÂMETROS DEFAULT
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

//-------------------------------------------------------------------------------------------
/**
 * FUNÇÕES - ARROW FUNCTION
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

//-------------------------------------------------------------------------------------------
/**
 * ORIENTAÇÃO A OBJETOS - PILARES - ABSTRAÇÃO
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

//-------------------------------------------------------------------------------------------
/**
 * ORIENTAÇÃO A OBJETOS - PILARES - ABSTRAÇÃO-REFLEXÃO
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
cadeiras[0]['qtde_pernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = 'azul'

cadeiras[1] = Array()
cadeiras[1]['qtde_pernas'] = 1
cadeiras[1]['giratoria'] = true
cadeiras[1]['cor'] = 'vermelha'

function girar_cadeira(indice) {
    if (cadeiras[indice]['giratoria'] === true) {

        //cadeira e sofa

        //paradigma procedural

        //cadeira
        let qtd_pernas = 4
        let giratoria = false
        let cor = 'azul'

        function girar_cadeira() {
            if (giratoria === true) {
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
        girar_cadeira()
    }
}

//-------------------------------------------------------------------------------------------
/**
 * ORIENTAÇÃO A OBJETOS - PILARES - ENCAPSULAMENTO
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

//-------------------------------------------------------------------------------------------
/**
 * ORIENTAÇÃO A OBJETOS - PILARES - HERANÇA
 */
class Animal {
    constructor() {
        this.cor = ''
        this.tamanho = null
        this.peso = null
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

//-------------------------------------------------------------------------------------------
/**
 * OPERADOR SUPER
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

let papagaioo = new Papagaio(true, 'Verde', 25, 350)
console.log(papagaioo)

let papagaio2 = new Papagaio(false, 'Branco', 10, 80)
console.log(papagaio)

//-------------------------------------------------------------------------------------------
/**
 * ORIENTAÇÃO A OBJETOS - PILARES - POLIMORFISMO
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

let papagaio1 = new Papagaio(true, 'Verde', 25, 350)
console.log(papagaio1)

let avestruz = new Avestruz()
avestruz.enterrarCabeca()

//-------------------------------------------------------------------------------------------
/**
 * OBJETOS LITERAIS - ESTÁTICOS
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
- não é necessário um procedimento de instância, pois objeto já esta descrito
*/

//acessar objeto
produtoLiteral.verDescricao()

//----------------------------------------as vezes não é necessário classes e usar um objeto literal facilita
/*formulario -> servidor
    recupera dados e monta um objeto Literal 
        obj literal -> JSON -> HTTP -> Server -> Armazena*/

//JSON é algo diferente de obj literal.

//-------------------------------------------------------------------------------------------
/**
 * OBJETOS LITERAIS - MELHORIAS DE NOTAÇÃO
 */
let nomee = 'Jorge' //document.getElementById('nome').value
let idade = 29
let sexo = 'Masculino'
let profissao = 'Programador'

let objeto = {
    nomee: nomee,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function () {
        console.log(`${this.nomee}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}

console.log(objeto)
objeto.exibirResumo()

//------------------------
//consiste em deixar objetos menos verbosos: (valor será interpretado nas variáveis declaradas inicialmente)

let objeto2 = {
    nomee,
    idade,
    sexo,
    profissao,
    exibirResumo() {
        console.log(`${this.nomee}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}

//pode-se mudar o nome da variável que será exibido valor dentro do objeto
//nomeTeste - this.nomeTeste

console.log(objeto2)
objeto.exibirResumo()

//-------------------------------------------------------------------------------------------
/**
 * OBJETOS LITERAIS - MODIFICANDO VALORES
 */
let pessooa = {
    nome: 'José',
    idade: 45
}

console.log(pessooa)

pessooa.nome = 'Fernanda'
pessooa.idade = 32

console.log(pessooa.nome)
console.log(pessooa.idade)

//-------------------------------------------------------------------------------------------
/**
 * OBJETOS LITERAIS - CRIAÇÃO DINÂMICA DE PARES NOME/VALOR
 */
let pessoaa = {
    nome: 'Maria',
    idade: 25
}

console.log(pessoaa)

//-------------------

pessoaa.sexo = 'Feminino'

console.log(pessoa)

pessoaa.dizerOi = () => console.log('Olá, tudo bem?')

//inclusão de atributo e método dentro de obj literais


//-------------------------------------------------------------------------------------------
/**
 * OBJETOS LITERAIS - OBJETOS ÚNICOS
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
let y1 = assinatura
console.log(y1.descricao)

///
y1.descricao = 'Internet + tv + telefone'

console.log(assinatura.descricao)
console.log(y1.descricao)
//o console das duas variáveis resultarão na mesma coisa

//-------------------------------------------------------------------------------------------
/**
 * FUNÇÃO CONSTRUTORA - CRIANDO OBJETOS
 */
//estrutura semelhante a de Classe
let Carro = () => {
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = () => {
        //this.velocidadeAtual += 10

        let velocidade = this.getVelocidadeAtual() + 10
        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = () => {
        return this.velocidadeAtual
    }
    this.setVelocidadeAtual = (velocidadeAtual) => {
        this.velocidadeAtual = velocidadeAtual
    }
}

let carro = new Carro()//semelhante a como é feita a criação de objetos a partir de classe

console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
carro.acelerar()
carro.acelerar()
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)

//-------------------------------------------------------------------------------------------
/**
 * FUNÇÕES CONSTRUTORAS - ENCAPSULANDO ATRIBUTOS E MÉTODOS
 */
let Carroo2 = () => {
    /*não há a função constructor() por não ser uma notação baseada em classe e sim uma função que vai ser
    construída a partir do operador new*/
    this.velocidadeMaxima = 180

    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0

    this.acelerar = () => {
        let velocidade = this.getVelocidadeAtual() + 50
        if (velocidade > this.velocidadeMaxima) {
            velocidade = this.velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = () => {
        return this.velocidadeAtual
    }
    this.setVelocidadeAtual = (velocidadeAtual) => {
        this.velocidadeAtual = velocidadeAtual
    }
}

let carro2 = new Carro()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)

//-----------------------------------------

let Carro2 = () => {

    this.velocidadeMaxima = 180
    this.quilometrosRodados = 0

    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0

    this.acelerar = () => {
        let velocidade = this.getVelocidadeAtual() + 50
        if (velocidade > this.velocidadeMaxima) {
            velocidade = this.velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)

        quilometrosRodados += 0.05
        console.log(qui)
    }

    this.getVelocidadeAtual = () => {
        return this.velocidadeAtual
    }
    this.setVelocidadeAtual = (velocidadeAtual) => {
        this.velocidadeAtual = velocidadeAtual
    }

    var setQuilometrosRodados = (q) => {
        quilometrosRodados += q
    }
}

let carroo2 = new Carro()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)

//-------------------------------------------------------------------------------------------
/**
 * FUNÇÕES FACTORY
 */
//requisição http
//resposta http
let Bicicleta1 = {
    cor: 'Branca',
    marcha: 'única',
    aro: 12,
    pedalar() { console.log('Método pedalar executado') }
}

let Bicicleta2 = {
    cor: 'Vermelha',
    marcha: '18',
    aro: 26,
    pedalar() { console.log('Método pedalar executado') }
}

console.log(Bicicleta1)
console.log(Bicicleta2)

//variável que recebe uma função
let BicicletaFactory = (cor, marcha, aro) => {
    //lógica//requisição http //resposta http
    /*sempre que essa função for chamada, ela irá retornar um objeto que vai ser constituído a 
    partir das instruções acima*/
    return {
        cor,
        marcha,
        aro,
        tipoPedal,
        pedalar() { console.log('Método pedalar executado') }
    }
}

let Bicicleta3 = BicicletaFactory('Vermelha', '18', 26)
console.log(Bicicleta3)
//passando o valor retornado da função para uma variável, mudando seus respectivos valores.
//seria útil numa situação de ter uma grande quantidade de coisas iguas com valores diferentes.
//ao invés da repetição, aconteceria a construção dessa lógica em um ponto único, fazendo com que tenha menos linhas de código
let Bicicleta4 = BicicletaFactory('Preta', '21', 29)
console.log(Bicicleta4)

console.log(`Cor: ${Bicicleta3.cor}`)
Bicicleta3.pedalar()

//-------------------------------------------------------------------------------------------
/**
 * PROTOTYPE INTRO
 */
//aviao
//atributos cor e modelo; método levantarVoo

//objetoliteral
let a1 = {
    cor: branco,
    modelo: 'Airbus a380',
    levantarVoo: () => { console.log('Levantar Voo') }
}
//função construtora
let AviaoF = () => {
    this.cor = 'Azul',
        this.modelo = 'Boeing 787',
        this.levantarVoo = () => { console.log('Levantar Voo') }
}
let a2 = new AviaoF()

//classe
class AviaoC {
    constructor() {
        this.cor = 'Vermelho',
            this.modelo = 'Embraer E-Jets'
    }

    levantarVoo() { console.log('Levantar Voo') }
}

let a3 = new AviaoC()

console.log(a1)
console.log(a2)
console.log(a3)

//-------------------------------------------------------------------------------------------
/**
 * PROTOTYPE - HERANÇA
 */

//na essência, todos são filhos de: Object.protoype
let animal = { attr1: 'a' }//attr-atributo
let vertebrado = { __proto__: animal, attr2: 'b' }
let ave = { __proto__: vertebrado, attr3: 'c' }// (__proto__: protótipo)-indicando o protótipo da variável ave

console.log(ave.attr3, ave.attr2, ave.attr1)

//-------------------------------------------------------------------------------------------
/**
 * OPERADOR REST/SPREAD PARTE 1
 */
//Contexto Spread

//string
let tituloArtigo = 'Como utilizar o operador rest/spread'

console.log(tituloArtigo)
console.log(...tituloArtigo)
console.log([...tituloArtigo])

//arrays
let listaCursos1 = ['Node JS e MongoDb', 'ES6, TypeScript e Angular 4']
let listaCursos2 = ['Multiplataforma Android/IOS', 'Introdução ao GNU/Linux']
let listaCursosCompleto = ['Web Completo', 'Android Completo', ...listaCursos1, ...listaCursos2]
//espalhará os arrays de modo aleatório

console.log(listaCursosCompleto)

//objetos
let pessoa = { nome: 'João', idade: 27 }
let clone = { endereco: 'Rua Abc', ...pessoa }

console.log(clone)//serão exibidos valores das duas variáveis, em ordem de definição


//-------------------------------------------------------------------------------------------
/**
 * OPERADOR REST/SPREAD PARTE 2
 */

//contexto rest

function soma(...param) {//fará com que seja retornado um único parâmetro em formato de array 
    let resultado = 0

    console.log(param)

    param.forEach(v => resultado += v)//soma dos parâmetros

    return resultado
}

console.log(soma(3, 8, 5, 7))

function multiplicacao(m, ...p) {
    //console.log(m) //m - multiplicador
    let resultado = 0
    //console.log(p) //quantidade de valores indefinidas que serão individualmente multiplicados pelo (m)

    p.forEach(v => resultado += m * v)//.forEach - executa uma dada função em cada elemento de um array.

    return
}

console.log(multiplicacao(5, 7, 12, 3, 49))

//-------------------------------------------------------------------------------------------
/**
 * DESTRUCTURING ASSIGNMENT PARTE 1
 */
//destructuring - operador de desestruturação - tira valores de dentro de uma estrutura(array ou objeto)
//contexto de array      
let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']

/*let a = frutas[0]
let b = frutas[0]
let c = frutas[0]*/

let [a, b, , c, d, e = 'Banana'] = frutas //no momento da desestruturação estão sendo declaradas variáveis novas
//lugar vazio indica que não queremos pular tal índice
//quando índice não existe, é recuperado um valor undefined
//caso não queira recuperar valor undefined, é só declarar no momento da desestruturação um valor para tal item
//console.log(a, b, c, d, e)

let coisas = [['Abacaxi', 'Uva', 'Pera', 'Mamão'], ['José', 'Maria']]
let [, [, n2]] = coisas

console.log(n2)

//-------------------------------------------------------------------------------------------
/**
 * DESTRUCTURING ASSIGNMENT PARTE 2
 */
//é um - aql obj é alguma coisa
//tem um(quando é o valor de outro obj) - tem um detalhe
let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: {
        fabricante: 'abc',
        modelo: 'xyz'
    }//composição
}

/* token
array => []
objeto => {}
*/
//let { descricao, preco } = produto

/*let {descricao: d, preco: p = 1000, desconto = 5} = produto/*desestruturando descricao e preco de dentro do produto, 
para serem usadas como d e p*/ //valor declarado aqui só retorna se for lido como undefined
//console.log(d, p, desconto)//p nao será retornado
//console.log(descricao, preco)

let { detalhes: { fabricante, modelo = 'Não informado' } } = produto
console.log(fabricante, modelo)

//-------------------------------------------------------------------------------------------
/**
 * DESTRUCTURING ASSIGNMENT PARTE 3
 */
//array

/*
let arr = [10, 20, 30, 40]

function teste([a,b, , c, d=100]) {
    console.log(a, b, c, d)
}

teste(arr)
*/
//objeto
let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

function teste({ a: x, d, z = 10 }) {
    console.log(x, d, z)
}

teste(obj)

//-------------------------------------------------------------------------------------------
/**
 * DESTRUCTURING ASSIGNMENT PARTE 4
 */

//array
/*let arr = [10,20,30,40]
 
 let [ a, ...resto ] = arr//'a' fica separado dos outros elementos do array
 console.log(a)
 console.log(resto)//resto poderia ter qualquer nome
 */

let obje = {
    a: 10, b: 20, c: 30, d: 40
}

let { aa, ...z } = obje
//'aa' foi desestruturado e outros atributos foram unificados dentro de um único obj(z)-poderia ter qlqr nome
//...-rest: pois está juntando valores
console.log(aa)
console.log(z)

