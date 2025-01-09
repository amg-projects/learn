// Já o TypeScript, vai checar tudo em tempo de compilação, então ele vai te dizer:
// Esse valor pode ser undefined, então você não pode só sair chamando métodos e propriedades nele.
// É necessário fazer uma checagem de tipos antes de acessar propriedades e métodos.

import { getFavorites } from "./_apoio"

const usersAgain = ['user1', 'user2', 'user3', 'user4', 'user5']

// E queremos exibir os favoritos de todos eles.
const favoritesInTS = [
    getFavorites(usersAgain[0]),
    getFavorites(usersAgain[1]),
    getFavorites(usersAgain[2]),
    getFavorites(usersAgain[3]),
    getFavorites(usersAgain[4])
]

console.log(favoritesInTS) // [[1, 2, 3], [1], undefined, undefined, undefined] 
// (undefined para user3, user4 e user5 significa que eles não têm favoritos)

for (let i = 0; i < usersAgain.length; i++) { // Vamos exibir a quantidade de favoritos de cada usuário.
    const usuarioAtual = usersAgain[i] // Pega o usuário atual passa pelos users de 1 a 5
    const favs = favoritesInTS[i] // Pega os favoritos do usuário atual (pega a lista dentro da lista)

    // O typescript sabe que opde ser undefined, então ele dá erro
    const quantidadeFavoritosDandoErro = favs.length
                                         // ^?
    // Ele te obriga a se preoucupar com o caso em que favs é undefined

    // E você tem que tratar esse caso
    if (favs === undefined) {
        // Dentro desse if, o typescript sabe que favs é undefined
        favs // => 

        console.log(`O usuário ${usuarioAtual} não tem favoritos`)
    } else {
        // Dentro desse else, o typescript sabe que favs é um array de números (por exclusão, já que não é undefined)
        favs // => 

        // Experimente passar o mouse sobre favs e ver o tipo inferido pelo TypeScript dentro e fora do if
        const quantidadeFavoritos = favs.length
        console.log(`O usuário ${usuarioAtual} tem ${quantidadeFavoritos} favoritos`)
    }

    // Fora do if, o typescript não sabe se favs é um array de números ou undefined (ele só sabe que é um dos dois)
    favs // =>

    let verifica: number[] = favs // Dá erro, pois o typescript não sabe se favs é um array de números
    let verifica2: undefined = favs // Dá erro, pois o typescript não sabe se favs é undefined
}
