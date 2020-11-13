import { connection } from "..";
//quando me retorna alguma coisa no body, uso o row

export default async function selectTaskById(
    id:string
    ):Promise<any>  
      {
      const result =  await connection.raw(`
        SELECT task.* , nickname FROM to_do_list_task AS task
        JOIN  to_do_list_user AS user
        ON author_id = user.id
        WHERE task.id = ${id};

      `)
      
        return result[0][0]
    }