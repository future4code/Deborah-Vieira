"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importando express com Request e Response e cors
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//iniciando a aplicação web com express
const app = express_1.default();
//ativando os módulos de Bodyparser e cors
app.use(express_1.default.json());
app.use(cors_1.default());
let clientes = [
    {
        name: "Déborah",
        cpf: "021.203.152-20",
        dataNascimento: "14-07-1990",
        transacoes: []
    },
    {
        name: "Déborah",
        cpf: "021.203.152-20",
        dataNascimento: "14-07-1991",
    },
];
//criando um cliente
app.post("/users", (req, res) => {
    try {
        const { name, cpf, dataNascimento } = req.body;
        const user = {
            name,
            cpf,
            dataNascimento,
        };
        clientes.push(user);
        res.status(200).send({ message: "User created successfully" });
    }
    catch (error) {
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
});
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
