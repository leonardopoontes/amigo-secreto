import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de um amigo secreto', () => {
    test('cada participante não sorteia o proprio nome', () => {
        const participantes = [
            'Ana',
            'Catarina',
            'Juliana',
            'João',
            'Vinicius',
            'Natalia'
        ]

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participantes => {
            const amigoSecreto = sorteio.get(participantes)
            expect(amigoSecreto).not.toEqual(participantes)
        })
    })
})