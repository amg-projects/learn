import { runTests } from '../_apoio'

type Operation = 'sum' | 'sub' | 'mult' | 'div'

type Params = {
    numberA: number,
    numberB: number,
    operation: string
}

/**
 * Essa função deve calcular uma operação matemática entre dois números `numberA` e `numberB` e retornar o resultado
 * @param numberA Número A
 * @param numberB Número B
 * @param operation Operação a ser realizada, podendo ser 'sum', 'sub', 'mult' ou 'div'
 * @example calculator({ numberA: 5, numberB: 5, operation: 'sum' }) // Deve retornar 10 (numberA + numberB)
 * @returns O resultado da operação
 */
function calculator({ numberA, numberB, operation }: Params): number {
    return -666 // Seu código aqui
}

// --- Não altere o código abaixo ---
// Testes do marucs, eles verificam se a sua função está funcionando corretamente
runTests('', [
    { input: { numberA: 5, numberB: 5, operation: 'sum' }, expectedOutput: 10 },
    { input: { numberA: 5, numberB: 5, operation: 'sub' }, expectedOutput: 0 },
    { input: { numberA: 5, numberB: 5, operation: 'mult' }, expectedOutput: 25 },
    { input: { numberA: 5, numberB: 5, operation: 'div' }, expectedOutput: 1 },
    { input: { numberA: 1, numberB: 0, operation: 'div' }, expectedOutput: Infinity },
    { input: { numberA: 0, numberB: 0, operation: 'div' }, expectedOutput: NaN },
    { input: { numberA: 0, numberB: 0, operation: 'sum' }, expectedOutput: 0 },
    { input: { numberA: 0, numberB: 0, operation: 'sub' }, expectedOutput: 0 },
    { input: { numberA: 0, numberB: 0, operation: 'mult' }, expectedOutput: 0 },
    ...Array(5).fill(0).map((_, i) => ({ input: { numberA: i, numberB: i + 1, operation: 'sum' }, expectedOutput: i + i + 1 })),
    ...Array(5).fill(0).map((_, i) => ({ input: { numberA: i, numberB: i + 1, operation: 'sub' }, expectedOutput: i - i - 1 })),
    ...Array(5).fill(0).map((_, i) => ({ input: { numberA: i, numberB: i + 1, operation: 'mult' }, expectedOutput: i * (i + 1) })),
    ...Array(5).fill(0).map((_, i) => ({ input: { numberA: i, numberB: i + 1, operation: 'div' }, expectedOutput: i / (i + 1) })),
], calculator)