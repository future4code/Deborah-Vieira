import { connection } from "../index";

export default async function signUpTable(
    id:string ,
    name:string ,
    email:string,
    password:String
){

    //chamando a conexão para inserir os dados que vem como parametro
    await connection.insert({
        id,
        name ,
        email ,
        password
    }).into('cookenu_users')
}
  
    
    