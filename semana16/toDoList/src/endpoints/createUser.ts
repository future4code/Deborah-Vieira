import {Request, Response} from 'express'
import insertUser from '../data/insertUser'

export default async function createUser(
    req:Request, 
    res:Response):Promise<void>{
    try {
        //validar a entrada da req
        if(!req.body.name || !req.body.nickname || !req.body.email)

             {
                 res.status(400).send("Preencha todos os campos")

            }

        //criando id usando o date e os numeros randomicos e passando para string
        const id:string = Date.now() + Math.random().toString()


        /*consultar o banco, essas informações serão inseridas no banco,
            Estou chamando a função que vem de data, que é responsavel por consultar
            o banco. Assincrona, vem de fora do meu código.*/
        
       await insertUser(
            id,
            req.body.name,
            req.body.nickname, 
            req.body.email
       )


        //validar saida do banco
        //responder a requisição
        res.status(200).send("Usuário criado com sucesso")
    } catch (error) {
        res.status(401).send(
        {message: error.message || error.sqlMessage})
    }

}

