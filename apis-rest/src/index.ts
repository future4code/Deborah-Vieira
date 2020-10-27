//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());


let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

/*****  Questão 01 ******/
/*Qual método HTTP você deve utilizar para isso?
R: Método GET
b. Como você indicaria a entidade que está sendo manipulada?
R: A entidade é users*/
app.get("/users", (req: Request, res: Response): void =>{

    try{
        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

/*****  Questão 03 ******/
/* a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
R: GET
Altere este endpoint para que ele devolva uma mensagem de erro
 caso nenhum usuário tenha sido encontrado.
*/
app.get("/users/query", (req: Request, res: Response): void =>{
    const name = req.query.name;
       try{
        const user = users.find((use)=> use.name === name )
        if(!user){
            throw new Error("User not found");
        }
        console.log(user)
        res.status(200).send(user);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

/*****  Questão 02 ******/
/* Como você passou os parâmetros de type para a requisição? Por quê?
Com uma variavel que recebe os types filtrados no método send.
b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
*/
app.get("/users/:type", (req: Request, res: Response): void =>{
    try{
        const usersByType = users.filter((user)=>user.type === req.params.type)
        if(!(req.params.type in usersByType )){
            throw new Error()
        }
        res.status(200).send(usersByType);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
}); 

/*****  Questão 04 ******/
/*Mude o método do endpoint para PUT. O que mudou?
Você considera o método PUT apropriado para esta transação? Por quê?*/

type User = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

app.put("/users", (req: Request, res: Response): void=>{
    try{
        const {id, name, email, age, type} = req.body;

        const user : User = {
            id:id,
            name: name,
            email: email,
            age: age,
            type: type
        }

        users.push(user);
        res.status(200).send({message: "User created successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
