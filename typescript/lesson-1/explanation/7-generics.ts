
function pegaPrimeiroElemento(numeros: number[]): number {
    return numeros[0]
}

const resultado1 = pegaPrimeiroElemento([1, 2, 3, 4, 5]) // Pega o primeiro elemento do array: 1
//

// Essa função é uma função bem simples, que retorna o primeiro item do array
// Ela não depende de ser um array de números, poderia ser um array de qualquer coisa
// Mas nós limitamos o tipo do array para números, então a função só aceita arrays de números

// Uma solução que você pode pensar é criar uma função para cada tipo de array que você quer pegar o primeiro elemento

function pegaPrimeiroElementoString(strings: string[]): string {
    return strings[0]
}

function pegaPrimeiroElementoBooleanos(booleanos: boolean[]): boolean {
    return booleanos[0]
}

// E assim por diante
// Mas isso é muito repetitivo e não é escalável (imagina usar isso num tipo DSFU, ou num tipo de objeto que você criou ontem)
// Impossível, né?
// Então você pode tentar recorrer ao tipo any ou o tipo unknown

function pegaPrimeiroElementoAny(any: any[]): any {
    return any[0]
}

const elementos = [1, 2, 3, 4, 5]
        // ^?
const resultado = pegaPrimeiroElementoAny(elementos) 
        // ^?                              

// Perceba que o resultado acabou ficando any. Perdemos toda a tipagem que tínhamos antes

// A solução para esse problema é usar generics
// AVISO: Generics são um conceito mais avançado, então não se preocupe se não entender de primeira
function pegaPrimeiroElementoGenerics<T>(array: T[]): T {
    return array[0]
}

const elementos2 = [1, 2, 3, 4, 5]
        // ^?
const resultado2 = pegaPrimeiroElementoGenerics(elementos2)
        // ^?

// Perceba que o resultado é number, e não any
// Ou seja, o TypeScript manteve a tipagem do array que passamos como parâmetro
// Isso é muito útil quando você quer manter a tipagem de um array, mas não sabe qual é o tipo do array


// Exemplo de uso de generics com objetos
function pegaPrimeiroNome<T>(objeto: T): string {
    return objeto.nome // Temos um erro aqui, porque o TypeScript não sabe que o objeto tem a propriedade nome
}


// Para resolver esse problema, podemos usar generics, porém restritos a um tipo que tenha a propriedade nome
// Para isso, usamos o extends
function pegaPrimeiroNomeGenerics<T extends { nome: string }>(objeto: T): string {
    // T PRECISA ser um objeto que tenha a propriedade nome
    return objeto.nome
}

// Por exemplo, esse objeto não tem a propriedade nome  
const objeto = {
    idade: 10
}

// Se passarmos esse objeto para a função, o TypeScript vai reclamar
pegaPrimeiroNomeGenerics(objeto) // Vai dar erro

// Mas se passarmos um objeto que tenha a propriedade nome, o TypeScript vai aceitar
const objeto2 = {
    nome: 'José',
    idade: 10
}

const resultado3 = pegaPrimeiroNomeGenerics(objeto2) // Vai aceitar
        // ^?

