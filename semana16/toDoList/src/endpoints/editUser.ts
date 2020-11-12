import {Request, Response} from 'express'
import editUserTable from '../data/editUserTable'

export default async function editUser(
    req:Request, 
    res:Response):Promise<void>{
    try {
        //validar a entrada da req
        if(!req.body.name || !req.body.nickname || !req.body.email){
            "Preencha todos os campos!"
        }
        //consultar o banco
        await editUserTable(
            req.body.name,
            req.body.nickname,
            req.body.email
        )

         //validar saida do banco
         res.status(200).send(
            {message: "Usuário atualizado com sucesso!"})

        //responder a requisição
    } catch (error) {
        res.status(401).send(
        {message: error.message || error.sqlMessage})
    }

}