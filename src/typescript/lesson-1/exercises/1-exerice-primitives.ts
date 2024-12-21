// Como faremos os exercícios?
// Eu preparei algumas linhas de código que precisam ser tipadas.
// Atualmente elas estão dando erro de compilação, pois estão sem tipo.
// Sua missão é adicionar os tipos necessários para que o código compile com sucesso.

// Exemplo:
// Antes do exercício:
function exercicio1(name) {
    // ...
}

// Depois do exercício:
function exercicio1Resolvido(name: string) {
    // ...
}

// --------------------------------------------------------------------------------------------

// Resolva os erro de tipagem das linhas abaixo
// Exercício 1
function adicionaSaudacao(name) {
    return `Olá, ${name}`;
}

// Exercício 2
function soma(a, b) {
    return a + b;
}

// Exercício 3
function getArrayLength(arr) {
    return arr.length;
}

// Exercício 4
type User = { name: string, age: number };
function getUserName(user) {
    return user.name;
}

// --------------------------------------------------------------------------------------------
// TESTES para verificar se a resolução está correta
// --------------------------------------------------------------------------------------------

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assert<T, Expected> = IsAny<T> extends true
    ? false // Se T for `any`, falha
    : T extends Expected
    ? (Expected extends T ? true : false)
    : false;

// Solução esperada
type Expected = (name: string) => string;

// Aluno cria o tipo:
type User2 = typeof adicionaSaudacao;

// Teste
const isCorrectSignature: Assert<User2, Expected> = true;

type ExpectedParam1 = anyt;
type UserParam1 = Parameters<typeof adicionaSaudacao>[0];
const isCorrectParameter: Assert<UserParam1, ExpectedParam1> = true;