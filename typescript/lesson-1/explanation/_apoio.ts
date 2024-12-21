// Ignore esse arquivo nos seus estudos, ele é apenas um apoio para a explicação do arquivo 2-primitives.ts.
export const funcaoQuePegaDadoDoBackend = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as unknown;

// Ignore esse arquivo nos seus estudos, ele é apenas um apoio para a explicação do arquivo 2-primitives.ts.
const database = {
    user1: [1, 2, 3],
    user2: [1],
}

export function getFavorites(user: string): number[] | undefined {
    return database[user]
}