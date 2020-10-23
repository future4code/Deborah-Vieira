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
];
/*Qual método HTTP você deve utilizar para isso?
R: Método GET

b. Como você indicaria a entidade que está sendo manipulada?
R: A entidade é users
*/
app.get("/users", (req, res) => {
    try {
        res.status(200).send(users);
    }
    catch (error) {
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});
//feito em aula
app.get("/users/query", (req, res) => {
    const name = req.query.name;
    const age = Number(req.query.age);
    try {
        const user = users.find((use) => use.name === name || use.age === age);
        if (!user) {
            throw new Error();
        }
        res.status(200).send(user);
    }
    catch (error) {
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});
app.get("/users", (req, res) => {
    try {
        res.status(200).send(users);
    }
    catch (error) {
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});
app.get("/users/:type", (req, res) => {
    try {
        const usersByType = users.filter((user) => user.type === req.params.type);
        res.status(200).send(usersByType);
    }
    catch (error) {
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});
app.post("/users", (req, res) => {
    try {
        const { id, name, email, age, type } = req.body;
        const user = {
            id,
            name,
            email,
            age,
            type
        };
        users.push(user);
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
