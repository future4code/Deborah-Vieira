import { connection } from "..";

/*conecta no banco de dados puxando o id do user
após esse passo, crio a função de endpoint de pegar o id*/
export async function selectUserById(id:string){

    const result = await connection('to_do_list_user')
    .select('*')
    .where({ id })

    /*me devolve uma lista de metadados, mas quero somente o que está nessa 
    posição*/
    return result[0]
}