import {Request, Response} from 'express'
import { selectUserById } from '../data/selectUserById'

export default async function getUserById(
    req:Request, 
    res:Response){
    try {
        //consultar o banco, função select vem de data.
        const user = await selectUserById(req.params.id)
        //validar a entrada da req
        if(!user){
            res.status(404).send({
                message: "Usuário não encontrado!"
            })
            return
        }
        //validar saida do banco
        /*responder a requisição que vem da variavel user onde
         pego o id e a senha, isso é o body da resposta da requisição.*/
        res.status(200).send({
            id:user.id,
            nickname: user.nickname

        })
       
    } catch (error) {
        res.status(400).send({
        message: error.message || error.sqlMessage
        })
    }

}