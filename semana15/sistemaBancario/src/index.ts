//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';


//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());


/*Crie um tipo para representar uma conta para o usuário*/
type cliente = {
    name: string,
    cpf: number,
    dataNascimento: number,
    
}

const clientes : cliente [] = [

    {   
        name: "debe",
        cpf: 12312345678,
        dataNascimento : 14071990        
    },

    {   
        name: "Deborah",
        cpf: 12312345678,
        dataNascimento : 14071990        
    },

    
]


   
     

//transações em conta
type Extrato = {
    saldo : number,
    pagarconta: number,
    transferencia: number,
    receber: number

}

//criando um cliente
app.post("/users", (req: Request, res: Response): void=>{
    try{
        const {name, cpf, dataNascimento} = req.body;

        const user = {
            name : name,
            cpf: cpf,
            dataNascimento: dataNascimento
            
        }

        clientes.push(user);
        res.status(200).send({message: "User created successfully"});

    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})




app.listen(3003, () => {
    console.log("Servidor funcionando!")
})
