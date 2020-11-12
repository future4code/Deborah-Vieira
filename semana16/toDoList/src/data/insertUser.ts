import { connection } from "../index";

export default async function insertUser(
    id:string ,
    name:string ,
    nickname:string ,
    email:string
){

    //chamando a conexão para inserir os dados que vem como parametro
    await connection.insert({
        id,
        name ,
        nickname ,
        email
    }).into('to_do_list_user')
}
  
    
    