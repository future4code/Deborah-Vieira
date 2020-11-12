import {Request, Response} from 'express'
import editUserTable from '../data/editUserTable'

export default async function editUser(
    req:Request, 
    res:Response):Promise<void>{
    try {

        //validar a entrada caso usuário deixe em branco
        if(
            req.body.name === '' ||
            req.body.nickname === '' ||
            req.body.email === ''
            ){
                res.status(400).send( {
                       message: 'Nenhum dos campos pode esta em branco.'})
                }

        if(
            !req.body.name  &&
            !req.body.nickname &&
            !req.body.email 
            ){
                res.status(400).send( {
                       message: 'Escolha um valor para atualizar.'})
                }         
           
        /*consultar o banco, nesse caso ele não me devolve nada 
        não preciso  validar sua saida*/
        await editUserTable(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.status(200).send({
            message: "Usuário atualizado com sucesso!"
        })

        //responder a requisição
    } catch (error) {
        res.status(401).send({
            message: error.message || error.sqlMessage
        })
    }

}