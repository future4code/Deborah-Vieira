import {Request, Response} from 'express'
import insertUser from '../data/signUpTable'
import generateId from '../services/GeneratorId'

export default async function signUp(
    req:Request, 
    res:Response):Promise<void>{
    try {
        //validar a entrada da req
        if(!req.body.name || !req.body.email  || !req.body.password )
            {
                res.status(400).send({
                    message:"Preencha todos os campos"
                })
                //para parar a execução
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


        /*consultar o banco, essas informações serão inseridas no banco,
            Estou chamando a função que vem de data, que é responsavel por consultar
            o banco. Assincrona, vem de fora do meu código.*/
        
       await insertUser(
            id,
            req.body.name,
            req.body.email,
            req.body.password
       )


        //validar saida do banco
        //responder a requisição
        res.status(200).send("Usuário criado com sucesso")
    } catch (error) {
        res.status(401).send(
        {message: error.message || error.sqlMessage})
    }

}

