// Ignore esse arquivo nos seus estudos, ele é apenas um apoio para a explicação do arquivo 2-primitives.ts.
const database = {
    user1: [1, 2, 3],
    user2: [1],
}

export function getFavorites(user) {
    return database[user]
}