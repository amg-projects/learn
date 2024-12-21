import { getFavorites } from "./_apoio";

// Código JS: tipagem dinâmica, impossível de "escolher" o tipo de uma variável.
let a = 10; // x é do tipo number, mas isso não é explicitamente definido pelo programador.
a = '10'; // Uma linha abaixo, x já mudou de tipo, sem aviso prévio. Agora é do tipo string.

// Podemos ainda criar uma variável sem inicializá-la, e depois atribuir um valor a ela.
let b // y é inicializado com o valor undefined, mais tarde, pode ser qualquer coisa.
b = 10; // y agora é do tipo number.
