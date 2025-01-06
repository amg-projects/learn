// O javascript realmente não checa nada para a gente.
// Qual o problema disso?
// Imagine o seguinte cenário:

// Você está desenvolvendo um sistema de favoritos para um site de livestreams.
// Você quer exibir os 5 favoritos do usuário

const users = ['user1', 'user2']

const favoritos = [
    getFavorites(users[0]),
    getFavorites(users[1])
]

console.log(favoritos) // [[1, 2, 3], [1]]
// Até aqui, tudo bem. O user1 tem 3 favoritos, e o user2 tem 1 favorito. [1, 2, 3] e [1] respectivamente.

// Vamos exibir a quantidade de favoritos de cada usuário.
for (let i = 0; i < users.length; i++) { // Vamos exibir a quantidade de favoritos de cada usuário.
    const usuarioAtual = users[i] // Pega o usuário atual passa por user1 e user2
    const favoritosUsuarioAtual = favoritos[i] // Pega os favoritos do usuário atual (pega a lista dentro da lista)

    // Pega o tamanho da lista de favoritos (tamanho de [1,2,3] para user1 e tamanho de [1] para user2)
    const quantidadeFavoritos = favoritosUsuarioAtual.length

    console.log(`O usuário ${usuarioAtual} tem ${quantidadeFavoritos} favoritos`)
}
// O for executa duas vezes, uma para cada usuário.
// O primeiro usuário tem 3 favoritos, e o segundo tem 1 favorito.
// Nenhum problema até aqui.

// Agora, temos uma lista maior de usuários.
const usersInSidebar = ['user1', 'user2', 'user3', 'user4', 'user5']

// E queremos exibir os favoritos de todos eles.
const favoritosSidebar = [
    getFavorites(usersInSidebar[0]),
    getFavorites(usersInSidebar[1]),
    getFavorites(usersInSidebar[2]),
    getFavorites(usersInSidebar[3]),
    getFavorites(usersInSidebar[4])
]

console.log(favoritosSidebar) // [[1, 2, 3], [1], undefined, undefined, undefined] 
// (undefined para user3, user4 e user5 significa que eles não têm favoritos)

// Se tentarmos novamente exibir a quantidade de favoritos de cada usuário, teremos um problema.
for (let i = 0; i < users.length; i++) { // Vamos exibir a quantidade de favoritos de cada usuário.
    const usuarioAtual = users[i] // Pega o usuário atual passa pelos users de 1 a 5
    const favoritosUsuarioAtual = favoritos[i] // Pega os favoritos do usuário atual (pega a lista dentro da lista)

    // Pega o tamanho da lista de favoritos do usuário atual
    const quantidadeFavoritos = favoritosUsuarioAtual.length // Detalhe: os usuários user3, user4 e user5 não têm favoritos!
    //                                               ^ aqui está o problema (para user3, user4 e user5, favoritosUsuarioAtual é undefined)
    //                                               | e o método length não existe para undefined
    //                                               | então, o código quebra aqui
    //                                               | e não conseguimos exibir a quantidade de favoritos de todos os usuários
    //                                               | e o usuário não consegue ver seus favoritos (ou seja, o sistema está quebrado)
    //                                               | e o PIOR: só vamos descobrir isso CASO ALGUM USUARIO NÃO TENHA FAVORITOS
    //                                               | e pode ser que nos nossos testes isso nunca aconteça, já que já teremos nossas contas com favoritos
    //                                               | e isso passar batido e ir para produção. aí estamos ferrados

    console.log(`O usuário ${usuarioAtual} tem ${quantidadeFavoritos} favoritos`)
}







