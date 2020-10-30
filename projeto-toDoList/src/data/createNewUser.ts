import {connection} from '../index'
import { POKE_TYPES } from '../types' //Enum de tipos

/*funções de criação, devem receber parametros e cada um deve ser tipado
de acordo com a tipagem da tabela que foi criado */
export async function createNewPokemon(
    id: number,
    name:string,
    type:POKE_TYPES
):Promise<void>{
    try {
        await connection.raw(`
            INSERT INTO pokemons(id, name, type) VALUES(
                ${id},
                "${name}",
                "${type}"
            );
        `)
        console.log("Pokemon criado com sucesso!")
    } catch (error) {
        console.log(error)
    }

}