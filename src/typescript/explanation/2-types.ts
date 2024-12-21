import { funcaoQuePegaDadoDoBackend } from "./_apoio";

/***
 * ANTES DE COMEÇAR
 * INSTALE ESSA EXTENSÃO NO SEU VSCODE:
 * https://marketplace.visualstudio.com/items?itemName=Orta.vscode-twoslash-queries
 */

// Código TS: tipagem estática, o tipo de uma variável é definido pelo programador.
let x: number = 10; // x é do tipo number, e não pode ser alterado para outro tipo.
x = 'hello world'; // Erro de compilação, x é do tipo number, e não pode ser atribuído um valor do tipo string.

// É possível "declarar" o tipo de uma variável sem atribuir um valor, da mesma forma que fizemos no js.
let y: number; // No entanto, é necessário definir um tipo para a variável.
y = 10; // Atribuição de valor para a variável y.
y = 'hello world'; // Erro de compilação, y é do tipo number, e não pode ser atribuído um valor do tipo string.

// No dia a dia, quando criamos uma variavel e já atribuímos um valor a ela, o TypeScript infere o tipo da variável.
// Não é necessário declarar o tipo da variável, o TypeScript faz isso por você.
// E você ainda obtém as vantagens da tipagem estática. Sem precisar declarar o tipo, o TypeScript já sabe qual é.
let z = 10; // z é do tipo number, o TypeScript inferiu o tipo da variável.
z = 'hello world'; // Erro de compilação, z é do tipo number, e não pode ser atribuído um valor do tipo string.

// O tipo é propagado para outras variáveis, funções e objetos.
let m = z; // m é do tipo number, pois z é do tipo number.
m = 'hello world'; // Erro de compilação, m é do tipo number, e não pode ser atribuído um valor do tipo string.


// Se uma variável pode ser mais de um tipo dependendo de uma condição, podemos usar a tipagem de união.
let n: number | string; // n pode ser number ou string.
n = 10; // Atribuição de valor number para a variável n.
n = 'hello world'; // Atribuição de valor string para a variável n.
n = false; // Erro de compilação, n pode ser number ou string, mas não pode ser boolean ou qualquer outro tipo.

// ----------------------------

// Tipos primitivos em TypeScript
let isDone: boolean = false; // Tipo booleano
let decimal: number = 6; // Tipo numérico
let color: string = 'blue'; // Tipo string
let list: number[] = [1, 2, 3]; // Tipo array de números
let tuple: [string, number] = ['hello', 10]; // Tipo tupla

// Checagem de acesso a funções e propriedades válidas

// A função `toUpperCase` existe para variáveis do tipo string.
console.log(color.toUpperCase()); // Saída: BLUE

// A função `toUpperCase` não existe para variáveis do tipo number.
console.log(decimal.toUpperCase()); // Erro de compilação.

/**
 * Tipos especiais (ainda primitivos, mas não existem em linguagens como C# e Java)
 */

// Tipo `undefined` 
let v1: undefined
v1 = undefined; // Atribuição de valor undefined para a variável v1
v1 = 4; // Erro de compilação, v1 é do tipo undefined, e não pode ser atribuído um valor do tipo number.

// Tipo null
let v2: null
v2 = null; // Atribuição de valor null para a variável v2
v2 = 4; // Erro de compilação, v2 é do tipo null, e não pode ser atribuído um valor do tipo number.

// Tipo any
let v3: any
v3 = 4; // Atribuição de valor number para a variável v3. Funciona, pois v3 é do tipo any.
v3 = '4'; // Atribuição de valor string para a variável v3. Funciona, pois v3 é do tipo any.
v3 = true; // Atribuição de valor boolean para a variável v3. Funciona, pois v3 é do tipo any.
v3 = [1, 2, 3]; // Atribuição de valor array para a variável v3. Funciona, pois v3 é do tipo any.
v3 = { a: { b: { c: [ [...v3, v3 ]]}}} // Tudo é possível com any.

// IMPORTANTE: Evitar o uso de any, pois ele desabilita a checagem de tipos do TypeScript.
// É como se você estivesse programando em JavaScript, sem nenhum tipo de checagem de tipos.
// Para demonstrar os perigos de any, veja o exemplo abaixo:
let a: any = 4;
a.toUpperCase(); // Deveria dar erro de compilação (só strings tem toUpperCase), mas não dá, pois a é do tipo any.
a.push(4); // Deveria dar erro de compilação (não da pra adicionar itens se não for lista), mas não dá, pois a é do tipo any.
a.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z; // Deveria dar erro de compilação, mas não dá, pois a é do tipo any.
a() // Deveria dar erro de compilação (não é uma função), mas não dá, pois a é do tipo any.

// Tipo unknown (contrário de any)
let v4: unknown
v4 = 4; // Atribuição de valor number para a variável v4. Funciona, pois v4 é do tipo unknown.
v4 = '4'; // Atribuição de valor string para a variável v4. Funciona, pois v4 é do tipo unknown.
// Da mesma forma que any, unknown permite qualquer tipo de valor, mas com uma diferença crucial:
// unknown não permite que você acesse propriedades e métodos que não existem no tipo atribuído.
v4.toUpperCase(); // Erro de compilação, pois o tipo unknown não possui o método toUpperCase.
v4.push(4); // Erro de compilação, pois o tipo unknown não possui o método push.
v4.a.b.c.d.e // Erro de compilação, pois o tipo unknown não possui a propriedade a.
v4() // Erro de compilação, pois o tipo unknown não é uma função.
// Conclusão: unknown é mais seguro que any, 
// pois ele não permite acessar propriedades e métodos que não existem no tipo atribuído.

// Como entender o tipo any: qualquer coisa é possível.
// Como entender o tipo unknown: nós não sabemos o que é, então não podemos fazer nada com ele.
// Exemplos da vida real:

// uma CADEIRA é um objeto sentável, então podemos sentar nela.
// mas se você está diante de uma cadeira, vendado, e não sabe o que é, você não pode fazer nada com ela.
// se te contarem que é uma cadeira, você pode sentar nela, por que agora você sabe o que é.
// Exemplo de código:
let dadoQueVeioDoBackend = funcaoQuePegaDadoDoBackend();
    // ^?

// Se tentarmos supor que esse dado é um texto, e tentarmos chamar o método toUpperCase, teremos um erro de compilação.
console.log(dadoQueVeioDoBackend.toUpperCase()); // Erro de compilação.

// Precisamos CHECAR o tipo do dado antes de fazer qualquer coisa com ele.
if (typeof dadoQueVeioDoBackend === 'string') {
    console.log(dadoQueVeioDoBackend.toUpperCase()); // Funciona, pois sabemos que dadoQueVeioDoBackend é do tipo string.
    //           ^?

    // INFORMAÇÃO ADQUIRIDA: o typescript é inteligente para perceber que, dentro do if, o tipo de dadoQueVeioDoBackend é string.
}

// Tipo fora do if: unknown
dadoQueVeioDoBackend // =>

// Também existem os tipos `void` e `never`.
// Vocês verão eles no dia a dia, mas para não ficar muito extenso, não vamos falar deles agora.