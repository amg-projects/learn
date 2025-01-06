// Como faremos os exercícios?
// Eu preparei algumas linhas de código que precisam ser tipadas.
// Atualmente elas estão dando erro de compilação, pois estão sem tipo.
// Sua missão é adicionar os tipos necessários para que o código compile com sucesso.

// Exemplo:
// Antes do exercício: (Erro de compilação)
function exercicio1(name): string {
    // ...
    return `Olá, ${name}`;
}

// Depois do exercício: (Código corrigido)
function exercicio1Resolvido(name: string): string {
    // ...
    return `Olá, ${name}`;
}

// --------------------------------------------------------------------------------------------

// Resolva os erro de tipagem das linhas abaixo
// Exercício 1
function adicionaSaudacao(name): string {
    return `Olá, ${name}`;
}

// Exercício 2
function soma(a, b): number {
    return a + b;
}

// Exercício 3 (dica: veja os testes para entender qual o tipo do elemento)
function getArrayLength(lista): number {
    return lista.length;
}

// Exercício 4
type User = { name: string, age: number };
function getUserName(user): string {
    return user.name;
}

// Testes: não apague as linhas abaixo
adicionaSaudacao('Marcus') === 'Olá, Marcus';   
soma(1, 2) === 3;
getArrayLength(['a', 'b', 'c']) === 3;
getUserName({ name: 'Marcus', age: 26 }) === 'Marcus';

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// SPOILERS --- SPOLIERS --- SPOILERS --- SPOILERS --- SPOILERS --- SPOILERS --- SPOILERS
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------






// Para ter certeza que estão certos, verifique as linhas abaixo (lembre-se de instalar a extensão recomendada)
adicionaSaudacao // =>
// Correto:           function adicionaSaudacao(name: string): string

soma // =>
// Correto: function soma(a: number, b: number): number

getArrayLength // =>
// Correto:         function getArrayLength(lista: string[]): number

getUserName // =>
// Correto:       function getUserName(user: User): string

// Se você fez todos os exercícios, parabéns!