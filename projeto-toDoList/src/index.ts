import express, { Express, Request, Response } from "express";
import knex from 'knex'
import cors from "cors";
import { AddressInfo } from "net";
import { Pokemon, POKE_TYPES } from "./types";
import { getAllPokemons } from "./endpoitns/getAllPokemons";
import { createPokemon } from "./endpoitns/CreatePokemons";

const app: Express = express();

//transformando a resposta do servidor
app.use(express.json());
app.use(cors())


export const pokemons: Pokemon[] = []


/* Endpoints da aplicação, as funcções foram abstraidas para outros arquivos */
app.get("/pokemon/all", getAllPokemons);

app.post("/pokemon/new", createPokemon)

/* Configuração Knex, Estabelece conexão com o banco */
export const connection = knex({

client: "mysql",
connection: {
host:"ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
port:3306,
user:"deborah-viana",
password:"WmFTYK#Lct61AtVJT9J5",
database:"jackson-deborah-viana"
}
})
    
//configuração do servidor
const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
