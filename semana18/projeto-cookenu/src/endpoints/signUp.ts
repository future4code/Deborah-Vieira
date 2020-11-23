import {Request, Response} from 'express'
import insertUser from '../data/signUpTable'
import generateId from '../services/generatorId'
import { generateToken } from '../services/authenticator'

export default async function signUp(
    req:Request, 
    res:Response):Promise<void>{
    try {
        //validação 
        if(!req.body.name || !req.body.email  || !req.body.password )
            {
                res.status(400).send({
                    message:"Preencha todos os campos"
                })
                //para a execução
                return
            }

            if(req.body.password.length < 6){
                res.status(400).send({
                    message:"Senha deve ser maior que 6 caracteres."
                  
                })
                return
            }

            
        //criando id usando o date e os numeros randomicos e passando para string
        const id:string = generateId()


       //DB function
       await insertUser(
            id,
            req.body.name,
            req.body.email,
            req.body.password
       )


       const token: string = generateToken({
        id
     })
        //validar saida do banco, responder a requisição
         res.status(201).send({
           message:"Usuário criado com sucesso!",
           token
        })
    
        //responder a requisição
        res.status(200).send("Usuário criado com sucesso")
    } catch (error) {
        res.status(401).send(
        {message: error.message || error.sqlMessage})
    }

}

