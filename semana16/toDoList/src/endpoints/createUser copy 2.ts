import {Request, Response} from 'express'

export default async function createUser(
    req:Request, 
    res:Response):Promise<void>{
    try {
        //validar a entrada da req
        //consultar o banco
        //validar saida do banco
        //responder a requisição
    } catch (error) {
        res.status(401).send(
        {message: error.message || error.sqlMessage})
    }

}