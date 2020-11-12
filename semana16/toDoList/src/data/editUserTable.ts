import { connection } from "..";
//edição de usuário. (?) significa que o parametro é opcional

export default  async function editUserTable(
    id: string,
    name?:string ,
    nickname?:string ,
    email?:string){

        //conexão com o banco e condicionais usando raw para selecionar cada item da tabela
        if(name){
            await connection.raw(`
            UPDATE to_do_list_user
            SET name = '${name}'
            WHERE id = '${id}' 
            `)
        }

        if(nickname){
            await connection.raw(`
            UPDATE to_do_list_user
            SET nickname = '${nickname}'
            WHERE id = '${id}' 
            `)
        }

        
        if(email){
            await connection.raw(`
            UPDATE to_do_list_user
            SET email = '${email}'
            WHERE id = '${id}' 
            `)
        }
      
}