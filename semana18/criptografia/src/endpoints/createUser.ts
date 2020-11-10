import { Request, Response } from "express";
 import insertUser from "../data/insertUser"; 
import { generateToken } from "../services/authenticator";
import { hash } from "../services/genereteHash";
import {generateId} from "../services/generateId";
export default async function createUser(
    req: Request,
    res: Response
) {
    try {
        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email ||
            !req.body.password
        ) {
          throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }
        const id: string = generateId()

        /*vai guardar a senha que vem do body na requisicao, ou seja o que eu digito
        ao criar o usuário. E após isso, passo dentro da função de inserção do banco 
        essa variavel e pronto. */
        const cypherPassword = await hash(req.body.password);

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            cypherPassword
        )
         const token: string = generateToken({
            id
         })
        res
            .status(201)
            .send({
               message:"Usuário criado!",
               token
            })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}