import { runTests } from '../../_apoio'

function average(numbers: number[]): number {
    if (numbers.length === 0) return 0
    return numbers.reduce((s, a) => s + a, 0) / numbers.length
}

runTests('', [
    { input: [], expectedOutput: 0 },
    { input: [1,2,3,4], expectedOutput: 2.5 },
    { input: [1,1,1,1], expectedOutput: 1 },
    { input: [-1,0,1], expectedOutput: 0 },
    { input: [10,20,30], expectedOutput: 20 },
    { input: [1,2,3,4,5,6,7,8,9,10], expectedOutput: 5.5 },
    { input: [1,2,3,4,5,6,7,8,9,10,11], expectedOutput: 6 },
    { input: new Array(100).fill(1), expectedOutput: 1 },
    { input: new Array(100).fill(1).map((_, i) => i), expectedOutput: 49.5 },
], average)