import {Request, Response} from 'express'
import insertTask from '../data/insertTasks'
import moment from 'moment'

export default async function createTask(
    req:Request, 
    res:Response):Promise<void>{

        try {
            //validar a entrada da req
            if(
                !req.body.title ||
                !req.body.description ||
                !req.body.deadline ||
                !req.body.authorId 
                )   {
                    res.status(400).send({
                        message:"Preencha todos os campos acima."
                         })
                    return
                     }

            //logica da data aqui
            /*lógica de expiração de data aqui : usando a lib moment, 
            passa o parametro e fala qual formato, e depois diminui com a data atual usando unix
             Conferimos se a data é uma data futura */
            const dateDifference: number = moment(req.body.deadline,'DD/MM/YY').unix() - moment().unix()
                if(dateDifference <=0){
                    res.status(400).send({
                        message:"O deadline precisa ter uma data futura."
                         })
                }

         //criando id usando o date e os numeros randomicos e passando para string
        const id:string = Date.now() + Math.random().toString()

            //consultar o banco e usandar o moment para passar a data correta
            await insertTask(
                id,
                req.body.title,
                req.body.description,
                moment(req.body.deadline, 'DD/MM/YYYY').format('YYYY/MM/DD'), 
                req.body.authorId
            )
             //responder a requisição
            res.status(200).send({
                message: "Tarefa criada com sucesso!",
                //informar pro front o id gerado
                id
            })

           
        } catch (error) {
            res.status(401).send({
                message: error.message || error.sqlMessage
            })
        }

}