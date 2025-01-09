const pessoa = {
    nome: 'João',
    idade: 20,
    cidade: 'São Paulo'
}

pessoa // =>

// Acessando propriedades de um objeto
console.log(pessoa.nome) 
                // ^? 
console.log(pessoa.idade)
                // ^? 
console.log(pessoa.cidade)
                // ^? 

// Se tentarmos acessar uma propriedade que não existe, o TypeScript nos avisará.
console.log(pessoa.altura) // Erro de compilação (no JavaScript, não teríamos aviso)

// Se quisermos "reutilizar" o tipo de um objeto, podemos extraí-lo com typeof

type Pessoa = typeof pessoa
    // ^?

// Agora temos um tipo chamado Pessoa, que é igual ao tipo da variável pessoa que criamos.
// Podemos usá-lo para tipar outras variáveis.

let outraPessoa: Pessoa = { // Erro de compilação, pois não passamos a propriedade cidade
    nome: 'Maria',
    idade: 30,
}

let maisUmaPessoa: Pessoa = {
    nome: 'José',
    idade: 40,
    cidade: 'Rio de Janeiro'
} // Agora sim, passamos todas as propriedades necessárias

maisUmaPessoa // =>

// Também é possível criar um tipo para um objeto sem precisar criar uma variável
// Isso é útil quando queremos tipar uma função que recebe um objeto como parâmetro

type DSFU = {
    ip: string,
    porta: number,
    usuario: string,
    bytesRecebidos: number,
    bytesEnviados: number
    qualidadeSinal: number
    uptime: number
    secret: string
    conectado: boolean
}

function obterMelhorDSFU(dsfusDisponiveis: DSFU[]): DSFU | undefined {
    // Implementação da função
    // Por enquanto vamos pegar o primeiro da lista só pra simplificar
    return dsfusDisponiveis[0]
}

// Agora podemos usar o tipo DSFU para tipar o parâmetro da função
const dsfusDisponiveis: DSFU[] = [
    { ip: 'localhost', porta: 8080, usuario: 'admin', bytesRecebidos: 100, bytesEnviados: 200, qualidadeSinal: 90, uptime: 100, secret: '123', conectado: true },
    // Perceba que se você apertar Ctrl + Espaço dentro das chaves,
    // o TypeScript vai te mostrar quais são as propriedades necessárias
    // Isso acontece porque o TypeScript inferiu o tipo DSFU para o array dsfusDisponiveis
    {
        // Aperte Ctrl + Espaço aqui dentro
    }, // Ta dando erro porque não passamos todas as propriedades necessárias (tente passar todas as propriedades)
]

const melhorDSFU = obterMelhorDSFU(dsfusDisponiveis)
        // ^?

// IMPORTANTE: typescript é uma linguagem que chega pelo conteúdo, não pelo nome.
// O que isso quer dizer: se você passar um objeto que tem todas as propriedades necessárias
// Mas não se chama DSFU, o TypeScript VAI ACEITAR.
// O que importa é o conteúdo, não o nome.

// Exemplo:

type FakeDSFU = {
    campoIrrelevante: string,
    ip: string,
    porta: number,
    usuario: string,
    bytesRecebidos: number,
    bytesEnviados: number
    qualidadeSinal: number
    uptime: number
    secret: string
    conectado: boolean
    preferenciaTemporal: Date
    apelido: string
}

const fakes: FakeDSFU[] = [
    { campoIrrelevante: 'irrelevante', ip: 'localhost', porta: 8080, usuario: 'admin', bytesRecebidos: 100, bytesEnviados: 200, qualidadeSinal: 90, uptime: 100, apelido: 'DSFU 1',conectado: true, secret: '123', preferenciaTemporal: new Date() },
]

// O TypeScript aceita FakeDSFU como DSFU, pois o conteúdo é o mesmo (mesmas propriedades, mesmo tendo extras, o que importa é ter todas as propriedades necessárias)
obterMelhorDSFU(fakes)
                // ^?

// No entanto, se você passar um objeto que não tem todas as propriedades necessárias, o TypeScript vai reclamar.
// Exemplo:

type DSFUIncompleto = {
    ip: string,
    porta: number,
    usuario: string,
    bytesRecebidos: number,
    bytesEnviados: number
    qualidadeSinal: number
    uptime: number
    secret: string
} // Faltou a propriedade conectado

const incompletos: DSFUIncompleto[] = [
    { ip: 'localhost', porta: 8080, usuario: 'admin', bytesRecebidos: 100, bytesEnviados: 200, qualidadeSinal: 90, uptime: 100, secret: '123' }
]
    
// Erro de compilação, pois o objeto passado não tem todas as propriedades necessárias
// Falta a propriedade conectado
obterMelhorDSFU(incompletos)
                    // ^?   


// Outra coisa:
// É possíel "extraír" o tipo de uma propriedade de um objeto
// Usamos a sintaxe objeto[propriedade] para isso
type Nome = Pessoa['nome']
    // ^?
type Idade = Pessoa['idade']
    // ^?