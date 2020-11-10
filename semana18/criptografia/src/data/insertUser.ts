import { connection } from "../index";
//criar a coluna de senha dessa tabela.

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string
) {
    await connection.insert({
        id,
        name,
        nickname,
        email,
        password
    }).into('to_do_list_users')
}