// Aqui vamos explicar como tipar funções em TypeScript.

// Uma função normal:

function soma(a: number, b: number): number {
    //         ^          ^        ^
    //         |          |        | Retorno da função é do tipo number
    //         |          |
    //         |          | Parâmetro b é do tipo number
    //         |        
    //         | Parâmetro a é do tipo number
    //              

    return a + b
}

// Uma função que não retorna nada:
function imprimeSoma(a: number, b: number): void {
    //                                    ^
    //                                    | Retorno da função é void (não retorna nada)
    console.log(a + b)
}

// Uma função que retorna um array de números:
function criaArray(numero: number): number[] {
    //                            ^
    //                            | Retorno da função é um array de números
    return [1, 2, 3, numero]
}

// Uma função que retorna um objeto:
function criaObjeto(numero: number): { numero: number, descricao: string } {
    //                             ^         ^                  ^
    //                             |         |                  | Propriedade descricao do objeto é do tipo string
    //                             |         | Propriedade numero do objeto é do tipo number
    //                             | Retorno da função é um objeto, com as propriedades numero e descricao

    return { descricao: 'objeto criado por marucs', numero: numero }
}

// Uma função que retorna outra função:
function criaFuncao(): () => void {
    //               ^         ^
    //               |         | Retorno da função é uma função que não recebe parâmetros e não retorna nada
    //               | 
    //               | Retorno da função é uma função (que não recebe parâmetros e não retorna nada)
    return function() { // Função que não recebe parâmetros e não retorna nada
        console.log('função criada por marcus')
    }
}

// Como tipar arrow functions:
const somaArrow = (a: number, b: number): number => a + b

// Como tipar funções que recebem funções como parâmetro:
function executaFuncao(fn: () => void): void {
    fn()
}

// Funções que retornam tuplas:
function retornaTupla(): [number, string] {
    return [1, 'marcus']
}

// Funções que recebem tuplas:
function recebeTupla(tupla: [number, string]): void {
    console.log(tupla)
}

// Funções que recebem tuplas e retornam tuplas:
function inverteTupla(tupla: [number, string]): [string, number] {
    return [tupla[1], tupla[0]]
}
