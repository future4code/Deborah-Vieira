import { hash } from "bcryptjs";
import selectUserByEmail from "../data/selectUserByEmail";


export async function resetPassqord(req: Request, res:Response){
    let erroCode = 400;
    try {
        const email =  req.body.email;
        if(!email){
            throw new Error("Por favor, insira um email válido")
        }
        
        const user = await selectUserByEmail(email)
            if(!user){
                erroCode = 404;
                throw new Error("Usuário não encontrado")

            }
            const password = "amora";
            const hashPassword =  await hash(password);
            
            await updatePassword(user.id, hashPassword);
            res.send({message: "Senha atualizada com sucesso"}).status(200)
    } catch (error) {
        res.send(erroCode).send({message: "Vacilona"})
    }
}