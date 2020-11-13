import { connection } from "../index";

export default async function signUp(
    name:string ,
    email:string,
    
){

    //chamando a conexão para inserir os dados que vem como parametro
    await connection.insert({
        name ,
        email 
    }).into('cookenu_users')
}
  
    
    